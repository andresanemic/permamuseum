'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

let token;
try { token = require('../src/token.js'); } catch { token = null; }
const configPath = path.join(__dirname, '..', 'tokenomics', 'token-config.permamuseum.json');
let cfg;
try { cfg = require(configPath); } catch { cfg = null; }

function exigirImplementacion() {
  assert.ok(token, 'src/token.js debe implementar las reglas de PERMA');
  assert.ok(cfg, 'debe existir la configuración PERMA');
}

test('la configuración fija 100 millones y distribuye las seis cubetas autorizadas', () => {
  exigirImplementacion();
  assert.equal(token.validarConfig(cfg), true);
  assert.equal(cfg.totalStroops, '1000000000000000');
  assert.deepEqual(Object.fromEntries(Object.entries(cfg.buckets).filter(([, b]) => b.porcentaje).map(([k, b]) => [k, b.porcentaje])), {
    tesoreria: 20, comunidadCultural: 40, reservaLiquidez: 10, contingencia: 5, asesores: 10, fundador: 15,
  });
  const reparto = token.planDeReparto(cfg);
  assert.equal(Object.values(reparto).reduce((s, x) => s + BigInt(x), 0n), BigInt(cfg.totalStroops));
  assert.equal(reparto.andres, '150000000000000');
  assert.equal('francisco' in reparto, false);
});

test('la configuración rechaza cambios de oferta, segunda emisión, venta, mainnet y banderas', () => {
  exigirImplementacion();
  for (const alterar of [
    (c) => { c.red = 'mainnet'; },
    (c) => { c.totalStroops = '1000000000000001'; },
    (c) => { c.flags.clawbackEnabled = true; },
    (c) => { c.flags.authRequired = true; },
    (c) => { c.buckets.fundador.fundadores = { andres: 50, otraPersona: 50 }; },
  ]) {
    const c = structuredClone(cfg); alterar(c);
    assert.throws(() => token.validarConfig(c));
  }
  const origen = fs.readFileSync(path.join(__dirname, '..', 'scripts', 'token-testnet.mjs'), 'utf8').toLowerCase();
  assert.match(origen, /emitida|emision/);
});

test('el plan crea una sola emisión por oferta exacta y termina bloqueando la emisora', () => {
  exigirImplementacion();
  const cuentas = { issuer: 'GISSUER', distribuidora: 'GDISTRIB', tesoreria: 'GTES', comunidadCultural: 'GCOM', reservaLiquidez: 'GLIQ', contingencia: 'GCONT', asesores: 'GASES', andres: 'GANDRES', prueba: 'GPRUEBA' };
  const pasos = token.planDeOperaciones(cfg, cuentas, { ahora: '2026-10-03T12:00:00Z' });
  assert.equal(pasos.filter((p) => p.tipo === 'emision').length, 1);
  assert.equal(pasos.find((p) => p.tipo === 'emision').stroops, cfg.totalStroops);
  assert.equal(pasos.at(-1).tipo, 'bloquear-emisor');
  assert.equal(pasos.at(-1).masterWeight, 0);
  assert.deepEqual([pasos.at(-1).lowThreshold, pasos.at(-1).medThreshold, pasos.at(-1).highThreshold], [0, 0, 0]);
  assert.deepEqual(pasos.at(-1).firmantesExtra, []);
});

test('el plan reserva liquidez sin pool y usa cubeta de comunidad cultural', () => {
  exigirImplementacion();
  const cuentas = Object.fromEntries(['issuer', 'distribuidora', 'tesoreria', 'comunidadCultural', 'reservaLiquidez', 'contingencia', 'asesores', 'andres', 'prueba'].map((r) => [r, `G${r}`]));
  const pasos = token.planDeOperaciones(cfg, cuentas, { ahora: '2026-10-03T12:00:00Z' });
  assert.ok(pasos.some((p) => p.tipo === 'reparto' && p.rol === 'comunidadCultural'));
  assert.ok(!pasos.some((p) => /pool|oferta|venta|liquidez/i.test(p.tipo)));
  assert.equal(BigInt(pasos.find((p) => p.tipo === 'reparto' && p.rol === 'reservaLiquidez').stroops) + 10000000n, 100000000000000n);
});

