# How it works

## English

Permamuseum studies a local, synthetic record for a cultural work. It separates what someone says about a work, the evidence references they provide, an independent reviewer’s bounded opinion, and the permission that governs a proposed use. “Verified” describes only a recorded review with a named reviewer, mandate, evidence, method, scope, and limits.

> **The unit is not the work alone. The unit is a claim about a work, its evidence, authority, and the permission attached to a specific use.**

### Actors and rights

| Actor | May do | Limit |
| --- | --- | --- |
| Institution | Keep its own space and declare custody, context, or permissions it says it can grant. | Its declaration does not prove institutional identity or legal authority, and it cannot write in another institution’s space. |
| Artist or rights holder | Grant a named use for an identified work, with attribution, conditions, dates, and revocation terms. | The platform cannot infer a right from an upload, sale, verification, or token. |
| Reviewer | Review a claim under an identified mandate and record method, evidence, conflicts, scope, and limits. | The reviewer must be separate from the claimant and executor, and does not grant rights or decide facts beyond the review. |
| Collector | Receive only the access or use rights expressly described in a permission. | Holding a token does not automatically transfer copyright, ownership, custody, or sublicensing rights. |
| Platform | Apply authorized rules, preserve receipts, and show bounded results. | It is not the owner, custodian, cultural authority, or judge of title. |
| Community | In a future design, contribute context or dispute a claim. | The contribution and dispute channel is still open design work; a contribution is not verification by itself. |

### Walkthrough: one fictional vessel

Imagine the fictional Museo Nimbo de la Laguna Azul and an invented vessel. An institutional representative records a local principal and a work description, then declares one custody event. The record labels that event as a declaration and leaves a gap in the earlier history visible. The representative attaches two fictional references, such as an intake record and a descriptive sheet.

A separate reviewer receives a bounded mandate, checks the references available in this synthetic example, and records what was reviewed and what was outside the review. The resulting opinion applies only to the identified claim and its evidence version. It does not establish that the vessel exists, is authentic, was lawfully acquired, or has a complete custody history.

A fictional rights holder then grants a time-limited permission for a named descriptive digital display with attribution. The permission does not authorize a sale, a token mint, or another kind of use. A local publication decision can proceed only within the recorded opinion and permission. A request without identifiable evidence is rejected with a reason and a next step. See [Evidence](./EVIDENCE.md) for the recorded walkthrough results.

### Rules the design enforces

- A claim stays declared, pending, or unverified until an independent authorized reviewer records a structured opinion tied to identifiable evidence.
- The reviewer cannot be the claimant, the institution responsible for the claim, or the executor of the effect being reviewed.
- Repeated references do not count as independent corroboration. Contradictions, missing custody events, and changed evidence remain visible and may block or reopen a review.
- Each institution has its own principal and workspace. Authority is limited by action, object, destination, clock, and any stated resource ceiling.
- A permission names the grantor, recipient, work, allowed use, attribution, conditions, dates, and revocation. Expired or revoked permission does not authorize new use; a new grant is required to reactivate it.
- A rejection also leaves a receipt that identifies the reason and the missing information or actor needed to resolve it.
- A technical receipt verifies the integrity and scope of a recorded operation. It does not establish the truth of the underlying cultural claim.

### What the walkthrough proves and does not prove

The recorded local run shows that the implemented rules accepted a synthetic sequence, produced kernel receipts that passed the kernel’s integrity check, and rejected a publication attempt with empty evidence. The test suite reports controls for the principal rules, security regressions, and kernel provenance. This is evidence about the tested local behavior and the specific consumed kernel copy.

It does not prove a real museum participated; that a work, claimant, reviewer, permission, or evidence is real; that a reviewer has legal authority; that a work is authentic or lawfully held; that provenance is complete; or that an external source is true. It does not prove internet publication, a Stellar anchor, permanent preservation, legal compliance, or production readiness. The example uses synthetic data only.

## Español

Permamuseum estudia un registro local y sintético para una obra cultural. Separa lo que alguien afirma sobre una obra, las referencias de evidencia que aporta, el dictamen acotado de una persona revisora independiente y el permiso que rige un uso propuesto. «Verificado» describe únicamente una revisión registrada con persona revisora, mandato, evidencia, método, alcance y límites identificados.

> **La unidad no es solo la obra. La unidad es una afirmación sobre una obra, su evidencia, su autoridad y el permiso asociado a un uso concreto.**

### Actores y derechos

