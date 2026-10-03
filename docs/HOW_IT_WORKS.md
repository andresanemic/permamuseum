# How it works / Cómo funciona

## English

Permamuseum studies how a cultural record can keep a claim, its evidence, the authority behind it, an independent review, and a permission for a named use distinct. The current example is local and synthetic. “Verified” means that a structured review was recorded for a stated claim and evidence version, with an identified reviewer, mandate, method, coverage, and limits. It is not a general statement that a work is true, authentic, or lawfully held.

> **The unit is not the work alone. The unit is a claim about a work, its evidence, the authority behind it, and the permission for a specific use.**

### The record path

```text
Institution or claimant
        │ declares a work, custody event, or claimed authority
        ▼
Claim ── identified references ──► Evidence named for review
  │                                      │
  │ authority and mandate                │ method and version
  ▼                                      ▼
Independent reviewer ───────────► Bounded opinion
                                          │
Rights holder ── named permission ───────┤
                                          ▼
                               Local use decision + receipt
```

Each effect leaves a kernel receipt. An accepted receipt says what the operation covered. A rejection also records its reason and the information or actor needed to resolve it. The kernel receipt protects the integrity of that operation’s record; it does not validate the external source or the cultural claim.

### Actors, rights, and limits

| Actor | May do | Limit |
| --- | --- | --- |
| Institution | Keep a separate principal and space; declare custody, context, and permissions it says it can grant. | A declaration does not prove institutional identity or legal authority. It cannot write in another institution’s space. |
| Artist or rights holder | Grant a named use for an identified work, with attribution, terms, dates, recipient, and revocation conditions. | A grant only covers rights the person controls. An upload, sale, review, or token does not create a broader grant. |
| Reviewer | Review a specific claim under an identified mandate and record evidence, method, conflicts, coverage, and limits. | The reviewer must be separate from the claimant and the executor. A review does not grant rights or decide facts beyond its scope. |
| Collector | Receive the access or use rights expressly stated in a permission. | Token ownership does not automatically convey copyright, ownership, custody, or sublicensing. |
| Platform | Apply authorized rules, preserve receipts, and display bounded outcomes. | It is not the owner, custodian, cultural authority, or judge of title. |
| Community | A future design could let people add context or dispute a claim. | The contribution and dispute process remains open design work. A contribution is not verification by itself. |

### Walkthrough: one fictional vessel

The data file describes the fictional **Museo Nimbo de la Laguna Azul**, the invented work **Vasija de las nubes quietas**, and **Taller Nube de Tiza** as its fictional author. The local principal and the work receive example identifiers. The institution declares one custody event dated 2025-04-10. The record keeps the earlier period visible as undocumented rather than inferring a prior chain.

Two references are named: a fictional archival reference and a fictional descriptive sheet, each at version `v1`. The reviewer’s example mandate is limited to confirming that the two references are present in this synthetic file. The recorded coverage is those two references and one declared custody event. It does not include the vessel’s physical authenticity, legal ownership, legal value of provenance, or integrity of files held outside the example.

A fictional rights holder grants the use `exhibición digital descriptiva` for the identified work through 2026-11-03. A local publication decision accepts the named use within the recorded review and permission. The example permission does not authorize a sale or a token mint. The `2` percent value in the source data is marked there as a fantasy parameter, not a negotiated rate or price.

The walkthrough then attempts a publication with no identifiable evidence. It is rejected as `evidencia-vacia`, and the record says what to do next: attach identifiable evidence references. The recorded terminal output is quoted in the README; the full event-by-event results are summarized in [Evidence](./EVIDENCE.md).

### Rules shown in this model

- A free-text label such as “verified” or a boolean value does not substitute for a structured review and a valid receipt from the kernel.
- The reviewer is separate from the claimant, the institution responsible for the claim, and the executor of the reviewed effect.
- Repeated references are not independent corroboration. Contradictory claims, missing custody events, or changed evidence remain visible and can block or reopen review.
- Each institution has its own principal and space. Authority is limited by action, work, destination, time, and any stated resource ceiling.
- A permission names the grantor, recipient, work, allowed use, attribution, terms, dates, and revocation. Expiration or revocation closes authorization for future uses; a new grant is needed to reactivate it.
- A rejection records its reason and the missing information or actor needed to resolve the case.
- A technical receipt supports the integrity and scope of one recorded operation. It does not establish the truth of the cultural claim underneath it.

### What this walkthrough establishes

The dated local run records seven accepted steps with kernel receipts that passed the kernel integrity check, followed by one rejection for empty evidence. It demonstrates the tested local path and how a reason and next action are retained. The synthetic file is not a report about a real museum or object.

The walkthrough does not establish that the museum, people, vessel, permission, or references exist; that the vessel is authentic or lawfully held; that custody is complete; or that the reviewer has legal authority. It does not publish to the internet, anchor a record to a public blockchain, prove permanent preservation, or demonstrate production readiness. For the recorded suite and its boundaries, see [Evidence](./EVIDENCE.md).

## Español

Permamuseum estudia cómo mantener separadas una afirmación sobre un registro cultural, su evidencia, la autoridad que la respalda, una revisión independiente y un permiso para un uso nombrado. El ejemplo actual es local y sintético. «Verificado» significa que se registró una revisión estructurada de una afirmación y una versión de evidencia concretas, con persona revisora, mandato, método, cobertura y límites identificados. No es una afirmación general de que una obra sea verdadera, auténtica o esté en poder legítimo de alguien.

> **La unidad no es solo la obra. La unidad es una afirmación sobre una obra, su evidencia, la autoridad que la respalda y el permiso para un uso concreto.**

### El recorrido del registro

