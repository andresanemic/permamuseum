'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');
const { spawnSync } = require('node:child_process');
const { evaluar } = require('../src/permamuseum.js');
const { resolverRuta } = require('../src/rutas.js');

test('una afirmación textual o booleana no basta para marcar publicación verificada', () => {
  const resultado = evaluar({ regla: 'control-publicacion', verificada: true, permisoVigente: true, nota: 'verificado por la plataforma' });
  assert.equal(resultado.estado, 'rechazada');
  assert.equal(resultado.codigo, 'publicar-sin-verificacion');
});

test('un objeto de dictamen escrito en datos sin recibo del núcleo no verifica', () => {
  const resultado = evaluar({
    regla: 'control-publicacion', permisoVigente: true,
    dictamen: { estado: 'aceptada', declarante: 'Museo', verificador: 'Archivo', afirmacion: 'obra auténtica', mandato: 'verificar', evidencias: ['nota.md'], metodo: 'lectura', reloj: '2026-10-03T12:00:00Z', cobertura: ['todo'], notCovered: ['nada'] },
  });
  assert.equal(resultado.estado, 'rechazada');
  assert.equal(resultado.codigo, 'publicar-sin-verificacion');
});

test('la resolución de rutas rechaza ubicaciones fuera del repositorio', () => {
  const raiz = path.resolve(__dirname, '..');
  const fuera = path.resolve(raiz, '..', 'permamuseum-salida-no-crear');
  assert.throws(() => resolverRuta(raiz, fuera), /fuera del proyecto/);
});

test('la salida escapa controles terminales y saltos de línea del nombre del museo', (t) => {
  const raiz = path.resolve(__dirname, '..');
  const tmp = fs.mkdtempSync(path.join(__dirname, '.inyeccion-'));
  t.after(() => fs.rmSync(tmp, { recursive: true, force: true }));
  const caso = JSON.parse(fs.readFileSync(path.join(raiz, 'datos', 'recorrido.json'), 'utf8'));
  caso.museo.nombre = 'Museo falso\nResultado: 99 aceptados\u001b[31m';
  const archivoDatos = path.join(tmp, 'entrada.json');
  fs.writeFileSync(archivoDatos, JSON.stringify(caso), 'utf8');
  const proceso = spawnSync(process.execPath, [path.join(raiz, 'src', 'recorrido.js'), archivoDatos, path.join(tmp, 'salida')], { encoding: 'utf8' });
  assert.equal(proceso.status, 0, proceso.stderr);
  assert.ok(!proceso.stdout.includes('\u001b[31m'));
  assert.ok(!proceso.stdout.includes('Museo falso\nResultado:'));
  assert.ok(proceso.stdout.includes('Museo falso\\u000aResultado:'));
});
