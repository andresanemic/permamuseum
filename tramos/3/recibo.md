# Recibo del tramo 3: PERMA emitida en testnet (2026-10-03)

Escrito por el coordinador. Decisión de Andrés Peña (dueño) que lo origina: la moneda de Permamuseum se crea en testnet si es coherente, con asignación de fundador solo para él, como prueba de concepto del medio de pago del marketplace cultural (también se podría pagar con USDC o XLM). **Los porcentajes de esta corrida los propuso el coordinador, heredados del patrón de TEMIS, no los fijó Andrés:** son parámetros de prueba y cualquier otro valor, o cualquier uso fuera de testnet, exige su decisión.

## Qué se hizo

Activo clásico `PERMA` en la testnet de Stellar, emisor `GCVQLJHU46LUAUBILZCDLYVKTCUY6NC3RW7KWFBFAVKBRUHNS3YMM6QE`. Oferta fija de 100.000.000,0000000 PERMA, emitida una vez a una cuenta distribuidora y repartida por cubetas en cuentas distintas, con la emisora bloqueada al final (peso maestro y umbrales en cero, sin firmantes), sin banderas de autorización ni clawback. Cubetas: tesorería 20 %, comunidad cultural 40 %, reserva de liquidez 10 % (reservada, sin pool ni ofertas), contingencia 5 %, asesores 10 % y fundador 15 % para la cuenta de Andrés, con vesting de cliff de 12 meses y 36 tramos mensuales como balances reclamables con respaldo de la tesorería a 180 días. Una prueba de vesting con desbloqueo a los pocos minutos: el reclamo temprano falló en la red y el posterior funcionó (detalle en `token.json`).

## Evidencia

| Prueba | Resultado |
|---|---|
| Emisión completa en testnet | 63 transacciones con hash en el manifiesto `tramos/3/token.json`, ledgers 5010900 a 5010953 |
| Verificador independiente (`node scripts/token-verify.mjs`, solo lee Horizon) | verificado: emisora bloqueada, banderas en cero, oferta 100.000.000, saldos por cubeta, 36 balances de vesting, la emisora sin saldo propio |
| Suite del proyecto | 52 pruebas, 52 aprobadas, 0 fallidas |

Defectos que solo aparecieron al ejecutarlo en vivo, y ya corregidos: el adaptador real usaba `config.code` sin tenerla declarada (la red simulada no lo veía) y los memos heredaban el prefijo `temis:` en lugar de `perma:`; hay una prueba que los vigila.

## Lo que no dice este recibo

No hay precio, liquidez, venta ni mercado. No se creó un pool ni una oferta. No se publicó ningún `stellar.toml` (solo existe un borrador). La testnet se reinicia unas veces al año: este manifiesto y estos hashes son el registro duradero y el script permite volver a emitir. Nada de esto se ejecuta en mainnet ni abre una venta pública; eso exige abogado y la palabra de Andrés. Las llaves de las cuentas de prueba viven fuera del repositorio, en la carpeta privada del usuario, y no se publican.
