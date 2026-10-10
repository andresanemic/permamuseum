'use strict';

const REGLAS = {
  'publicar-sin-verificacion': ['la publicación requiere dictamen vigente y evidencia suficiente', 'un verificador independiente debe revisar la afirmación y su evidencia'],
  'verificador-declarante': ['el declarante no puede emitir su propio dictamen', 'designar un verificador independiente del declarante'],
  'evidencia-vacia': ['no hay evidencia identificable que revisar', 'adjuntar referencias de evidencia identificables'],
  'evidencia-duplicada': ['una referencia repetida no es corroboración independiente', 'aportar fuentes distintas o retirar la afirmación de corroboración'],
  'procedencia-incompatible': ['la obra ya tiene una procedencia incompatible registrada', 'el principal institucional y el custodio deben resolver el conflicto con evidencia'],
  'regalia-sobre-techo': ['la regalía excede el techo autorizado', 'el titular puede autorizar un techo nuevo; falta reducir la regalía o renovar el permiso'],
  'permiso-vencido': ['el reloj del permiso venció', 'el titular debe conceder un permiso nuevo'],
  'permiso-revocado': ['el titular revocó el permiso y los usos futuros quedan cerrados', 'el titular debe emitir una concesión nueva'],
  'reentrada-revocada': ['el recibo ya usado no reactiva una autorización revocada', 'el titular debe conceder una autorización nueva con identificador nuevo'],
  'colision-institucional': ['dos principales reclaman procedencia exclusiva para la misma obra', 'los principales y titulares deben resolver la custodia y el alcance de cada afirmación'],
  'cobro-duplicado': ['la misma obligación de regalía tiene identidades de cobro duplicadas', 'el titular debe consolidar la identidad del beneficiario antes de un pago'],
  'indicio-saqueo': ['hay indicios documentados de saqueo y la oferta debe quedar retirada', 'la autoridad institucional competente debe revisar la impugnación y documentar su resolución'],
  'etiqueta-libre': ['la etiqueta de texto no contiene un dictamen estructurado', 'un verificador independiente debe emitir dictamen con mandato y evidencia'],
  'admin-unico': ['una marca del administrador no acredita verificación independiente', 'un verificador independiente debe emitir un dictamen atribuible'],
  'evidencia-contradictoria': ['la evidencia contradice la afirmación y esta queda impugnada', 'el declarante debe resolver la contradicción con evidencia adicional revisada'],
  'autoridad-vencida': ['la autoridad institucional venció antes de publicar', 'quien concedió la autoridad debe renovarla antes de publicar'],
  'espacio-ajeno': ['el principal no tiene autoridad en el espacio de otra institución', 'el principal responsable del espacio debe conceder autoridad expresa'],
  'permiso-indeterminado': ['el permiso no identifica la obra o los derechos que su titular declara', 'el titular debe identificar la obra y el alcance de los derechos que concede'],
  'uso-fuera-alcance': ['el uso solicitado no está dentro del permiso concedido', 'el titular debe ampliar el permiso expresamente o se debe retirar ese uso'],
  'transferencia-por-token': ['adquirir un token no transfiere permisos sin cláusula expresa', 'el titular debe conceder y documentar por separado la transferencia'],
  'custodia-incompleta': ['un evento de custodia carece de actor o evidencia', 'declarante y custodios deben documentar el actor y la evidencia faltantes'],
  'evidencia-cambio': ['el dictamen corresponde a una versión anterior de la evidencia', 'el verificador debe revisar la versión actual y emitir un dictamen nuevo'],
  'ejecutor-verificador': ['quien ejecuta el efecto no puede verificarlo', 'designar un verificador independiente del ejecutor'],
  'reactivacion-sin-concesion': ['un permiso revocado no revive sin una concesión nueva', 'el titular debe emitir una concesión nueva, con alcance y vigencia explícitos'],
  'rechazo-sin-salida': ['el rechazo no identifica quién puede resolverlo ni qué falta', 'el responsable del caso debe nombrar quién resuelve y el dato pendiente'],
};

const fs = require('node:fs');
const path = require('node:path');
const KERNEL = path.join(__dirname, '..', 'vendor', 'vespi-kernel');
const { resolverRuta } = require('./rutas.js');