test('fundador único Andrés recibe 36 balances, con cliff de 12 meses y respaldo de tesorería a 180 días', () => {
  exigirImplementacion();
  const cuentas = Object.fromEntries(['issuer', 'distribuidora', 'tesoreria', 'comunidadCultural', 'reservaLiquidez', 'contingencia', 'asesores', 'andres', 'prueba'].map((r) => [r, `G${r}`]));
  const pasos = token.planDeOperaciones(cfg, cuentas, { inicio: '2026-10-03T00:00:00Z', ahora: '2026-10-03T12:00:00Z' });
  const vesting = pasos.filter((p) => p.tipo === 'balance-vesting');
  assert.equal(vesting.length, 36);
  assert.ok(vesting.every((p) => p.fundador === 'andres'));
  assert.equal(vesting[0].fecha, '2027-10-03T00:00:00.000Z');
  assert.ok(vesting.every((p) => p.reclamantes[1].cuenta === cuentas.tesoreria));
  assert.equal(token.predicadoDeTramo(vesting[0].fecha, 180).respaldo.predicado.unix - token.predicadoDeTramo(vesting[0].fecha, 180).principal.predicado.unix, 180 * 86400);
});

test('la demo de vesting rechaza reclamo temprano y permite el reclamo al desbloquear', () => {
  exigirImplementacion();
  const pasos = token.planDeOperaciones(cfg, { issuer: 'Gissuer', distribuidora: 'Gdist', tesoreria: 'Gtes', comunidadCultural: 'Gcom', reservaLiquidez: 'Gliquidez', contingencia: 'Gcont', asesores: 'Gases', andres: 'Gandres', prueba: 'Gprueba' }, { ahora: '2026-10-03T12:00:00Z' });
  const demo = pasos.find((p) => p.tipo === 'balance-prueba-vesting');
  assert.equal(demo.fecha, '2026-10-03T12:04:00.000Z');
  assert.equal(typeof token.reclamoPermitido(demo, new Date('2026-10-03T12:03:59Z')), 'boolean');
  assert.equal(token.reclamoPermitido(demo, new Date('2026-10-03T12:03:59Z')), false);
  assert.equal(token.reclamoPermitido(demo, new Date('2026-10-03T12:04:00Z')), true);
});

test('ninguna operación ofrece precio, pool ni venta de PERMA', () => {
  exigirImplementacion();
  const cuentas = Object.fromEntries(['issuer', 'distribuidora', 'tesoreria', 'comunidadCultural', 'reservaLiquidez', 'contingencia', 'asesores', 'andres', 'prueba'].map((r) => [r, `G${r}`]));
  const pasos = token.planDeOperaciones(cfg, cuentas, { ahora: '2026-10-03T12:00:00Z' });
  assert.equal(JSON.stringify(pasos).toLowerCase().match(/precio|pool|offer|oferta de venta|createpassiveoffer/g), null);
});

test('el verificador confirma oferta constante, banderas apagadas, emisor bloqueado y un solo fundador', () => {
  exigirImplementacion();
  const resultado = token.verificarEmision({ cuentaEmisora: {}, activo: {}, saldos: {}, balancesReclamables: [] }, cfg);
  for (const n of ['emisora bloqueada', 'banderas del emisor', 'oferta total', 'saldos por cubeta', 'vesting del fundador', 'sin saldo propio']) assert.ok(resultado.comprobaciones.some((c) => c.nombre === n));
});

test('los utilitarios leen resultados Horizon y no aceptan datos mal formados', () => {
  exigirImplementacion();
  assert.equal(token.unixDePredicado({ abs_before: '2027-10-03T00:00:00Z', abs_before_epoch: '1822521600' }), 1822521600);
  assert.deepEqual(token.registroDeActivo({ records: [{ asset_code: 'PERMA' }] }), { asset_code: 'PERMA' });
});

