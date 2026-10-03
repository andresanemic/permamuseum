# Evidence

## English

The source material records a local run dated 2026-10-03. The filenames below refer to that excluded source material; this public repository summarizes those reports but does not include their raw files or the test code. The run is not evidence of an operation on Stellar. No blockchain was activated and the run states that it used no network.

### What the recorded checks cover

| Evidence | What it covers | Recorded result |
| --- | --- | --- |
| `suite-hoy.txt` and `2026-10-03-verde.txt` | The recorded post-implementation suite, with checks grouped below. | 37 tests; 37 passed; 0 failed; 0 skipped. |
| `2026-10-03-rojo.txt` | The pre-implementation RED phase for 25 adversarial cases. | Each case failed for its expected reason; the three controls were green. |
| `2026-10-03-recorrido.txt` | A local synthetic walkthrough using kernel receipts. | Seven accepted steps and one rejection for `evidencia-vacia`; no network or external anchor. |
| `2026-10-03-mutaciones.txt` | Six isolated rule mutations and focused checks. | All six mutations were detected; original source was restored. |
| `docs/SEGURIDAD.md` in the source material | Local security review of output paths, verification claims, terminal control characters, and known limitations. | Reports four security tests passing in the corrected state; it is not an independent audit. |

The suite names its kernel-provenance checks `el kit instalado declara los cinco módulos del núcleo`, `el núcleo consumido coincide con la tabla de digest del kit`, `las copias presentes en los hosts coinciden byte a byte`, and `los módulos instalados declaran el mismo commit`. Its walkthrough check is `el recorrido real obtiene aceptaciones verificables y conserva el rechazo`.

The 25 adversarial checks are named `01 museo sin verificar no publica`, `02 declarante y verificador no pueden ser la misma parte`, `03 evidencia vacía no se revisa`, `04 referencias repetidas no son fuentes independientes`, `05 procedencias incompatibles de una obra chocan`, `06 regalía superior al techo autorizado se rechaza`, `07 permiso vencido no autoriza uso`, `08 permiso revocado no autoriza uso posterior`, `09 recibo repetido no reactiva operación revocada`, `10 dos museos no reclaman procedencia exclusiva de la misma obra`, `11 identidad de cobro duplicada no duplica regalía`, `12 indicios documentados de saqueo bloquean la venta`, `13 texto libre verificado no es dictamen estructurado`, `14 administrador único no acredita verificación`, `15 contradicción en evidencia deja la afirmación impugnada`, `16 autoridad vencida bloquea publicación`, `17 principal no escribe en espacio ajeno`, `18 permiso exige obra identificada y derechos declarados`, `19 uso fuera del alcance concedido se rechaza`, `20 un token no transfiere permiso sin cláusula expresa`, `21 salto de custodia sin actor o evidencia queda incompleto`, `22 dictamen de evidencia anterior no verifica la versión actual`, `23 ejecutor no verifica su propio efecto`, `24 permiso revocado requiere nueva concesión para reactivarse`, and `25 rechazo identifica resolver y dato faltante`.

The three control checks are `CONTROL: un dictamen textual no publica sin recibo verificable del núcleo`, `CONTROL: permiso acotado válido cubre el uso pedido`, and `CONTROL: dictamen válido tiene mandato, evidencia y verificador independiente`. Two additional verification checks are `una afirmación textual o booleana no basta para marcar publicación verificada` and `un objeto de dictamen escrito en datos sin recibo del núcleo no verifica`. The suite also names `la resolución de rutas rechaza ubicaciones fuera del repositorio` and `la salida escapa controles terminales y saltos de línea del nombre del museo`.

The captured RED report lists expected failures before implementation; it does not establish that these cases occur in real institutions.

### Kernel consumption and the current report

Permamuseum does not pin and install a private kernel copy in the way described for the other nine projects. Its code and checks discover the installed Vespi kernel through paths, modules, and a digest table, following the approach named in the project notes for Marea. The source phase report says the active OpenCode copy was readable, four kernel-provenance checks covered its five modules, and the walkthrough consumed real kernel receipts without modifying the installed copy. The test names in `suite-hoy.txt` include those provenance checks.

The figures above come from the captured project report in `_fuentes/suite-hoy.txt`, with the supporting dated RED, GREEN, walkthrough, and mutation records. This documentation-only repository omits source and test files, so its `npm test` invocation finds zero tests and cannot independently reproduce the captured run. When code is opened, rerun it from the code root and compare its output with the published evidence. The testnet token phase remains pending its stated parameters; this evidence contains no testnet transaction.

## Español

El material fuente registra una corrida local fechada el 2026-10-03. Los nombres de archivo de abajo corresponden a ese material excluido; este repositorio público resume esos informes, pero no incluye sus archivos originales ni el código de las pruebas. La corrida no es evidencia de una operación en Stellar. No se activó blockchain y el registro indica que no hubo red.

### Qué cubren las comprobaciones registradas

