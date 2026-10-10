'use strict';

// Consume la copia vendorizada del kernel. El proyecto ya no depende de copias
// instaladas en ~/.claude, ~/.codex ni ~/.config: vendor/vespi-kernel es la
// única fuente y su SOURCE.md declara la tabla de digest por módulo.
const fs = require('node:fs');
const path = require('node:path');
const { createHash } = require('node:crypto');

const KERNEL = path.join(__dirname, '..', 'vendor', 'vespi-kernel');
// Los módulos que el proyecto consume directamente; SOURCE.md declara más.
const MODULOS = ['authority.js', 'continuity.js', 'delegation.js', 'operation.js', 'receipt.js'];
// Commit de la cabecera declarado en vendor/vespi-kernel/SOURCE.md (kernel 0.1.5).
const COMMIT = 'ed559e83c976dd6e6a379a5510db776206f670b4';

function cuerpo(archivo) {
  const bytes = fs.readFileSync(archivo);
  let inicio = 0;
  for (let i = 0; i < 3; i += 1) {
    const salto = bytes.indexOf(10, inicio);
    if (salto < 0) throw new Error(`${archivo}: encabezado sin tres líneas`);
    inicio = salto + 1;
  }
  return bytes.slice(inicio);
}
function sha(archivo) { return createHash('sha256').update(cuerpo(archivo)).digest('hex'); }
function declaracionDelKit(dir) {
  const md = fs.readFileSync(path.join(dir, 'SOURCE.md'), 'utf8');
  const tabla = new Map();
  for (const linea of md.split('\n')) {
    const m = linea.match(/^\|\s*`([^`]+\.js)`\s*\|\s*`([0-9a-f]{64})`\s*\|\s*(\d+)\s*\|/);
    if (m) tabla.set(m[1], { sha256: m[2], bytes: Number(m[3]) });
  }
  return tabla;
}
function commitDeCabecera(archivo) {
  const bytes = fs.readFileSync(archivo);
  let inicio = 0;
  for (let n = 0; n < 3; n += 1) {
    const salto = bytes.indexOf(10, inicio);
    if (salto < 0) break;
    inicio = salto + 1;
  }
  const m = bytes.slice(0, inicio).toString('utf8').match(/commit ([0-9a-f]{7,40})/);
  return m ? m[1] : null;
}
module.exports = { KERNEL, MODULOS, COMMIT, cuerpo, sha, declaracionDelKit, commitDeCabecera };