class Permamuseum {
  constructor({ dir }) {
    const raiz = path.join(__dirname, '..');
    this.dir = resolverRuta(raiz, dir);
    this.registro = path.join(this.dir, 'registro.jsonl');
    fs.mkdirSync(this.dir, { recursive: true });
    if (!fs.existsSync(this.registro)) fs.writeFileSync(this.registro, '', 'utf8');
  }

  leer() {
    return fs.readFileSync(this.registro, 'utf8').split('\n').filter(Boolean).map((linea) => JSON.parse(linea));
  }

  async actuar({ id, accion, actor, principal, objetivo, regla, datos, cobertura, notCovered }, { ahora }) {
    if (!ahora) throw new Error('cada operación requiere un reloj explícito');
    const { createOperation, runOperation, STATES } = require(`${KERNEL}/operation.js`);
    const { verifyReceipt } = require(`${KERNEL}/receipt.js`);
    const politica = evaluar({ regla, ...datos });
    const salida = politica.estado === 'aceptada' ? null : politica.salida;
    const gasto = { asset: `accion:${accion}`, amount: '1', to: `principal:${principal}:${objetivo}` };
    const op = createOperation({
      goal: `${actor} ejecuta ${accion} sobre ${objetivo}`,
      action: `permamuseum:${accion}`,
      agent: actor,
      exit: salida,
      authority: politica.estado === 'aceptada'
        ? { spend: [{ asset: gasto.asset, maxAmount: gasto.amount, to: gasto.to }] }
        : { spend: [] },
    });
    const capacidad = {
      id: `permamuseum:${accion}`,
      required: () => politica.estado === 'aceptada'
        ? { spend: [{ asset: gasto.asset, amount: gasto.amount, to: gasto.to }] }
        : { impossible: true, reason: politica.motivo, exit: salida },
      perform: async () => {
        const efecto = { id, accion, actor, principal, objetivo, estado: 'aceptada', en: ahora, datos };
        return { ok: true, evidence: { operationId: id, type: accion, status: 'recorded', code: JSON.stringify(efecto) } };
      },
      io: { verify: async () => ({ verified: politica.estado === 'aceptada', checks: { 'alcance-revisado': true, 'autoridad-separada': true }, reason: politica.motivo }) },
    };
    const resultado = await runOperation(op, capacidad, {
      verify: capacidad.io.verify,
      ask: async () => ({ approved: false, by: 'nadie' }),
    });
    const recibo = resultado.receipt;
    if (!recibo || !Array.isArray(recibo.coverage) || !Array.isArray(recibo.notCovered)) {
      throw new Error('el núcleo no devolvió un recibo con coverage y notCovered');
    }
    const auditoria = verifyReceipt(recibo);
    if (!auditoria.ok) throw new Error(`el recibo del núcleo no verifica: ${auditoria.reason}`);
    const estado = resultado.status === STATES.SUCCEEDED ? 'aceptada' : 'rechazada';
    const registro = {
      id, accion, actor, principal, objetivo, estado,
      codigo: politica.codigo,
      motivo: politica.motivo,
      salida,
      ahora,
      cobertura: [...new Set([...recibo.coverage, ...(cobertura || [])])],
      notCovered: [...new Set([...recibo.notCovered, ...(notCovered || [])])],
      recibo,
    };
    fs.appendFileSync(this.registro, `${JSON.stringify(registro)}\n`, 'utf8');
    return registro;
  }
}

function estaVencido(vence, ahora) {
  return typeof vence === 'string' && typeof ahora === 'string' && Date.parse(vence) <= Date.parse(ahora);
}

