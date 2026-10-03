# Evidence / Evidencia

## English

This page summarizes dated project records from 2026-10-03. The records describe a local run using synthetic data and no network. The public repository does not contain the source code, test files, raw run logs, or the excluded project workspace. Read the numbers as the project’s captured report, not as a test run a reader can reproduce from this repository.

### What was recorded

| Record | What it covers | Reported result |
| --- | --- | --- |
| Post-implementation suite | Named behavior checks, controls, receipt validation, kernel provenance, local path handling, and terminal output. | 37 passed, 0 failed, 0 skipped. |
| Adversarial RED phase | 25 cases written before implementation, with three valid controls. | All 25 adversarial cases failed for their expected reasons; the three controls passed. |
| Local walkthrough | Synthetic principal, work, custody declaration, references, review, permission, publication decision, and empty-evidence rejection. | Seven accepted operations and one rejection for `evidencia-vacia`. |
| Mutation sweep | Six isolated changes to rules with focused checks. | All six changes were detected; the original source was restored. |
| Local security review | Output path containment, evidence-backed verification, terminal control characters, and stated limitations. | Four security checks reported passing after fixes. The review was local, not independent. |

The GREEN suite contains the five kernel and walkthrough checks below, 25 adversarial rule checks, three valid controls, two further verification checks, and two security checks. Its named cases include unverified publication, claimant and reviewer separation, empty and repeated evidence, conflicting custody claims, royalty ceilings, expiry and revocation, stale evidence, token permission boundaries, missing custody actors, reviewer conflicts, and actionable rejection output. The names and exact recorded test totals are in the captured suite summary, but those raw files are not published here.

### What the adversarial phase found

The RED run asked whether the planned rules could reject specific bad states before they were implemented. Its cases cover a museum publishing without review, one party declaring and reviewing the same claim, empty or duplicated references, incompatible provenance claims, a royalty over its stated ceiling, expired or revoked permissions, stale receipts, duplicated payee identity, documented looting indicators, free text or a single administrator asserting “verified,” contradictions in evidence, authority expiry, writing into another institution’s space, permissions without an identified work, use beyond the grant, token ownership being treated as a permission, incomplete custody, evidence changing after review, an executor reviewing their own effect, and a rejection with no path to resolve it. Each case failed for its expected reason before implementation. This is evidence that the tests expressed those failure expectations, not that the failures were observed at real institutions.

The later mutation sweep changed six rules one at a time: claimant and reviewer independence, the royalty ceiling, expiration, revocation, permission scope, and the actor/evidence required for a custody event. Each focused test detected its change. That provides a small check that those tests react to changes in the corresponding rules; it is not a complete measure of test quality.

### Kernel identity and the digest check

Permamuseum does not bundle or pin a private kernel copy. The project notes say the code discovers the installed Vespi kernel by paths and modules, then compares it with the kit’s fixed digest table. The suite reports four kernel-provenance checks:

- the installed kit declares five kernel modules;
- the consumed kernel matches the digest table;
- available host copies match byte for byte;
- installed modules declare the same commit.

A digest is a technical fingerprint of the specific files compared. Matching it helps answer, “Which kernel copy did this run consume?” It does not answer, “Is the cultural claim true?” It cannot authenticate a person, a document, a mandate, a work, ownership, or legal authority. The local walkthrough used real kernel receipts and reports that their integrity checks passed, without modifying the installed kernel copy. The published report does not provide the code or the digest values, so this repository cannot independently repeat that comparison.

### What can and cannot be checked here

The reported run states that it had no network, did not turn on a blockchain, and did not simulate an external anchor. No Stellar operation, testnet transaction, or internet publication is recorded. The evidence summary does not establish museum participation, real-world provenance, object authenticity, legal title, permission authority, complete custody, cultural value, legal compliance, permanent preservation, or production readiness.

The four local security checks address a bounded set of code paths. They report that paths outside the repository and symbolic-link paths were rejected, that a text or boolean verification and an unreceipted opinion were insufficient, and that terminal control characters were escaped. The review also names unresolved limits: input size is not bounded, all input fields do not have an exhaustive schema, and concurrent hostile filesystem changes are outside its protection. It did not review a network service, marketplace, wallet, or token integration. The report expressly says it is not an independent security audit.

Because this public repository contains documentation only, running a test command here cannot reproduce the captured suite. When source code is opened for review, the test results need to be checked against that code and its installed kernel. The project’s publication terms are in [Code not included](../CODE_NOT_INCLUDED.md) and [LICENSE](../LICENSE).

## Español

Esta página resume registros fechados del proyecto el 2026-10-03. Describen una corrida local con datos sintéticos y sin red. El repositorio público no contiene código fuente, archivos de pruebas, registros completos de ejecución ni el espacio de trabajo excluido. Las cifras corresponden al informe capturado por el proyecto; no son una corrida que se pueda reproducir desde este repositorio.

### Qué se registró