```text
Institución o parte declarante
        │ declara una obra, un evento de custodia o la autoridad que afirma tener
        ▼
Afirmación ── referencias identificadas ──► Evidencia nombrada para revisar
    │                                              │
    │ autoridad y mandato                          │ método y versión
    ▼                                              ▼
Persona revisora independiente ───────────► Dictamen acotado
                                                   │
Titular de derechos ── permiso nombrado ──────────┤
                                                   ▼
                                        Decisión local + recibo
```

Cada efecto deja un recibo del kernel. Un recibo aceptado dice qué cubrió la operación. Un rechazo también registra su motivo y la información o actor necesario para resolverlo. El recibo del kernel protege la integridad del registro de esa operación; no valida la fuente externa ni la afirmación cultural.

### Actores, derechos y límites

| Actor | Puede hacer | Límite |
| --- | --- | --- |
| Institución | Mantener un principal y un espacio separados; declarar custodia, contexto y permisos que afirma poder conceder. | La declaración no prueba identidad institucional ni autoridad jurídica. No puede escribir en el espacio de otra institución. |
| Artista o titular de derechos | Conceder un uso nombrado para una obra identificada, con atribución, condiciones, fechas, destinatario y reglas de revocación. | La concesión solo cubre los derechos que controla la persona. Una carga, venta, revisión o token no crea una autorización más amplia. |
| Persona revisora | Revisar una afirmación concreta bajo un mandato identificado y registrar evidencia, método, conflictos, cobertura y límites. | Debe ser distinta de quien afirma y de quien ejecuta. La revisión no concede derechos ni decide hechos fuera de su alcance. |
| Coleccionista | Recibir los derechos de acceso o uso que indique expresamente un permiso. | Tener un token no transfiere automáticamente derechos de autor, propiedad, custodia ni sublicencia. |
| Plataforma | Aplicar reglas autorizadas, conservar recibos y mostrar resultados acotados. | No es propietaria, custodio, autoridad cultural ni juez de titularidad. |
| Comunidad | Un diseño futuro podría permitir aportar contexto o impugnar una afirmación. | El proceso para aportes y disputas sigue pendiente de diseño. Un aporte por sí solo no es verificación. |

### Recorrido: una vasija ficticia

El archivo de datos describe al **Museo Nimbo de la Laguna Azul**, que es ficticio; la obra inventada **Vasija de las nubes quietas**; y **Taller Nube de Tiza** como su autoría ficticia. El principal local y la obra reciben identificadores de ejemplo. La institución declara un evento de custodia fechado el 2025-04-10. El registro conserva visible el periodo anterior como no documentado, sin inferir una cadena previa.

Se nombran dos referencias: una referencia de archivo ficticia y una ficha descriptiva ficticia, ambas en versión `v1`. El mandato de ejemplo de la persona revisora se limita a confirmar que esas dos referencias estén presentes en el expediente sintético. La cobertura registrada incluye esas referencias y un evento de custodia declarado. No incluye la autenticidad material de la vasija, la titularidad jurídica, el valor jurídico de la procedencia ni la integridad de archivos externos al ejemplo.

Una titular de derechos ficticia concede el uso `exhibición digital descriptiva` para la obra identificada hasta el 2026-11-03. Una decisión local de publicación acepta el uso nombrado dentro de la revisión y el permiso registrados. El permiso del ejemplo no autoriza una venta ni la acuñación de un token. El valor de `2` por ciento en los datos de origen está marcado como parámetro de fantasía, no como tarifa o precio acordado.

Luego el recorrido intenta publicar sin evidencia identificable. La solicitud se rechaza como `evidencia-vacia` y el registro indica el siguiente paso: adjuntar referencias de evidencia identificables. La salida de terminal está citada en el README; [Evidencia](./EVIDENCE.md) resume cada resultado registrado.

### Reglas que muestra este modelo

- Una etiqueta de texto libre como «verificado» o un valor booleano no reemplaza una revisión estructurada y un recibo válido del kernel.
- La persona revisora es distinta de quien afirma, de la institución responsable de la afirmación y de quien ejecuta el efecto revisado.
- Las referencias repetidas no son corroboración independiente. Las afirmaciones contradictorias, los eventos de custodia faltantes y los cambios de evidencia permanecen visibles y pueden bloquear o reabrir una revisión.
- Cada institución tiene su propio principal y espacio. La autoridad se limita por acción, obra, destino, plazo y cualquier techo de recursos declarado.
- Un permiso nombra a quien lo concede, a quien lo recibe, la obra, el uso permitido, la atribución, las condiciones, las fechas y la revocación. El vencimiento o la revocación cierran la autorización para usos futuros; hace falta una concesión nueva para reactivarla.
- Un rechazo registra su motivo y la información o actor que hace falta para resolver el caso.
- Un recibo técnico respalda la integridad y el alcance de una operación registrada. No establece la verdad de la afirmación cultural subyacente.

### Qué establece este recorrido

La corrida local fechada registra siete pasos aceptados con recibos del kernel que pasaron la comprobación de integridad, seguidos por un rechazo por evidencia vacía. Muestra el flujo local probado y cómo se conservan el motivo y el siguiente paso. El expediente sintético no informa sobre un museo u objeto reales.

El recorrido no establece que existan el museo, las personas, la vasija, el permiso o las referencias; que la vasija sea auténtica o esté en poder legítimo de alguien; que la custodia esté completa; ni que la persona revisora tenga autoridad jurídica. No publica en internet, no ancla registros en una blockchain pública, no demuestra preservación permanente ni acredita preparación para producción. Consulta [Evidencia](./EVIDENCE.md) para conocer la suite registrada y sus límites.
