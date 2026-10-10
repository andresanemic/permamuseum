'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { evaluar } = require('../src/permamuseum.js');

const caso = (regla, datos = {}) => ({ regla, ...datos });

const rojos = [
  ['01 museo sin verificar no publica', caso('publicar-sin-verificacion', { verificada: false })],
  ['02 declarante y verificador no pueden ser la misma parte', caso('verificador-declarante', { declarante: 'Museo Nimbo', verificador: 'Museo Nimbo' })],
  ['03 evidencia vacía no se revisa', caso('evidencia-vacia', { evidencias: [] })],
  ['04 referencias repetidas no son fuentes independientes', caso('evidencia-duplicada', { evidencias: ['ref-fic-1', 'ref-fic-1'] })],
  ['05 procedencias incompatibles de una obra chocan', caso('procedencia-incompatible', { obra: 'obra-fic-1', procedenciaExistente: 'custodia A', procedenciaPropuesta: 'custodia B' })],
  ['06 regalía superior al techo autorizado se rechaza', caso('regalia-sobre-techo', { regalia: 3, techo: 2 })],
  ['07 permiso vencido no autoriza uso', caso('permiso-vencido', { vence: '2026-10-02T00:00:00Z', ahora: '2026-10-03T00:00:00Z' })],
  ['08 permiso revocado no autoriza uso posterior', caso('permiso-revocado', { revocado: true })],
  ['09 recibo repetido no reactiva operación revocada', caso('reentrada-revocada', { reciboReutilizado: true, revocado: true })],
  ['10 dos museos no reclaman procedencia exclusiva de la misma obra', caso('colision-institucional', { principales: ['principal-a', 'principal-b'], exclusividad: true })],
  ['11 identidad de cobro duplicada no duplica regalía', caso('cobro-duplicado', { beneficiario: 'titular-fic-1', identidadesCobro: ['cuenta-fic-a', 'cuenta-fic-b'] })],
  ['12 indicios documentados de saqueo bloquean la venta', caso('indicio-saqueo', { indicioDocumentado: true, enVenta: true })],
  ['13 texto libre verificado no es dictamen estructurado', caso('etiqueta-libre', { etiqueta: 'verificado', dictamen: null })],
  ['14 administrador único no acredita verificación', caso('admin-unico', { verified: true, dictamen: null, verificadorIndependiente: false })],
  ['15 contradicción en evidencia deja la afirmación impugnada', caso('evidencia-contradictoria', { contradice: true })],
  ['16 autoridad vencida bloquea publicación', caso('autoridad-vencida', { vence: '2026-10-02T00:00:00Z', ahora: '2026-10-03T00:00:00Z' })],
  ['17 principal no escribe en espacio ajeno', caso('espacio-ajeno', { principal: 'museo-a', espacio: 'museo-b' })],
  ['18 permiso exige obra identificada y derechos declarados', caso('permiso-indeterminado', { obra: null, derechosDeclarados: false })],
  ['19 uso fuera del alcance concedido se rechaza', caso('uso-fuera-alcance', { usosPermitidos: ['exhibición'], usoSolicitado: 'acuñar-token' })],
  ['20 un token no transfiere permiso sin cláusula expresa', caso('transferencia-por-token', { hayToken: true, clausulaTransferencia: false })],
  ['21 salto de custodia sin actor o evidencia queda incompleto', caso('custodia-incompleta', { eventos: [{ entrega: null, recibe: 'custodio-fic-2', evidencia: null }] })],
  ['22 dictamen de evidencia anterior no verifica la versión actual', caso('evidencia-cambio', { versionActual: 'v2', versionRevisada: 'v1', verificada: true })],
  ['23 ejecutor no verifica su propio efecto', caso('ejecutor-verificador', { ejecutor: 'plataforma', verificador: 'plataforma' })],
  ['24 permiso revocado requiere nueva concesión para reactivarse', caso('reactivacion-sin-concesion', { revocado: true, nuevaConcesion: false })],
  ['25 rechazo identifica resolver y dato faltante', caso('rechazo-sin-salida', { quienResuelve: '', queFalta: '' })],
];

for (const [nombre, entrada] of rojos) {
  test(nombre, () => {
    const resultado = evaluar(entrada);
    assert.equal(resultado.codigo, entrada.regla, `debe rechazar por ${entrada.regla}`);
    assert.ok(resultado.motivo, 'el recibo debe nombrar el motivo');
    assert.ok(resultado.salida, 'el recibo debe decir quién resuelve y qué hacer');
  });
}

test('CONTROL: un dictamen textual no publica sin recibo verificable del núcleo', () => {
  const resultado = evaluar({ regla: 'control-publicacion', dictamen: { estado: 'aceptada', declarante: 'Museo Nimbo', verificador: 'Archivo Lumbre', afirmacion: 'custodia declarada de obra ficticia', mandato: 'revisar referencias sintéticas', evidencias: ['ref-fic-1'], metodo: 'comparación interna', reloj: '2026-10-03T12:00:00Z', cobertura: ['una referencia'], notCovered: ['autenticidad'] }, permisoVigente: true });
  assert.equal(resultado.codigo, 'publicar-sin-verificacion');
});

test('CONTROL: permiso acotado válido cubre el uso pedido', () => {
  const resultado = evaluar({ regla: 'control-permiso', obra: 'obra-fic-1', derechosDeclarados: true, usosPermitidos: ['exhibición'], usoSolicitado: 'exhibición', vence: '2026-11-01T00:00:00Z', ahora: '2026-10-03T00:00:00Z' });
  assert.equal(resultado.estado, 'aceptada');
});

test('CONTROL: dictamen válido tiene mandato, evidencia y verificador independiente', () => {
  const resultado = evaluar({ regla: 'control-dictamen', declarante: 'Museo Nimbo', verificador: 'Archivo Lumbre', mandato: 'revisar custodia declarada', evidencias: ['ref-fic-1'], metodo: 'comparación documental', cobertura: ['evento 1'], notCovered: ['autenticidad material'] });
  assert.equal(resultado.estado, 'aceptada');
});

module.exports = { rojos };
