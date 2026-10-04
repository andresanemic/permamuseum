# Economy and token / Economía y token

## English

### RUC-D reading and alternatives

The RUC-D study treats itself as a design lens, not an empirical finding or certification. It examines relationships, resources, units and scales, actors, rights, rules, authority, evidence, provision, appropriation, and possible externalities before asking whether a currency adds anything. Its conclusion is that a project currency is unnecessary for recording claims, permissions, or receipts. The current public walkthrough is synthetic and provides no evidence of an actual community, cultural marketplace, or demand.

The alternatives are **no currency**, **USDC**, **XLM**, and **PERMA**. No currency is enough for an information record and avoids adding an account unit before costs, rights, and participants are known. USDC or XLM could be used for payments if a cultural marketplace is built and its participants accept them. PERMA could be tested as a project-specific payment medium, but the study does not show that it is necessary or better. In every case, the payment method does not establish authority, permission, ownership, custody, or copyright in a cultural work.

RUC-D highlights unresolved provision and distribution questions. Institutions, artists, rights holders, and communities could contribute records, context, and review work while an operator captures fees, data, visibility, or control. No participant agreement, operating cost, transaction volume, royalty basis, payment demand, or distributional fairness has been measured. A token reward could encourage activity without showing that a contribution is useful, independent, or consented to. Distributed infrastructure can record operations, but it cannot determine who was entitled to make them, correct a cultural record, or resolve a dispute.

### Limits and open questions

PERMA is only a technical proof of concept for the payment medium of a hypothetical cultural marketplace and its royalties. The marketplace is not built. No payment for a cultural work, royalty calculation, user demand, economic value, cultural suitability, or fair allocation has been demonstrated. The testnet operation does not establish legal entitlement, transfer rights, or make the token a condition of access.

Questions for any later design include who would participate and govern changes; how permissions and royalty obligations would be authorized and calculated; how errors, disputes, refunds, expiry, and revocation would work; what costs a token avoids compared with no currency, USDC, or XLM; how contributors and operators would share costs and income; and how access without crypto, privacy, export, and exit would be protected. These questions require real participants, evidence, and legal review before a production proposal.

There is no price, sale, pool, offer, liquidity, or promise of value. Nothing is issued on mainnet or sold without review by a lawyer. Testnet can reset, and testnet balances are not money. The independent check described here reports a Horizon comparison from the dated project manifest; this documentation-only repository does not include the verifier code, so readers cannot rerun that verifier from this repository. See [Evidence](./EVIDENCE.md) for all manifest hashes and a way to check each transaction directly.

### PERMA testnet design

PERMA is a **classic Stellar asset** already issued on Stellar testnet with a fixed supply of **100,000,000 PERMA**. The issuer account is locked after issuance: its master weight and thresholds are zero and it has no additional signers. Authorization-required, revocable-authorization, immutable-authorization, and clawback flags are off. An independent verifier checked the asset state against Horizon and reported the supply, issuer settings, balances, and 36 vesting claimable balances as verified. The reported operation comprises 63 transactions with hashes in ledgers 5010900 to 5010953; the manifest also records a failed early-claim attempt. Transaction hashes and links are listed in [Evidence](./EVIDENCE.md).

The allocation parameters for this test run are treasury 20%, cultural community 40%, liquidity reserve 10% with no pool or offers, contingency 5%, advisors 10%, and founder 15%. The founder allocation uses a 12-month cliff and 36 monthly claimable balances. These percentages and amounts are experimental parameters of this test run, not an adopted distribution, entitlement, or promise. The liquidity reserve remains reserved and has no pool or offers. The transaction manifest is the record for this testnet run; testnet state may be reset.

This proof of concept tests a possible payment medium for a cultural marketplace and royalties that do not yet exist. The payment layer is considered only after the RUC-D analysis above. Nothing in the asset or its allocation grants a right to a work, its image, custody, access, or use.

## Español

### Lectura RUC-D y alternativas

El estudio con RUC-D se presenta como una lente de diseño, no como hallazgo empírico ni certificación. Examina relaciones, recursos, unidades y escalas, actores, derechos, reglas, autoridad, evidencia, provisión, apropiación y posibles externalidades antes de preguntar si una moneda añade algo. Concluye que una moneda propia no hace falta para registrar afirmaciones, permisos o recibos. El recorrido público actual es sintético y no demuestra que exista una comunidad, un marketplace cultural ni demanda.