test('el ejecutor simulado reanuda estado completo sin volver a emitir PERMA', async () => {
  exigirImplementacion();
  const { ejecutarEmision } = await import('../scripts/token-testnet.mjs');
  const root = fs.mkdtempSync(path.join(__dirname, 'tmp-perma-'));
  const stateFile = path.join(root, 'state.json');
  const outputFile = path.join(root, 'token.json');
  const operaciones = [];
  const cuentas = Object.fromEntries(['issuer', 'distribuidora', 'tesoreria', 'comunidadCultural', 'reservaLiquidez', 'contingencia', 'asesores', 'andres', 'prueba'].map((r) => [r, `G${r}`]));
  const redSimulada = {
    passphrase: 'Test SDF Network ; September 2015',
    async crearCuentas() { return { cuentas }; },
    async ejecutarPaso(paso) { operaciones.push(paso); return { hash: `sim-${operaciones.length}`, ledger: operaciones.length, hora: '2026-10-03T12:00:00Z' }; },
    async reclamarTemprano() { throw new Error('too_early:claimClaimableBalanceCannotClaim'); },
    async verificarEmision() { return { ok: true, comprobaciones: [{ nombre: 'red simulada', ok: true, detalle: 'lectura inyectada' }] }; },
  };
  try {
    for (let n = 0; n < 2; n += 1) await ejecutarEmision({ adaptador: redSimulada, config: cfg, stateFile, outputFile, ahora: () => new Date('2026-10-03T12:00:00Z') });
    assert.equal(operaciones.filter((p) => p.tipo === 'emision').length, 1);
    assert.equal(JSON.parse(fs.readFileSync(outputFile, 'utf8')).ofertaPERMA, '100000000.0000000');
    assert.equal(operaciones.some((p) => /offer|pool|venta|precio/i.test(p.tipo)), false);
  } finally { fs.rmSync(root, { recursive: true, force: true }); }
});

test('la protección Windows aplica ACL privada a la carpeta de llaves', async () => {
  const { permisosPrivados } = await import('../scripts/token-testnet.mjs');
  const archivo = path.join(__dirname, 'ruta-llaves-simulada');
  const llamadas = [];
  try {
    fs.mkdirSync(archivo, { recursive: true });
    permisosPrivados(archivo, true, (...args) => llamadas.push(args));
    if (process.platform === 'win32' && process.env.USERNAME) {
      assert.equal(llamadas.length, 1);
      assert.equal(llamadas[0][0], 'icacls');
      assert.ok(llamadas[0][1].some((arg) => arg.includes('(OI)(CI)(F)')));
    }
  } finally { fs.rmSync(archivo, { recursive: true, force: true }); }
});

test('el guardado reintenta rename transitorio y elimina el temporal', async () => {
  const { guardarJson } = await import('../scripts/token-testnet.mjs');
  const root = fs.mkdtempSync(path.join(__dirname, 'tmp-rename-'));
  const destino = path.join(root, 'estado.json');
  const renameReal = fs.renameSync;
  let intentos = 0;
  fs.renameSync = (origen, final) => {
    intentos += 1;
    if (intentos <= 2) { const e = new Error('rename transitorio'); e.code = intentos === 1 ? 'EPERM' : 'EBUSY'; throw e; }
    return renameReal(origen, final);
  };
  try {
    guardarJson(destino, { ok: true }, 0o644);
    assert.equal(intentos, 3);
    assert.deepEqual(JSON.parse(fs.readFileSync(destino, 'utf8')), { ok: true });
    assert.deepEqual(fs.readdirSync(root), ['estado.json']);
  } finally { fs.renameSync = renameReal; fs.rmSync(root, { recursive: true, force: true }); }
});

test('la paginación Horizon termina al recibir página vacía aunque conserve enlace next', async () => {
  const { registrosCompletos } = await import('../scripts/token-testnet.mjs');
  let llamadas = 0;
  const pagina = (records) => ({ records, next: async () => { llamadas += 1; return pagina(llamadas === 1 ? [{ id: 'b' }] : []); } });
  const todos = await registrosCompletos({ call: async () => pagina([{ id: 'a' }]) });
  assert.deepEqual(todos.map((r) => r.id), ['a', 'b']);
  assert.ok(llamadas <= 2);
});

test('el decodificador de XDR falla cerrado para datos inválidos y reconoce ausencia de XDR', async () => {
  const { resultadoDeXdr } = await import('../scripts/token-testnet.mjs');
  assert.equal(resultadoDeXdr('no es XDR base64'), null);
  assert.equal(resultadoDeXdr(undefined), null);
});

test('el adaptador real no usa variables de configuración sin declarar (defecto hallado al ejecutar en vivo)', () => {
  const src = fs.readFileSync(require('node:path').join(__dirname, '..', 'scripts', 'token-testnet.mjs'), 'utf8');
  const bloque = src.slice(src.indexOf('export function crearAdaptadorReal'), src.indexOf('async leerEmision'));
  assert.equal(/config.code/.test(bloque), false);
  assert.equal(/temis:/.test(src), false);
});
