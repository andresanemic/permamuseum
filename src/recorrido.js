'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { Permamuseum } = require('./permamuseum.js');
const { resolverRuta } = require('./rutas.js');

function seguro(valor) {
  return String(valor).replace(/[\u0000-\u001f\u007f-\u009f]/g, (caracter) => `\\u${caracter.charCodeAt(0).toString(16).padStart(4, '0')}`);
}
function imprimir(linea) { process.stdout.write(`${seguro(linea)}\n`); }

async function main({ datos, salida }) {
  const base = path.join(__dirname, '..');
  const archivoDatos = resolverRuta(base, datos);
  const directorioSalida = resolverRuta(base, salida);
  const caso = JSON.parse(fs.readFileSync(archivoDatos, 'utf8'));
  const museo = caso.museo;
  const obra = caso.obra;
  const pm = new Permamuseum({ dir: directorioSalida });
  fs.writeFileSync(pm.registro, '', 'utf8');
  const recibos = [];
  const paso = async (id, accion, objetivo, regla, valores, cobertura, notCovered) => {
    const r = await pm.actuar({ id, accion, actor: museo.declarante, principal: museo.id, objetivo, regla, datos: valores, cobertura, notCovered }, { ahora: caso.reloj });
    recibos.push(r);
    imprimir(`${accion}: ${r.estado}${r.codigo ? ` (${r.codigo})` : ''}; recibo de kernel, coverage=${r.cobertura.join(', ') || '[]'}; notCovered=${r.notCovered.join(', ') || '[]'}`);
    if (r.motivo) imprimir(`  motivo: ${r.motivo}`);
    if (r.salida) imprimir(`  resolver: ${r.salida}`);
    return r;
  };

  imprimir(`Permamuseum, recorrido local con datos sintéticos: ${museo.nombre}`);
  imprimir('Sin red. Sin blockchain encendido. No se simula un anclaje externo.');
  await paso('paso-principal', 'registrar-principal', museo.id, 'control-principal', { nombre: museo.nombre, espacio: museo.espacio }, ['identificador local y espacio declarados'], ['identidad institucional real', 'representación legal']);
  await paso('paso-obra', 'registrar-obra', obra.id, 'control-obra', { titulo: obra.titulo, autor: obra.autor, identificador: obra.identidad }, ['identificador y descripción ficticios'], ['existencia física', 'autoría real']);
  await paso('paso-custodia', 'declarar-custodia', obra.id, 'control-custodia', { eventos: caso.custodia.eventos, lagunas: caso.custodia.lagunas }, ['evento declarado y laguna explícita'], ['historia anterior no documentada', 'hecho histórico independiente']);
  await paso('paso-evidencia', 'referenciar-evidencia', obra.id, 'control-evidencia', { referencias: caso.evidencias }, ['identificadores y versiones de referencias'], ['integridad de repositorios externos', 'contenido externo']);
  const dictamen = await paso('paso-dictamen', 'emitir-dictamen', obra.id, 'control-dictamen', { declarante: museo.declarante, verificador: museo.verificador, mandato: caso.dictamen.mandato, evidencias: caso.evidencias.map((e) => e.id), metodo: caso.dictamen.metodo, cobertura: caso.dictamen.cobertura, notCovered: caso.dictamen.notCovered }, caso.dictamen.cobertura, caso.dictamen.notCovered);
  const permiso = caso.permiso;
  await paso('paso-permiso', 'conceder-permiso', obra.id, 'control-permiso', { obra: permiso.obra, derechosDeclarados: permiso.derechosDeclarados, usosPermitidos: permiso.usosPermitidos, usoSolicitado: permiso.usoSolicitado, vence: permiso.vence, ahora: caso.reloj }, ['un uso nombrado', 'una obra identificada', 'vencimiento explícito'], ['autoridad legal del concedente', 'usos distintos de los enumerados']);
  const dictamenEstructurado = {
    estado: dictamen.estado,
    declarante: museo.declarante,
    verificador: museo.verificador,
    afirmacion: `cadena de custodia declarada para ${obra.id}`,
    mandato: caso.dictamen.mandato,
    evidencias: caso.evidencias.map((e) => e.id),
    metodo: caso.dictamen.metodo,
    reloj: caso.reloj,
    cobertura: caso.dictamen.cobertura,
    notCovered: caso.dictamen.notCovered,
    recibo: dictamen.recibo,
  };
  await paso('paso-publicacion', 'decidir-publicacion', obra.id, 'control-publicacion', { dictamen: dictamenEstructurado, permisoVigente: permiso.vence > caso.reloj }, ['decisión local de publicación acotada'], ['publicación en internet', 'autenticidad', 'titularidad']);
  const rechazado = await paso('caso-rechazado', 'publicar-sin-evidencia', 'obra-fic-002', 'evidencia-vacia', { evidencias: [] }, ['rechazo por evidencia vacía'], ['veracidad de afirmación no aportada']);

  imprimir(`Resultado: ${recibos.filter((r) => r.estado === 'aceptada').length} aceptados, ${recibos.filter((r) => r.estado === 'rechazada').length} rechazado(s).`);
  imprimir(`Rechazo pendiente: ${rechazado.motivo}. ${rechazado.salida}`);
  imprimir('No se afirma participación de un museo real, blockchain, mainnet, autenticidad ni titularidad. El 2 % es un parámetro de fantasía.');
  return { recibos, archivo: pm.registro };
}

module.exports = { main, seguro };

if (require.main === module) {
  const base = path.join(__dirname, '..');
  main({
    datos: process.argv[2] || path.join(base, 'datos', 'recorrido.json'),
    salida: process.argv[3] || path.join(base, 'datos', 'registro'),
  }).catch((error) => {
    process.stderr.write(`No se completó el recorrido: ${error.message}\n`);
    process.exitCode = 1;
  });
}