Las alternativas son **ninguna moneda**, **USDC**, **XLM** y **PERMA**. Ninguna moneda basta para un registro informativo y evita añadir una unidad contable antes de conocer costos, derechos y participantes. USDC o XLM podrían usarse para pagos si se construye un marketplace cultural y sus participantes los aceptan. PERMA podría probarse como medio de pago propio del proyecto, pero el estudio no demuestra que sea necesaria ni mejor. En todos los casos, el método de pago no establece autoridad, permiso, propiedad, custodia ni derechos de autor sobre una obra cultural.

RUC-D destaca preguntas sin resolver sobre provisión y distribución. Instituciones, artistas, titulares de derechos y comunidades podrían aportar registros, contexto y trabajo de revisión mientras un operador captura comisiones, datos, visibilidad o control. No se han medido acuerdos entre participantes, costos operativos, volumen de transacciones, base de regalías, demanda de pago ni justicia distributiva. Una recompensa en tokens podría incentivar actividad sin demostrar que un aporte sea útil, independiente o consentido. La infraestructura distribuida puede registrar operaciones, pero no determinar quién tenía derecho a hacerlas, corregir un registro cultural ni resolver una disputa.

### Límites y preguntas abiertas

PERMA es solo una prueba de concepto técnica del medio de pago de un marketplace cultural hipotético y sus regalías. El marketplace no está construido. No se han demostrado pagos por una obra cultural, cálculos de regalías, demanda de usuarios, valor económico, adecuación cultural ni una asignación justa. La operación en testnet no establece derechos jurídicos, no transfiere derechos ni convierte el token en requisito de acceso.

Un diseño futuro tendría que responder quién participaría y gobernaría los cambios; cómo se autorizarían y calcularían los permisos y obligaciones de regalías; cómo se gestionarían errores, disputas, reembolsos, vencimientos y revocaciones; qué costos evitaría un token frente a ninguna moneda, USDC o XLM; cómo se repartirían costos e ingresos entre quienes aportan y quienes operan; y cómo se protegerían el acceso sin cripto, la privacidad, la exportación y la salida. Estas preguntas requieren participantes reales, evidencia y revisión jurídica antes de proponer producción.

No hay precio, venta, pool, oferta, liquidez ni promesa de valor. No se emitirá nada en mainnet ni se venderá sin revisión de un abogado. La testnet puede reiniciarse y sus saldos no son dinero. La comprobación independiente descrita aquí informa una comparación con Horizon a partir del manifiesto fechado del proyecto; este repositorio, que solo contiene documentación, no incluye el código del verificador, así que no puedes volver a ejecutarlo desde aquí. Consulta [Evidencia](./EVIDENCE.md) para ver todos los hashes del manifiesto y cómo revisar cada transacción directamente.

### Diseño de PERMA en testnet

PERMA es un **activo clásico de Stellar** ya emitido en Stellar testnet, con una oferta fija de **100.000.000 PERMA**. La cuenta emisora quedó bloqueada tras la emisión: su peso maestro y sus umbrales son cero y no tiene firmantes adicionales. Las banderas de autorización requerida, autorización revocable, autorización inmutable y clawback están desactivadas. Un verificador independiente contrastó el estado del activo con Horizon e informó como verificados la oferta, la configuración de la emisora, los saldos y 36 balances reclamables de vesting. La operación informada comprende 63 transacciones con hash en los ledgers 5010900 a 5010953; el manifiesto también registra un intento fallido de reclamo anticipado. Los hashes y enlaces están en [Evidencia](./EVIDENCE.md).

Los parámetros de asignación de esta corrida de prueba son: tesorería 20 %, comunidad cultural 40 %, reserva de liquidez 10 % sin pool ni ofertas, contingencia 5 %, asesores 10 % y fundador 15 %. La asignación del fundador usa un cliff de 12 meses y 36 balances reclamables mensuales. Estos porcentajes y montos son parámetros experimentales de esta corrida de prueba, no un reparto adoptado, derecho adquirido ni promesa. La reserva de liquidez se mantiene reservada y no tiene pool ni ofertas. El manifiesto de transacciones es el registro de esta corrida en testnet; el estado de testnet puede reiniciarse.

Esta prueba de concepto examina un posible medio de pago para un marketplace cultural y regalías que todavía no existen. La capa del pago se considera solo después del análisis RUC-D anterior. El activo y su asignación no conceden derechos sobre una obra, su imagen, custodia, acceso o uso.
