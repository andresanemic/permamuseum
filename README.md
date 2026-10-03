[![Permamuseum: cultural claims, evidence and permissions](./assets/cover.png)](./assets/cover.png)

<p align="center">
  <a href="#english"><img src="https://img.shields.io/badge/status-local_walkthrough-D7B698?style=for-the-badge&labelColor=07111A" alt="Status: local walkthrough"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-review--only-D7B698?style=for-the-badge&labelColor=07111A" alt="License: review only"></a>
  <a href="./docs/EVIDENCE.md"><img src="https://img.shields.io/badge/suite-37_tests-D7B698?style=for-the-badge&labelColor=07111A" alt="Suite: 37 tests"></a>
  <a href="./docs/HOW_IT_WORKS.md"><img src="https://img.shields.io/badge/agreement-before_code-E0C170?style=for-the-badge&labelColor=07111A" alt="Agreement written before code"></a>
  <a href="https://github.com/andresanemic/vespi"><img src="https://img.shields.io/badge/built_with-Vespi_%C2%B7_Lore_Plugin-E0C170?style=for-the-badge&labelColor=07111A" alt="Built with Vespi and Lore Plugin"></a>
</p>

<p align="center"><b>A cultural record should show who made a claim, what evidence they named, and what a review can actually establish.</b></p>

---

<details>
<summary><b>Read in English</b></summary>

## The project in one line

**Permamuseum keeps cultural claims, their evidence, bounded reviews, and permissions for specific uses visible as separate parts of one record.**

> **The unit is not the work alone. The unit is a claim about a work, its evidence, the authority behind it, and the permission for a specific use.**

## Why this problem matters

A museum may hold an object, an artist may hold rights in an image, a researcher may assess a document, and a platform may display a record. Those are different relationships. If a page reduces them all to a green “verified” mark, a reader cannot tell who made the claim, what was checked, whose authority was relied on, or which use was allowed. The record may look settled even when the evidence has a gap or the reviewer had no mandate.

Permamuseum starts with that ordinary uncertainty. A custody record can have a missing earlier period. A permission can cover a descriptive digital display without covering a sale or a token mint. A review can confirm that named references were present in an example file without confirming the object, the source documents, or legal title. Keeping those distinctions readable gives a reviewer a reasoned next question instead of a label that asks to be trusted.

## If you are judging Find Your Way or Meridian, start here

Read the project foundation and its walkthrough. Start with [How it works](./docs/HOW_IT_WORKS.md).

Open the test record. See [Evidence](./docs/EVIDENCE.md).

Read the legal and verification limits. See [Legal and limits](./docs/LEGAL_AND_LIMITS.md).

Review the publication conditions. See [Code not included](./CODE_NOT_INCLUDED.md) and the [review-only license](./LICENSE).

## In one minute

Meet a fictional museum, the Museo Nimbo de la Laguna Azul, and an invented vessel called *Vasija de las nubes quietas*. The museum records one declared custody event and leaves the undocumented earlier period visible. It attaches two fictional references. A separate reviewer records a narrow opinion about those references and that declared event. A fictional rights holder permits one named use, a descriptive digital display, until a stated date. The local decision accepts that request within the opinion and permission. A second publication request with no identifiable evidence is rejected with a reason and a next step. The example shows how a record can carry both a bounded acceptance and an actionable gap. Every institution, person, work, and reference in this case is invented.

## What it looks like in practice

The recorded walkthrough follows those eight actions from a local principal to a publication decision. Its output says plainly that there is no network, no running blockchain, and no simulated external anchor. These lines are quoted from the recorded run:

```text
Permamuseum, recorrido local con datos sintéticos: Museo Nimbo de la Laguna Azul
Sin red. Sin blockchain encendido. No se simula un anclaje externo.
registrar-principal: aceptada; recibo de kernel, coverage=alcance-revisado, autoridad-separada, identificador local y espacio declarados; notCovered=external anchor, identidad institucional real, representación legal
declarar-custodia: aceptada; recibo de kernel, coverage=alcance-revisado, autoridad-separada, evento declarado y laguna explícita; notCovered=external anchor, historia anterior no documentada, hecho histórico independiente
emitir-dictamen: aceptada; recibo de kernel, coverage=alcance-revisado, autoridad-separada, presencia de dos referencias ficticias, un evento de custodia declarado; notCovered=external anchor, autenticidad material, titularidad, valor jurídico de procedencia, integridad de archivos externos
decidir-publicacion: aceptada; recibo de kernel, coverage=alcance-revisado, autoridad-separada, decisión local de publicación acotada; notCovered=external anchor, publicación en internet, autenticidad, titularidad
publicar-sin-evidencia: rechazada (evidencia-vacia); recibo de kernel, coverage=rechazo por evidencia vacía; notCovered=external anchor, veracidad de afirmación no aportada
  motivo: no hay evidencia identificable que revisar
  resolver: adjuntar referencias de evidencia identificables
Resultado: 7 aceptados, 1 rechazado(s).
```