function invalida(entrada) {
  switch (entrada.regla) {
    case 'publicar-sin-verificacion': return entrada.verificada !== true;
    case 'verificador-declarante': return entrada.declarante === entrada.verificador;
    case 'evidencia-vacia': return !Array.isArray(entrada.evidencias) || entrada.evidencias.length === 0;
    case 'evidencia-duplicada': return Array.isArray(entrada.evidencias) && new Set(entrada.evidencias).size !== entrada.evidencias.length;
    case 'procedencia-incompatible': return Boolean(entrada.obra && entrada.procedenciaExistente && entrada.procedenciaPropuesta && entrada.procedenciaExistente !== entrada.procedenciaPropuesta);
    case 'regalia-sobre-techo': return Number(entrada.regalia) > Number(entrada.techo);
    case 'permiso-vencido': case 'autoridad-vencida': return estaVencido(entrada.vence, entrada.ahora);
    case 'permiso-revocado': return entrada.revocado === true;
    case 'reentrada-revocada': return entrada.reciboReutilizado === true && entrada.revocado === true;
    case 'colision-institucional': return entrada.exclusividad === true && new Set(entrada.principales || []).size > 1;
    case 'cobro-duplicado': return (entrada.identidadesCobro || []).length > 1;
    case 'indicio-saqueo': return entrada.indicioDocumentado === true && entrada.enVenta === true;
    case 'etiqueta-libre': return entrada.etiqueta === 'verificado' && !entrada.dictamen;
    case 'admin-unico': return entrada.verified === true && !entrada.dictamen && entrada.verificadorIndependiente !== true;
    case 'evidencia-contradictoria': return entrada.contradice === true;
    case 'espacio-ajeno': return entrada.principal !== entrada.espacio;
    case 'permiso-indeterminado': return !entrada.obra || entrada.derechosDeclarados !== true;
    case 'uso-fuera-alcance': return !(entrada.usosPermitidos || []).includes(entrada.usoSolicitado);
    case 'transferencia-por-token': return entrada.hayToken === true && entrada.clausulaTransferencia !== true;
    case 'custodia-incompleta': return (entrada.eventos || []).some((e) => !e.entrega || !e.recibe || !e.evidencia);
    case 'evidencia-cambio': return entrada.verificada === true && entrada.versionActual !== entrada.versionRevisada;
    case 'ejecutor-verificador': return Boolean(entrada.ejecutor) && entrada.ejecutor === entrada.verificador;
    case 'reactivacion-sin-concesion': return entrada.revocado === true && entrada.nuevaConcesion !== true;
    case 'rechazo-sin-salida': return !entrada.quienResuelve || !entrada.queFalta;
    default: return false;
  }
}

function evaluar(entrada) {
  if (entrada.regla === 'control-publicacion') {
    const d = entrada.dictamen;
    let reciboValido = false;
    try {
      const { verifyReceipt } = require(`${KERNEL}/receipt.js`);
      reciboValido = Boolean(d?.recibo && verifyReceipt(d.recibo).ok
        && d.recibo.action === 'permamuseum:emitir-dictamen'
        && d.recibo.status === 'verified'
        && d.recibo.verification?.verified === true
        && d.recibo.evidence?.type === 'emitir-dictamen');
    } catch { reciboValido = false; }
    const estructurado = reciboValido && d.estado === 'aceptada' && d.declarante && d.verificador && d.declarante !== d.verificador
      && d.afirmacion && d.mandato && Array.isArray(d.evidencias) && d.evidencias.length > 0
      && d.metodo && d.reloj && Array.isArray(d.cobertura) && d.cobertura.length > 0
      && Array.isArray(d.notCovered) && d.notCovered.length > 0;
    return estructurado && entrada.permisoVigente ? { estado: 'aceptada', codigo: null, motivo: 'dictamen estructurado y permiso dentro del alcance local' } : rechazar('publicar-sin-verificacion');
  }
  if (entrada.regla === 'control-permiso') return entrada.obra && entrada.derechosDeclarados && (entrada.usosPermitidos || []).includes(entrada.usoSolicitado) && !estaVencido(entrada.vence, entrada.ahora) ? { estado: 'aceptada', codigo: null, motivo: 'permiso vigente y acotado al uso pedido' } : rechazar('permiso-indeterminado');
  if (entrada.regla === 'control-dictamen') return entrada.declarante && entrada.verificador && entrada.declarante !== entrada.verificador && entrada.mandato && entrada.evidencias && entrada.evidencias.length && entrada.metodo && entrada.cobertura && entrada.notCovered ? { estado: 'aceptada', codigo: null, motivo: 'dictamen atribuido y acotado' } : rechazar('verificador-declarante');
  return invalida(entrada) ? rechazar(entrada.regla) : { estado: 'aceptada', codigo: null, motivo: 'regla satisfecha' };
}

function rechazar(codigo) {
  const [motivo, salida] = REGLAS[codigo] || ['regla desconocida', 'completar el criterio'];
  return { estado: 'rechazada', codigo, motivo, salida };
}

module.exports = { evaluar, REGLAS, Permamuseum };