| Actor | Puede hacer | Límite |
| --- | --- | --- |
| Institución | Mantener su propio espacio y declarar custodia, contexto o permisos que afirma poder conceder. | Su declaración no prueba identidad institucional ni autoridad jurídica, y no puede escribir en el espacio de otra institución. |
| Artista o titular de derechos | Conceder un uso nombrado para una obra identificada, con atribución, condiciones, fechas y reglas de revocación. | La plataforma no puede inferir un derecho de una carga, venta, verificación o token. |
| Persona revisora | Revisar una afirmación bajo un mandato identificado y registrar método, evidencia, conflictos, alcance y límites. | Debe ser distinta de quien afirma y de quien ejecuta; no concede derechos ni decide hechos fuera de la revisión. |
| Coleccionista | Recibir solo los derechos de acceso o uso descritos expresamente en un permiso. | Tener un token no transfiere automáticamente derechos de autor, propiedad, custodia ni sublicencia. |
| Plataforma | Aplicar reglas autorizadas, conservar recibos y mostrar resultados acotados. | No es propietaria, custodio, autoridad cultural ni juez de titularidad. |
| Comunidad | En un diseño futuro, aportar contexto o impugnar una afirmación. | El canal de aportes y disputas aún está por diseñar; un aporte no es verificación por sí solo. |

### Recorrido: una vasija ficticia

Imagina el Museo Nimbo de la Laguna Azul, que es ficticio, y una vasija inventada. Una persona representante institucional registra un principal local y una descripción de la obra, y luego declara un evento de custodia. El registro identifica ese evento como declaración y deja visible una laguna en la historia anterior. La persona añade dos referencias ficticias, como un acta de ingreso y una ficha descriptiva.

Una persona revisora distinta recibe un mandato acotado, consulta las referencias disponibles en este ejemplo sintético y registra qué revisó y qué quedó fuera. El dictamen se limita a la afirmación identificada y a esa versión de la evidencia. No establece que la vasija exista, sea auténtica, se haya adquirido legalmente ni tenga una historia de custodia completa.

Después, una titular ficticia concede un permiso temporal para una exhibición digital descriptiva y nombrada, con atribución. El permiso no autoriza una venta, la acuñación de un token ni otro uso. Una decisión local de publicación solo puede avanzar dentro del dictamen y del permiso registrados. Una solicitud sin evidencia identificable se rechaza con un motivo y un siguiente paso. Consulta [Evidencia](./EVIDENCE.md) para ver los resultados del recorrido registrado.

### Reglas que hace cumplir el diseño

- Una afirmación permanece declarada, pendiente o no verificada hasta que una persona revisora independiente y autorizada registre un dictamen estructurado vinculado a evidencia identificable.
- La persona revisora no puede ser quien afirma, la institución responsable de la afirmación ni quien ejecuta el efecto revisado.
- Repetir referencias no cuenta como corroboración independiente. Las contradicciones, los eventos faltantes en la custodia y los cambios de evidencia permanecen visibles y pueden bloquear o reabrir una revisión.
- Cada institución tiene su propio principal y espacio. La autoridad queda limitada por acción, obra, destino, plazo y cualquier techo de recursos indicado.
- Un permiso nombra a quien lo concede, a quien lo recibe, la obra, el uso permitido, la atribución, las condiciones, las fechas y la revocación. Un permiso vencido o revocado no autoriza usos nuevos; se necesita una concesión nueva para reactivarlo.
- Un rechazo también deja un recibo que identifica el motivo y la información o actor que falta para resolverlo.
- Un recibo técnico verifica la integridad y el alcance de una operación registrada. No establece la verdad de la afirmación cultural subyacente.

### Qué prueba y qué no prueba el recorrido

La corrida local registrada muestra que las reglas implementadas aceptaron una secuencia sintética, produjeron recibos del kernel que pasaron su comprobación de integridad y rechazaron un intento de publicación sin evidencia. La suite informa controles para las reglas principales, regresiones de seguridad y procedencia del kernel. Es evidencia sobre la conducta local probada y la copia concreta del kernel consumida.

No prueba que haya participado un museo real; que una obra, persona declarante, revisora, permiso o evidencia sean reales; que una persona revisora tenga autoridad jurídica; que una obra sea auténtica o esté en custodia legítima; que la procedencia esté completa; ni que una fuente externa sea verdadera. Tampoco prueba publicación en internet, anclaje en Stellar, preservación permanente, cumplimiento legal ni preparación para producción. El ejemplo usa solo datos sintéticos.