The quoted output is from the actual local walkthrough report. The narrative above names its synthetic case; it is not a report of a real museum or a cultural finding. For the complete sequence and the tested rules, open [How it works](./docs/HOW_IT_WORKS.md) and [Evidence](./docs/EVIDENCE.md).

## How it works

```text
Claimant or institution
        │ declares a work, event, or claimed authority
        ▼
Claim ── references ──► Evidence named for review
  │                         │
  │ mandate and separation  │ method and version
  ▼                         ▼
Independent reviewer ──► Bounded opinion + kernel receipt
                                  │
Rights holder ── named permission ──┤
                                  ▼
                     Local use decision and limits
```

The record keeps the claim, references, reviewer’s opinion, permission, and technical receipt distinct. “Verified” describes only the recorded review, with its reviewer, mandate, method, evidence, scope, and limits. It does not turn a technical integrity check into proof that an object is authentic or that a person owns it.

| Actor | What the design lets them do | Boundary of that role |
| --- | --- | --- |
| Institution | Keep its own space and declare custody, context, or permissions it says it can grant. | A declaration does not prove identity or legal authority; one institution cannot write in another’s space. |
| Artist or rights holder | Grant an identified use for a named work, with attribution, conditions, dates, and revocation terms. | The platform cannot infer rights from an upload, a sale, a review, or a token. |
| Reviewer | Review a claim under a named mandate and record method, evidence, conflicts, scope, and limits. | The reviewer is separate from the claimant and executor; the review does not grant rights or settle facts outside its scope. |
| Collector | Receive only the access or use rights stated in a permission. | A token does not automatically transfer copyright, ownership, custody, or sublicensing rights. |
| Platform | Apply authorized rules, preserve receipts, and show bounded results. | It is not the owner, custodian, cultural authority, or judge of title. |
| Community | A future design could let people contribute context or dispute a claim. | No contribution or dispute channel is implemented; a contribution alone is not verification. |

For the sequence of records, the fictional vessel, and rules in more detail, see [How it works](./docs/HOW_IT_WORKS.md).

## Why Permamuseum

| You need | What it gives you | Where it lives |
| --- | --- | --- |
| To tell a declaration from a reviewed claim. | A review names its reviewer, mandate, method, evidence, coverage, and limits. | [How it works](./docs/HOW_IT_WORKS.md) |
| To leave a gap visible instead of filling it by implication. | The fictional vessel’s earlier custody period stays marked as undocumented. | [Walkthrough](./docs/HOW_IT_WORKS.md) |
| To check a use against a permission. | The example permission names descriptive digital display and does not silently expand to a sale. | [How it works](./docs/HOW_IT_WORKS.md) |
| To see what the local rules caught. | The recorded suite reports 37 passing checks, including an empty-evidence rejection and authority boundaries. | [Evidence](./docs/EVIDENCE.md) |
| To distinguish a technical receipt from a cultural conclusion. | Each receipt states what was checked and what was not covered. | [Evidence](./docs/EVIDENCE.md) |

## What it is not

Permamuseum is not a museum, collection, institutional pilot, provenance authority, authenticity certificate, rights registry, or legal opinion. Its name does not promise permanent storage. The local walkthrough does not establish that a work exists, is authentic, was lawfully acquired, has complete provenance, or has an uncontested rights holder. It does not connect to a museum, publish to the internet, anchor records to Stellar, or operate a marketplace.

## Evidence you can open

The captured suite records **37 tests passed, 0 failed, 0 skipped**. It covers the named project rules, three valid control cases, kernel provenance, receipt-backed publication, safe local paths, and terminal output escaping. The earlier adversarial RED run records 25 cases failing for their expected reasons before implementation, with three valid controls already passing. A separate mutation sweep detected six isolated rule changes. The local security review reports four security checks passing after corrections and is explicitly not an independent audit. These are results from dated project records, summarized here; the test files and raw reports are not included in this repository.

