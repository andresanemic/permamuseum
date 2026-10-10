'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { KERNEL, MODULOS, COMMIT, cuerpo, sha, declaracionDelKit, commitDeCabecera } = require('./nucleo.js');

const disponible = fs.existsSync(path.join(KERNEL, 'SOURCE.md'));

test('el kit vendorizado declara todos los módulos del SOURCE.md', () => {
  assert.ok(disponible, `no se encuentra ${path.join(KERNEL, 'SOURCE.md')}`);
  const tabla = declaracionDelKit(KERNEL);
  assert.ok(tabla.size >= MODULOS.length, 'la tabla declara menos módulos que los que consume el proyecto');
  for (const nombre of MODULOS) assert.ok(tabla.has(nombre), `falta declarar ${nombre}`);
});

test('el núcleo consumido coincide con la tabla de digest del kit', () => {
  assert.ok(disponible, `no se encuentra ${path.join(KERNEL, 'SOURCE.md')}`);
  const tabla = declaracionDelKit(KERNEL);
  assert.ok(tabla.size > 0, 'SOURCE.md no declara ningún módulo');
  for (const [archivo, declarado] of tabla) {
    const bytes = cuerpo(path.join(KERNEL, archivo));
    assert.equal(sha(path.join(KERNEL, archivo)), declarado.sha256, `${archivo}: cambió el corte instalado`);
    assert.equal(bytes.length, declarado.bytes);
  }
});

test('la copia vendorizada no tiene módulos sin declarar ni huecos', () => {
  assert.ok(disponible, `no se encuentra ${path.join(KERNEL, 'SOURCE.md')}`);
  const tabla = declaracionDelKit(KERNEL);
  const presentes = fs.readdirSync(KERNEL).filter((n) => n.endsWith('.js') && n !== 'package.json');
  const declarados = new Set(tabla.keys());
  for (const modulo of presentes) assert.ok(declarados.has(modulo), `${modulo}: presente sin fila en SOURCE.md`);
  for (const modulo of declarados) assert.ok(presentes.includes(modulo), `${modulo}: declarado y ausente de la copia`);
});

test('los módulos vendorizados declaran el mismo commit', () => {
  assert.ok(disponible, `no se encuentra ${path.join(KERNEL, 'SOURCE.md')}`);
  const tabla = declaracionDelKit(KERNEL);
  const commits = [...tabla.keys()]
    .filter((m) => fs.existsSync(path.join(KERNEL, m)))
    .map((m) => commitDeCabecera(path.join(KERNEL, m)));
  assert.ok(commits.length > 0, 'ningún módulo declara un commit');
  assert.ok(commits.every(Boolean), 'algún módulo no declara commit en su cabecera');
  assert.ok(commits.every((c) => c.startsWith(COMMIT.slice(0, 7))), `se esperaba el commit ${COMMIT.slice(0, 7)}; hubo ${[...new Set(commits)].join(', ')}`);
});