| Evidencia | Qué cubre | Resultado registrado |
| --- | --- | --- |
| `suite-hoy.txt` y `2026-10-03-verde.txt` | La suite registrada posterior a la implementación, con comprobaciones con nombre agrupadas abajo. | 37 pruebas; 37 aprobadas; 0 fallidas; 0 omitidas. |
| `2026-10-03-rojo.txt` | Fase RED previa a la implementación para 25 casos adversariales. | Cada caso falló por el motivo esperado; los tres controles estaban verdes. |
| `2026-10-03-recorrido.txt` | Recorrido local sintético con recibos del kernel. | Siete pasos aceptados y un rechazo por `evidencia-vacia`; sin red ni anclaje externo. |
| `2026-10-03-mutaciones.txt` | Seis mutaciones aisladas de reglas y comprobaciones focalizadas. | Se detectaron las seis mutaciones; se restauró el código original. |
| `docs/SEGURIDAD.md` del material fuente | Revisión local de seguridad de rutas de salida, afirmaciones de verificación, controles de terminal y límites conocidos. | Informa cuatro pruebas de seguridad aprobadas en el estado corregido; no es una auditoría independiente. |

Las comprobaciones de procedencia del kernel se llaman `el kit instalado declara los cinco módulos del núcleo`, `el núcleo consumido coincide con la tabla de digest del kit`, `las copias presentes en los hosts coinciden byte a byte` y `los módulos instalados declaran el mismo commit`. La comprobación del recorrido se llama `el recorrido real obtiene aceptaciones verificables y conserva el rechazo`.

Los 25 casos adversariales se llaman `01 museo sin verificar no publica`, `02 declarante y verificador no pueden ser la misma parte`, `03 evidencia vacía no se revisa`, `04 referencias repetidas no son fuentes independientes`, `05 procedencias incompatibles de una obra chocan`, `06 regalía superior al techo autorizado se rechaza`, `07 permiso vencido no autoriza uso`, `08 permiso revocado no autoriza uso posterior`, `09 recibo repetido no reactiva operación revocada`, `10 dos museos no reclaman procedencia exclusiva de la misma obra`, `11 identidad de cobro duplicada no duplica regalía`, `12 indicios documentados de saqueo bloquean la venta`, `13 texto libre verificado no es dictamen estructurado`, `14 administrador único no acredita verificación`, `15 contradicción en evidencia deja la afirmación impugnada`, `16 autoridad vencida bloquea publicación`, `17 principal no escribe en espacio ajeno`, `18 permiso exige obra identificada y derechos declarados`, `19 uso fuera del alcance concedido se rechaza`, `20 un token no transfiere permiso sin cláusula expresa`, `21 salto de custodia sin actor o evidencia queda incompleto`, `22 dictamen de evidencia anterior no verifica la versión actual`, `23 ejecutor no verifica su propio efecto`, `24 permiso revocado requiere nueva concesión para reactivarse` y `25 rechazo identifica resolver y dato faltante`.

Los tres controles se llaman `CONTROL: un dictamen textual no publica sin recibo verificable del núcleo`, `CONTROL: permiso acotado válido cubre el uso pedido` y `CONTROL: dictamen válido tiene mandato, evidencia y verificador independiente`. Hay además dos comprobaciones de verificación: `una afirmación textual o booleana no basta para marcar publicación verificada` y `un objeto de dictamen escrito en datos sin recibo del núcleo no verifica`. La suite también nombra `la resolución de rutas rechaza ubicaciones fuera del repositorio` y `la salida escapa controles terminales y saltos de línea del nombre del museo`.

El informe RED capturado enumera fallos esperados antes de implementar; no demuestra que estos casos ocurran en instituciones reales.

### Consumo del kernel y el informe actual

Permamuseum no fija ni instala una copia privada del kernel como se describe para los otros nueve proyectos. Su código y sus comprobaciones descubren el kernel instalado de Vespi mediante rutas, módulos y una tabla de digest, siguiendo el enfoque que las notas del proyecto atribuyen a Marea. El informe de fases dice que la copia activa de OpenCode era legible, que cuatro comprobaciones de procedencia cubrían sus cinco módulos y que el recorrido consumió recibos reales del kernel sin modificar la copia instalada. Los nombres de las pruebas en `suite-hoy.txt` incluyen esas comprobaciones de procedencia.

Los resultados provienen del informe capturado del proyecto en `_fuentes/suite-hoy.txt`, junto con los registros fechados RED, GREEN, recorrido y mutaciones. Este repositorio de documentación no incluye archivos de código ni pruebas; por eso, su ejecución de `npm test` aquí encuentra cero pruebas y no reproduce de forma independiente la corrida capturada. Cuando se abra el código, vuelve a ejecutarlo desde la raíz del código y compara el resultado con la evidencia publicada. La fase del token en testnet sigue pendiente de los parámetros indicados; esta evidencia no contiene transacciones de testnet.