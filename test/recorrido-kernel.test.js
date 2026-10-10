'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { KERNEL } = require('./nucleo.js');

test('el recorrido real obtiene aceptaciones verificables y conserva el rechazo', (t) => {
  const tmp = fs.mkdtempSync(path.join(__dirname, '.recorrido-'));
  t.after(() => fs.rmSync(tmp, { recursive: true, force: true }));
  const datos = path.join(__dirname, '..', 'datos', 'recorrido.json');
  const salida = path.join(tmp, 'registro');
  const proceso = spawnSync(process.execPath, [path.join(__dirname, '..', 'src', 'recorrido.js'), datos, salida], { encoding: 'utf8' });
  assert.equal(proceso.status, 0, proceso.stderr);
  const entradas = fs.readFileSync(path.join(salida, 'registro.jsonl'), 'utf8').trim().split('\n').map(JSON.parse);
  const { verifyReceipt } = require(path.join(KERNEL, 'receipt.js'));
  const aceptadas = entradas.filter((e) => e.estado === 'aceptada');
  assert.ok(aceptadas.length >= 6, `se esperaban al menos 6 aceptadas; hubo ${aceptadas.length}`);
  assert.ok(aceptadas.every((e) => verifyReceipt(e.recibo).ok), 'cada aceptación debe tener recibo de kernel verificable');
  const rechazadas = entradas.filter((e) => e.id === 'caso-rechazado');
  assert.equal(rechazadas.length, 1);
  assert.equal(rechazadas[0].estado, 'rechazada');
  assert.equal(rechazadas[0].codigo, 'evidencia-vacia');
  assert.match(rechazadas[0].motivo, /evidencia identificable/);
});
