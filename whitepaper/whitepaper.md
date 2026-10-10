# Permamuseum

## Procedencia, permisos y participación en el patrimonio cultural

### Resumen

Permamuseum es un estudio sobre cómo registrar afirmaciones de procedencia y permisos de uso vinculados a obras culturales, con actores distintos y autoridades delimitadas. Su primera demostración prevista es un recorrido local con datos sintéticos de un museo ficticio. La propuesta original plantea Stellar, NFT, mercado y participación comunitaria; este whitepaper reduce esas ideas a un criterio verificable y deja como no comprobado lo que todavía requiere fuentes, acuerdos y evaluación.

### El problema que se quiere estudiar

La propuesta original enumera barreras de acceso geográfico, riesgos de deterioro físico, falta de transparencia de procedencia y dificultades de participación comunitaria. También plantea una brecha de digitalización en museos latinoamericanos, pérdidas de piezas por desastres y saqueos, y diferencias de ingresos en plataformas digitales. Estas son afirmaciones de la propuesta, no hallazgos comprobados por este whitepaper.

La propuesta vincula la afirmación sobre digitalización con un documento del Ministerio de Cultura de España sobre sostenibilidad de museos en América Latina y el Caribe: [documento citado por la propuesta](https://www.cultura.gob.es/dam/jcr:0645f275-432d-4802-8ffb-53883c50a2c7/sostenibilidad-museos-america-latina-caribe.pdf). No se abrió ni verificó el documento para este trabajo; el alcance exacto de la afirmación queda **NO VERIFICADO**.

Para pérdidas por desastres, incendios y saqueos, la propuesta cita un artículo de Barro Pensativo: [fuente citada por la propuesta](https://barropensativo.com/index.php/DISENSO/article/download/94/76). No se abrió ni verificó esa fuente; la relación y el alcance de los ejemplos quedan **NO VERIFICADOS**.

Para diferencias de ingresos de artistas latinos en plataformas digitales, la propuesta atribuye un 63 % a un estudio y cita Rolling Stone en Español: [fuente citada por la propuesta](https://es.rollingstone.com/artistas-latinos-ganan-alrededor-de-un-63-menos-que-el-promedio-del-mercado-segun-estudio/). La fuente y la metodología no se comprobaron aquí; la cifra queda **NO VERIFICADA** y no se usa para proyectar ingresos ni definir una tarifa.

El estudio propio que motiva Permamuseum identifica además una falla concreta de diseño en el contrato existente descrito por sus fuentes: un administrador único puede marcar `verified: true` sin registrar quién verificó ni con qué evidencia. La solución de criterio es hacer visible quién afirmó, quién revisó, bajo qué mandato, qué evidencia consultó y qué límites tiene el dictamen.

### La propuesta

Permamuseum separa el registro de una obra en afirmaciones atribuibles, referencias de evidencia, permisos y dictámenes. Una cadena de custodia ordena eventos y deja visibles sus responsables, fuentes, fechas y lagunas. Cada permiso especifica quién concede qué uso, a quién, sobre qué obra, por cuánto tiempo y bajo qué condiciones. El registro conserva discrepancias y revocaciones en vez de borrar el historial.

La infraestructura Stellar y Soroban aparece en la propuesta original como posible soporte de registros y activos digitales. En el proyecto actual su uso es una hipótesis de arquitectura, no una propiedad probada ni una solución automática al problema. Todo desarrollo y prueba de cadena queda limitado a testnet; esta etapa no activa una red.

La experiencia debe poder iniciarse sin que la persona tenga una cuenta cripto. La entrada sin cripto es un requisito de diseño. El recorrido vertical no construye una pasarela ni integración de Passkey o Google.

### Cómo funcionaría: ejemplo de punta a punta

Imagina un museo ficticio y una pieza inventada, una vasija. Una persona autorizada por el museo crea un registro en el espacio propio de esa institución y declara que la pieza estuvo bajo su custodia desde una fecha determinada. Aporta referencias sintéticas a un acta de ingreso y una fotografía ficticia. El sistema marca la información como **declarada**, no como verdadera por el mero hecho de haber sido cargada.

Una persona revisora distinta del declarante recibe una autorización acotada para evaluar esa afirmación. Revisa las referencias disponibles y deja un dictamen: qué comprobó, qué evidencia identificó, qué método siguió, qué conflictos declaró y qué no pudo comprobar. Si la evidencia no basta, el estado queda pendiente o no verificado. Si emite un dictamen favorable, el recibo lo atribuye a esa persona y limita el resultado a la afirmación revisada; no acredita autenticidad material, titularidad ni ausencia de saqueo.

Una artista ficticia concede después un permiso de exhibición no comercial para una imagen digital, por un plazo definido y con atribución. El permiso no autoriza acuñar un NFT ni vender la obra física. Una visitante entra sin cripto, consulta la ficha y ve el permiso, el dictamen, las fuentes declaradas y sus límites. Si el permiso vence o se revoca, una nueva publicación queda bloqueada y el recibo indica la razón y quién puede resolverla.

El ejemplo es una explicación del diseño, no el relato de un museo real ni una prueba de que haya ocurrido una operación de este tipo.

### Actores y derechos

- **La institución** administra su propio espacio y formula declaraciones dentro de la autoridad que pueda respaldar; el registro no valida por sí mismo esa autoridad.
- **El artista o titular de derechos** define permisos expresos de uso y puede limitar, vencer o revocar una autorización futura dentro de las condiciones acordadas.
- **La persona verificadora** revisa una afirmación con mandato, método y evidencia identificados. No puede ser quien presenta la misma afirmación ni quien ejecuta su efecto.
- **La persona coleccionista** obtiene solo los derechos que un permiso describa. Poseer un token no transfiere automáticamente derechos de autor, propiedad, custodia ni sublicencia.
- **La plataforma** aplica reglas y conserva recibos. No sustituye a las instituciones, titulares, custodios, comunidades o autoridades competentes.
- **La comunidad** puede aportar contexto y señalar disputas; el diseño de participación y resolución queda pendiente.

### Qué hace Vespi aquí

Vespi es el kernel de un sistema operativo para trabajar con IA, según el README incluido en las fuentes. En esta operación, su papel es hacer explícita la autoridad concedida antes de un efecto, dejar un recibo comprobable y permitir que la verificación observe la acción y sus límites. Para Permamuseum, el acuerdo exige además que una declaración de «verificado» identifique verificador, mandato y evidencia. Un agente o administrador no puede autorizarse a sí mismo ni convertir un texto en prueba.

El whitepaper no afirma que Vespi determine la autenticidad de una obra, resuelva disputas jurídicas o garantice continuidad operativa. Estas capacidades pertenecen al diseño que debe implementarse y comprobarse más adelante.

### Economía y token

La economía se estudiará con RUC-D: relación, recurso o flujo, actores, derechos, reglas, autoridades y pruebas primero; tokenomics después. La moneda es opcional. Solo se considera si aparece un problema económico que la justifique. Si el análisis la recomienda y Andrés autoriza la fase, el lanzamiento será en testnet, sin mainnet, dinero real ni venta. Las asignaciones de fundador son solo para Andrés.

La propuesta original menciona una regalía de 2 %. En este proyecto ese valor solo sirve como parámetro sintético configurable, no como precio acordado ni promesa para artistas. Base de cálculo, destinatarios, techo y duración siguen pendientes.

### Riesgos y límites

Una referencia digital puede ser auténtica como archivo y aun así no probar la veracidad de su contenido. Una cadena de custodia incompleta puede conservar un vacío sin resolverlo. Las claves pueden ser usadas por una persona sin autoridad institucional suficiente. Un registro persistente también puede hacer más difícil corregir información sensible o retirar usos no autorizados. La separación de roles reduce ciertos conflictos, pero no elimina colusión, evidencia falsa, errores de identidad o disputas de derechos.

El registro no confiere valor jurídico a la procedencia, no certifica autenticidad material, no adjudica propiedad, no prueba ausencia de saqueo, no establece valor cultural ni garantiza preservación física o digital. Tampoco demuestra que una institución concedió válidamente un derecho o que una regla cumple una ley. Las normas chilenas relevantes y sus efectos se investigarán antes de afirmar cumplimiento.

### Qué no es Permamuseum

No es un museo, una colección real, un mercado activo ni una iniciativa autorizada por una institución. No contiene los datos del Museo Histórico de Placilla ni declara que ese museo participe. No es una certificación patrimonial, una prueba de titularidad ni un mecanismo que impida por sí solo el saqueo o deterioro. En esta etapa no hay mainnet, dinero real, venta, token desplegado ni pasarela sin cripto. Las cifras y ventajas de la propuesta original no se verificaron.