The kernel-provenance checks compare the consumed kernel with the kit’s fixed digest table, check five declared kernel modules, compare host copies byte for byte, and check the commit declared by installed modules. A digest is a technical fingerprint of the reviewed copy. It helps identify which kernel copy the local receipt depended on; it cannot establish cultural truth, legal authority, or the quality of outside evidence. The walkthrough used real kernel receipts, but this documentation-only repository cannot rerun the suite or verify those receipts from source.

## How Permamuseum relates to Vespi and Lore Plugin

The recorded local walkthrough consumes Vespi kernel receipts and checks their integrity. Its project notes say the active kernel is discovered through paths, modules, and a digest table rather than bundled as a private copy. Lore Plugin supplies the project’s written criteria and routing context. This relationship does not make either kernel receipts or project criteria evidence of an object’s history. The checks recorded here cover the consumed kernel copy, not a live museum workflow. Visit [Vespi](https://github.com/andresanemic/vespi) and [Lore Plugin](https://github.com/andresanemic/lore-plugin) to see those projects.

## Economy and PERMA

The RUC-D study concludes that a project currency is unnecessary for recording claims, permissions, or receipts. It considers PERMA only as a conditional technical proof of concept for the payment medium of a hypothetical cultural marketplace. USDC or XLM could also serve that purpose. The supplied evidence records no PERMA issuance or testnet transaction; supply and operating parameters remain pending. There is no price, sale, operating marketplace, or demonstrated demand. A token would not transfer rights in a cultural work. Read the [economy and token study](./docs/TOKEN.md).

## What has not been verified

No real institution, claimant, reviewer, rights holder, permission, work, or evidence participated in the walkthrough. External source documents, real identities, legal authority, authenticity, lawful acquisition, complete custody history, cultural value, and applicable legal compliance have not been verified. No internet publication, Stellar transaction, permanent preservation, marketplace, or production deployment is evidenced. The precise coverage and open questions are in [Evidence](./docs/EVIDENCE.md) and [Legal and limits](./docs/LEGAL_AND_LIMITS.md).

## How to review the project

Start with [How it works](./docs/HOW_IT_WORKS.md) for the model and synthetic case. Then compare the test names and recorded results in [Evidence](./docs/EVIDENCE.md). Read [Legal and limits](./docs/LEGAL_AND_LIMITS.md) before interpreting “verified” or any permission. [Code not included](./CODE_NOT_INCLUDED.md) explains what this repository contains; the [review-only license](./LICENSE) sets its review terms. PERMA’s conditional study is in [Economy and token study](./docs/TOKEN.md).

## Author

**Andrés Peña Mellado**, Digital Art Director & Creative Developer working across AI agents, Web3, design and research. Repository authority: `andresanemic`.

[<img src="./assets/icons/v2/telegram.svg" width="28" alt="Telegram">](https://t.me/andresanemic) &nbsp;&nbsp; [<picture><source media="(prefers-color-scheme: dark)" srcset="./assets/icons/v2/x-dark.svg"><img src="./assets/icons/v2/x.svg" width="28" alt="X"></picture>](https://x.com/andresanemic) &nbsp;&nbsp; [<img src="./assets/icons/v2/linkedin.svg" width="28" alt="LinkedIn">](https://www.linkedin.com/in/andresanemic/)

---

[How it works](./docs/HOW_IT_WORKS.md) · [Evidence](./docs/EVIDENCE.md) · [Economy and token study](./docs/TOKEN.md) · [Legal and limits](./docs/LEGAL_AND_LIMITS.md) · [Code not included](./CODE_NOT_INCLUDED.md) · [Review-only license](./LICENSE) · [Vespi](https://github.com/andresanemic/vespi) · [Lore Plugin](https://github.com/andresanemic/lore-plugin)

</details>

<details>
<summary><b>Leer en español</b></summary>

## El proyecto en una frase

**Permamuseum mantiene visibles, como partes distintas de un mismo registro, las afirmaciones culturales, su evidencia, las revisiones acotadas y los permisos para usos concretos.**

> **La unidad no es solo la obra. La unidad es una afirmación sobre una obra, su evidencia, la autoridad que la respalda y el permiso para un uso concreto.**

## Por qué importa este problema

Un museo puede custodiar un objeto, una artista puede tener derechos sobre una imagen, una persona investigadora puede revisar un documento y una plataforma puede mostrar un registro. Son relaciones distintas. Si una página las reduce a una marca verde que dice «verificado», quien lee no puede saber quién hizo la afirmación, qué se comprobó, en qué autoridad se confió ni qué uso se permitió. El registro puede parecer resuelto aunque haya una laguna en la evidencia o la persona revisora no tuviera mandato.

Permamuseum parte de esa incertidumbre cotidiana. Un registro de custodia puede tener un periodo anterior sin documentar. Un permiso puede cubrir una exhibición digital descriptiva sin cubrir una venta o la acuñación de un token. Una revisión puede confirmar que ciertas referencias estaban presentes en un expediente de ejemplo sin confirmar el objeto, los documentos de origen ni la titularidad jurídica. Mantener legibles esas diferencias permite hacer la siguiente pregunta con fundamento, en vez de pedir que se confíe en una etiqueta.

## Si estás evaluando Find Your Way o Meridian, empieza aquí

Lee la base del proyecto y su recorrido. Empieza por [Cómo funciona](./docs/HOW_IT_WORKS.md).

Abre el registro de pruebas. Consulta [Evidencia](./docs/EVIDENCE.md).

Lee los límites jurídicos y de verificación. Consulta [Marco legal y límites](./docs/LEGAL_AND_LIMITS.md).

Revisa las condiciones de publicación. Consulta [Código no incluido](./CODE_NOT_INCLUDED.md) y la [licencia de solo revisión](./LICENSE).

## En un minuto

Conoce un museo ficticio, el Museo Nimbo de la Laguna Azul, y una vasija inventada llamada *Vasija de las nubes quietas*. El museo registra un evento de custodia declarado y deja visible el periodo anterior que no está documentado. Adjunta dos referencias ficticias. Una persona revisora distinta registra un dictamen acotado sobre esas referencias y ese evento declarado. Una titular de derechos ficticia concede un permiso para un uso nombrado, la exhibición digital descriptiva, hasta una fecha indicada. La decisión local acepta esa solicitud dentro del dictamen y del permiso. Una segunda solicitud de publicación sin evidencia identificable se rechaza con un motivo y un siguiente paso. El ejemplo muestra cómo un registro puede conservar tanto una aceptación acotada como una laguna que todavía requiere atención. La institución, las personas, la obra y las referencias de este caso son inventadas.

## Cómo se ve en la práctica

El recorrido registrado sigue esas ocho acciones desde un principal local hasta una decisión de publicación. Su salida dice con claridad que no hay red, blockchain activa ni anclaje externo simulado. Estas líneas se citan del recorrido registrado:

```text
Permamuseum, recorrido local con datos sintéticos: Museo Nimbo de la Laguna Azul
Sin red. Sin blockchain encendido. No se simula un anclaje externo.
registrar-principal: aceptada; recibo de kernel, coverage=alcance-revisado, autoridad-separada, identificador local y espacio declarados; notCovered=external anchor, identidad institucional real, representación legal
declarar-custodia: aceptada; recibo de kernel, coverage=alcance-revisado, autoridad-separada, evento declarado y laguna explícita; notCovered=external anchor, historia anterior no documentada, hecho histórico independiente
emitir-dictamen: aceptada; recibo de kernel, coverage=alcance-revisado, autoridad-separada, presencia de dos referencias ficticias, un evento de custodia declarado; notCovered=external anchor, autenticidad material, titularidad, valor jurídico de procedencia, integridad de archivos externos
decidir-publicacion: aceptada; recibo de kernel, coverage=alcance-revisado, autoridad-separada, decisión local de publicación acotada; notCovered=external anchor, publicación en internet, autenticidad, titularidad
publicar-sin-evidencia: rechazada (evidencia-vacia); recibo de kernel, coverage=rechazo por evidencia vacía; notCovered=external anchor, veracidad de afirmación no aportada
  motivo: no hay evidencia identificable que revisar
  resolver: adjuntar referencias de evidencia identificables
Resultado: 7 aceptados, 1 rechazado(s).
```

La salida citada procede del registro real del recorrido local. La narración de arriba nombra su caso sintético; no informa de un museo real ni de un hallazgo cultural. Consulta [Cómo funciona](./docs/HOW_IT_WORKS.md) y [Evidencia](./docs/EVIDENCE.md) para leer la secuencia completa y las reglas probadas.

## Cómo funciona

```text
Institución o parte declarante
        │ declara una obra, un evento o la autoridad que afirma tener
        ▼
Afirmación ── referencias ──► Evidencia identificada para revisión
    │                              │
    │ mandato y separación         │ método y versión
    ▼                              ▼
Persona revisora independiente ─► Dictamen acotado + recibo del kernel
                                           │
Titular de derechos ── permiso nombrado ──┤
                                           ▼
                               Decisión local y sus límites
```

El registro mantiene separadas la afirmación, las referencias, el dictamen, el permiso y el recibo técnico. «Verificado» describe únicamente la revisión registrada, con su persona revisora, mandato, método, evidencia, alcance y límites. No convierte una comprobación de integridad técnica en prueba de autenticidad o titularidad.

| Actor | Qué puede hacer según el diseño | Límite de su función |
| --- | --- | --- |
| Institución | Mantener su propio espacio y declarar custodia, contexto o permisos que afirma poder conceder. | La declaración no prueba su identidad ni autoridad jurídica; una institución no puede escribir en el espacio de otra. |
| Artista o titular de derechos | Conceder un uso identificado para una obra nombrada, con atribución, condiciones, fechas y reglas de revocación. | La plataforma no puede inferir derechos de una carga, una venta, una revisión o un token. |
| Persona revisora | Revisar una afirmación bajo un mandato nombrado y registrar método, evidencia, conflictos, alcance y límites. | Debe ser distinta de quien afirma y de quien ejecuta; la revisión no concede derechos ni resuelve hechos fuera de su alcance. |
| Coleccionista | Recibir solo los derechos de acceso o uso que indique expresamente un permiso. | Un token no transfiere automáticamente derechos de autor, propiedad, custodia ni sublicencia. |
| Plataforma | Aplicar reglas autorizadas, conservar recibos y mostrar resultados acotados. | No es propietaria, custodio, autoridad cultural ni juez de titularidad. |
| Comunidad | Un diseño futuro podría permitir aportar contexto o impugnar una afirmación. | No hay un canal implementado para aportes o disputas; un aporte por sí solo no es verificación. |

Para ver la secuencia de registros, la vasija ficticia y sus reglas en detalle, consulta [Cómo funciona](./docs/HOW_IT_WORKS.md).

## Por qué Permamuseum

| Necesitas | Qué te ofrece | Dónde está |
| --- | --- | --- |
| Distinguir una declaración de una afirmación revisada. | El dictamen identifica persona revisora, mandato, método, evidencia, cobertura y límites. | [Cómo funciona](./docs/HOW_IT_WORKS.md) |
| Dejar una laguna visible en vez de llenarla por inferencia. | El periodo anterior en la custodia de la vasija ficticia sigue marcado como no documentado. | [Recorrido](./docs/HOW_IT_WORKS.md) |
| Contrastar un uso con el permiso correspondiente. | El permiso de ejemplo nombra la exhibición digital descriptiva y no se amplía en silencio a una venta. | [Cómo funciona](./docs/HOW_IT_WORKS.md) |
| Ver qué captaron las reglas locales. | La suite registrada informa 37 pruebas aprobadas, incluida la falta de evidencia y los límites de autoridad. | [Evidencia](./docs/EVIDENCE.md) |
| Separar un recibo técnico de una conclusión cultural. | Cada recibo declara qué se comprobó y qué quedó fuera. | [Evidencia](./docs/EVIDENCE.md) |

## Qué no es

Permamuseum no es un museo, una colección, un piloto institucional, una autoridad de procedencia, un certificado de autenticidad, un registro de derechos ni una opinión jurídica. Su nombre no promete almacenamiento permanente. El recorrido local no establece que una obra exista, sea auténtica, se haya adquirido legalmente, tenga una procedencia completa o cuente con una persona titular de derechos indiscutida. No se conecta a un museo, no publica en internet, no ancla registros en Stellar ni opera un marketplace.

## Evidencia que puedes abrir

La suite capturada registra **37 pruebas aprobadas, 0 fallidas y 0 omitidas**. Cubre las reglas del proyecto con nombre, tres controles válidos, procedencia del kernel, publicación respaldada por recibo, rutas locales seguras y escape de caracteres de control en terminal. La fase adversarial RED anterior registra 25 casos fallidos por el motivo previsto antes de implementar, con tres controles válidos ya aprobados. Un barrido separado detectó seis cambios aislados de reglas. La revisión local de seguridad informa cuatro comprobaciones aprobadas después de las correcciones y declara que no es una auditoría independiente. Son resultados de registros fechados del proyecto, resumidos aquí; este repositorio no incluye los informes originales ni los archivos de pruebas.

Las comprobaciones de procedencia comparan el kernel consumido con la tabla de digest fijada por el kit, revisan cinco módulos declarados, comparan byte a byte las copias de los hosts y comprueban el commit declarado por los módulos instalados. Un digest es una huella técnica de la copia revisada. Ayuda a identificar de qué copia del kernel dependió el recibo local; no establece verdad cultural, autoridad jurídica ni calidad de evidencia externa. El recorrido usó recibos reales del kernel, pero este repositorio documental no puede volver a ejecutar la suite ni verificar esos recibos desde el código.

## Relación de Permamuseum con Vespi y Lore Plugin

El recorrido local registrado consume recibos del kernel de Vespi y comprueba su integridad. Las notas del proyecto dicen que el kernel activo se descubre mediante rutas, módulos y una tabla de digest, en vez de incluirlo como copia privada. Lore Plugin aporta los criterios escritos del proyecto y el contexto de enrutamiento. Esta relación no convierte los recibos del kernel ni los criterios del proyecto en evidencia de la historia de una obra. Las comprobaciones aquí registradas cubren la copia consumida del kernel, no un flujo de trabajo activo en un museo. Puedes conocer esos proyectos en [Vespi](https://github.com/andresanemic/vespi) y [Lore Plugin](https://github.com/andresanemic/lore-plugin).

## Economía y PERMA

El estudio RUC-D concluye que una moneda propia no hace falta para registrar afirmaciones, permisos o recibos. Considera PERMA únicamente como prueba de concepto técnica y condicional del medio de pago de un marketplace cultural hipotético. También se podría usar USDC o XLM. La evidencia disponible no registra una emisión de PERMA ni transacciones en testnet; la oferta y los parámetros de operación siguen pendientes. No hay precio, venta, marketplace operativo ni demanda demostrada. Un token no transfiere derechos sobre una obra cultural. Lee el [estudio de economía y token](./docs/TOKEN.md).

## Qué no se ha verificado

En el recorrido no participaron instituciones, declarantes, revisores, titulares de derechos, permisos, obras ni evidencias reales. No se verificaron documentos externos, identidades reales, autoridad jurídica, autenticidad, adquisición lícita, historia completa de custodia, valor cultural ni cumplimiento legal aplicable. No hay evidencia de publicación en internet, transacción en Stellar, preservación permanente, marketplace ni despliegue de producción. Los límites y preguntas abiertas se detallan en [Evidencia](./docs/EVIDENCE.md) y [Marco legal y límites](./docs/LEGAL_AND_LIMITS.md).

## Cómo revisar el proyecto

Empieza por [Cómo funciona](./docs/HOW_IT_WORKS.md) para conocer el modelo y el caso sintético. Luego compara los nombres de pruebas y resultados registrados en [Evidencia](./docs/EVIDENCE.md). Lee [Marco legal y límites](./docs/LEGAL_AND_LIMITS.md) antes de interpretar «verificado» o cualquier permiso. [Código no incluido](./CODE_NOT_INCLUDED.md) explica qué contiene este repositorio; la [licencia de solo revisión](./LICENSE) fija sus condiciones. El estudio condicional de PERMA está en [Estudio de economía y token](./docs/TOKEN.md).

## Autor

**Andrés Peña Mellado**, Digital Art Director & Creative Developer que trabaja entre agentes de IA, Web3, diseño e investigación. Autoridad del repositorio: `andresanemic`.

[<img src="./assets/icons/v2/telegram.svg" width="28" alt="Telegram">](https://t.me/andresanemic) &nbsp;&nbsp; [<picture><source media="(prefers-color-scheme: dark)" srcset="./assets/icons/v2/x-dark.svg"><img src="./assets/icons/v2/x.svg" width="28" alt="X"></picture>](https://x.com/andresanemic) &nbsp;&nbsp; [<img src="./assets/icons/v2/linkedin.svg" width="28" alt="LinkedIn">](https://www.linkedin.com/in/andresanemic/)

---

[Cómo funciona](./docs/HOW_IT_WORKS.md) · [Evidencia](./docs/EVIDENCE.md) · [Estudio de economía y token](./docs/TOKEN.md) · [Marco legal y límites](./docs/LEGAL_AND_LIMITS.md) · [Código no incluido](./CODE_NOT_INCLUDED.md) · [Licencia de solo revisión](./LICENSE) · [Vespi](https://github.com/andresanemic/vespi) · [Lore Plugin](https://github.com/andresanemic/lore-plugin)

</details>
