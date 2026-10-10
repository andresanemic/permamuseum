'use strict';

const path = require('node:path');
const { main } = require('./recorrido.js');

if (require.main === module) {
  const datos = process.argv[2] || path.join(__dirname, '..', 'datos', 'recorrido.json');
  const salida = process.argv[3] || path.join(__dirname, '..', 'datos', 'registro');
  main({ datos, salida }).catch((error) => {
    process.stderr.write(`No se completó el recorrido: ${error.message}\n`);
    process.exitCode = 1;
  });
}