| Registro | Qué cubre | Resultado informado |
| --- | --- | --- |
| Suite posterior a la implementación | Comprobaciones nombradas de comportamiento, controles, validación de recibos, procedencia del kernel, rutas locales y salida de terminal. | 37 aprobadas, 0 fallidas, 0 omitidas. |
| Fase adversarial RED | 25 casos escritos antes de implementar, con tres controles válidos. | Los 25 casos adversariales fallaron por los motivos previstos; los tres controles se aprobaron. |
| Recorrido local | Principal, obra, declaración de custodia, referencias, dictamen, permiso, decisión de publicación y rechazo por evidencia vacía, todo sintético. | Siete operaciones aceptadas y un rechazo por `evidencia-vacia`. |
| Barrido de mutaciones | Seis cambios aislados de reglas con comprobaciones focalizadas. | Se detectaron los seis cambios; se restauró el código original. |
| Revisión local de seguridad | Contención de rutas, verificación respaldada por evidencia, controles de terminal y límites declarados. | Se informan cuatro comprobaciones de seguridad aprobadas tras las correcciones. La revisión fue local, no independiente. |

La suite GREEN contiene las cinco comprobaciones del kernel y del recorrido que se describen abajo, 25 comprobaciones de reglas adversariales, tres controles válidos, dos comprobaciones adicionales de verificación y dos comprobaciones de seguridad. Entre los casos nombrados están publicación institucional sin revisión, separación entre declarante y persona revisora, evidencia vacía o repetida, procedencias incompatibles, topes de regalía, vencimiento y revocación, evidencia antigua, límites de permisos y tokens, actores faltantes en custodia, conflictos de revisión y rechazos sin salida accionable. Los nombres y totales exactos están en el resumen de suite capturado, que no se publica aquí como archivo bruto.

### Qué encontró la fase adversarial

La corrida RED preguntó si las reglas planificadas podían rechazar estados indebidos antes de implementarse. Sus casos cubren una publicación sin revisión, una misma parte que declara y revisa, referencias vacías o duplicadas, afirmaciones de procedencia incompatibles, una regalía por sobre su techo, permisos vencidos o revocados, recibos antiguos, identidad de cobro duplicada, indicios documentados de saqueo, texto libre o una persona administradora afirmando «verificado», contradicciones en la evidencia, vencimiento de autoridad, escritura en el espacio de otra institución, permisos sin obra identificada, usos que exceden la concesión, tokens tratados como permisos, custodia incompleta, evidencia cambiada tras la revisión, una persona ejecutora revisando su propio efecto y un rechazo sin vía de resolución. Cada caso falló por el motivo previsto antes de implementar. Esto demuestra que las pruebas expresaban esas expectativas de fallo, no que tales fallos se observaran en instituciones reales.

El barrido posterior cambió seis reglas de una en una: independencia entre declarante y persona revisora, techo de regalía, vencimiento, revocación, alcance del permiso y actor/evidencia exigidos para un evento de custodia. Cada prueba focalizada detectó el cambio. Es una comprobación acotada de que esas pruebas reaccionan a cambios en las reglas correspondientes; no mide por completo la calidad de la suite.

### Identidad del kernel y comprobación por digest

Permamuseum no incluye ni fija una copia privada del kernel. Las notas del proyecto dicen que el código encuentra el kernel instalado de Vespi mediante rutas y módulos, y luego lo compara con la tabla de digest fijada por el kit. La suite informa cuatro comprobaciones de procedencia del kernel:

- el kit instalado declara cinco módulos del kernel;
- el kernel consumido coincide con la tabla de digest;
- las copias disponibles en los hosts coinciden byte a byte;
- los módulos instalados declaran el mismo commit.

Un digest es una huella técnica de los archivos comparados. Al coincidir, ayuda a responder: «¿Qué copia del kernel consumió esta corrida?». No responde: «¿Es verdadera la afirmación cultural?». No autentica a una persona, un documento, un mandato, una obra, la propiedad ni la autoridad jurídica. El recorrido local usó recibos reales del kernel y el informe dice que pasaron las comprobaciones de integridad, sin modificar la copia instalada. El informe publicado no incluye código ni valores de digest, por lo que este repositorio no permite repetir la comparación de forma independiente.

### Qué se puede comprobar aquí y qué no

El informe de la corrida dice que no hubo red, blockchain activa ni anclaje externo simulado. No registra operaciones en Stellar, transacciones de testnet ni publicación en internet. El resumen de evidencia no establece participación de un museo, procedencia real, autenticidad de una obra, titularidad jurídica, autoridad del permiso, custodia completa, valor cultural, cumplimiento legal, preservación permanente ni preparación para producción.

Las cuatro comprobaciones locales de seguridad cubren un conjunto acotado de rutas de código. Informan que se rechazaron rutas fuera del repositorio y rutas con enlaces simbólicos, que no bastó una verificación textual o booleana ni un dictamen sin recibo, y que se escaparon caracteres de control en la terminal. La revisión también nombra límites pendientes: no se fija un tamaño máximo para la entrada, no hay un esquema exhaustivo de todos sus campos y la protección no cubre cambios hostiles concurrentes del sistema de archivos. No se revisó un servicio de red, marketplace, wallet ni integración de token. El propio informe aclara que no es una auditoría de seguridad independiente.

Como este repositorio público solo contiene documentación, ejecutar aquí un comando de pruebas no reproduciría la suite capturada. Cuando se abra el código para revisión, habrá que contrastar los resultados con ese código y con el kernel instalado. Las condiciones de publicación están en [Código no incluido](../CODE_NOT_INCLUDED.md) y [LICENSE](../LICENSE).
