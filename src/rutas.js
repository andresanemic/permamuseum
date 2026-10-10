'use strict';

const fs = require('node:fs');
const path = require('node:path');

function resolverRuta(base, entrada) {
  const raiz = fs.realpathSync(base);
  const destino = path.resolve(raiz, entrada);
  const relativo = path.relative(raiz, destino);
  if (!relativo || relativo === '..' || relativo.startsWith(`..${path.sep}`) || path.isAbsolute(relativo)) {
    if (relativo) throw new Error('ruta fuera del proyecto');
  }
  let cursor = destino;
  while (cursor !== raiz) {
    try {
      const stat = fs.lstatSync(cursor);
      if (stat.isSymbolicLink()) throw new Error('ruta con enlace simbólico no permitida');
      const real = fs.realpathSync(cursor);
      const dentro = path.relative(raiz, real);
      if (dentro === '..' || dentro.startsWith(`..${path.sep}`) || path.isAbsolute(dentro)) throw new Error('ruta fuera del proyecto');
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
    const padre = path.dirname(cursor);
    if (padre === cursor) throw new Error('ruta fuera del proyecto');
    cursor = padre;
  }
  return destino;
}

module.exports = { resolverRuta };
