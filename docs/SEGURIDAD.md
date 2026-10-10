# Revisión de seguridad del recorrido local

**Fecha:** 2026-10-03  
**Alcance:** `src/permamuseum.js`, `src/recorrido.js`, `src/rutas.js`, `src/cli.js` y el uso del kernel instalado. La revisión es estática y con pruebas locales; no es una auditoría independiente ni cubre servicios todavía no implementados.

## Hallazgos confirmados y correcciones

### Ruta de salida fuera del proyecto

**Riesgo:** `src/recorrido.js` aceptaba rutas arbitrarias desde argumentos y `Permamuseum` abría `registro.jsonl` con truncado. Un argumento de salida con `..` podía escribir fuera del directorio del proyecto; un enlace simbólico podía redirigir una ruta aparentemente local.

**Prueba roja:** `test/seguridad.test.js`, «la resolución de rutas rechaza ubicaciones fuera del repositorio», falló con `Missing expected exception` al resolver una ruta hermana del proyecto. La prueba ejercita la resolución sin crear archivos fuera del repositorio.

**Corrección:** `src/rutas.js` limita rutas a la raíz real del repositorio, comprueba los componentes existentes y rechaza enlaces simbólicos. Tanto la lectura del JSON como el directorio de registro pasan por esa función; el constructor de `Permamuseum` aplica la misma defensa.

### Booleano o texto libre usado como verificación

**Riesgo:** `control-publicacion` aceptaba `verificada: true` con un permiso vigente. Al exigir campos estructurados todavía aceptaba un objeto escrito directamente en los datos, sin recibo de una operación del núcleo.

**Pruebas rojas:** «una afirmación textual o booleana no basta para marcar publicación verificada» obtuvo estado `aceptada` con `nota: "verificado por la plataforma"`; luego «un objeto de dictamen escrito en datos sin recibo del núcleo no verifica» también obtuvo `aceptada` aunque solo contenía campos de texto.

**Corrección:** publicar exige ahora un objeto de dictamen con declarante y verificador distintos, afirmación, mandato, referencias de evidencia, método, reloj, cobertura y límites, además de un recibo cuya integridad se comprueba con el verificador del núcleo. El recibo debe corresponder a `permamuseum:emitir-dictamen`, declarar estado `verified` y contener la evidencia de esa operación. El recorrido obtiene el recibo en tiempo de ejecución y lo pasa al control local.

**Límite:** esos campos siguen siendo declaraciones sintéticas de entrada. Su forma no autentica la identidad, el mandato, el contenido externo ni la autoridad jurídica del verificador. «Recibo verificable» significa que el recibo del kernel pasa su comprobación de integridad; no acredita autenticidad de la obra, titularidad ni verdad histórica. No se debe presentar el estado local como verificación cultural real.

### Inyección de controles en la salida de terminal

**Riesgo:** un nombre de museo con salto de línea o secuencia ANSI podía insertar líneas falsas o alterar la presentación de la terminal.

**Prueba roja:** al desactivar temporalmente el escape, `test/seguridad.test.js`, «la salida escapa controles terminales y saltos de línea del nombre del museo», falló al encontrar `ESC[31m` sin filtrar.

**Corrección:** `src/recorrido.js` representa caracteres de control como secuencias visibles `\\uXXXX` antes de imprimir. El archivo JSONL continúa serializado como JSON, una entrada por línea.

## Secretos y código ejecutable

La revisión no encontró claves secretas Stellar, credenciales ni llamadas a `eval`/`Function` en el código del recorrido. Los archivos de entrada se parsean como JSON y no se ejecutan como JavaScript. Las claves de testnet, si se habilita la parte C, pertenecen exclusivamente a `C:/Users/andre/.permamuseum-testnet`; no deben copiarse al repositorio, recibos ni salida de consola. Este informe no afirma que un escaneo exhaustivo de todo el sistema operativo haya encontrado secretos.

## Pendiente y límites

- El recorrido no autentica principales institucionales, artistas, titulares, verificadores ni sus mandatos. Esa capacidad exige un modelo de identidad y evidencia que todavía no existe.
- El límite de rutas protege el directorio local ante rutas relativas, absolutas y enlaces simbólicos, pero no pretende ser una defensa frente a modificación concurrente maliciosa del sistema de archivos durante una ejecución.
- No hay límite de tamaño del JSON de entrada ni un esquema exhaustivo de todos sus campos; datos locales no confiables pueden consumir recursos o producir resultados semánticos inválidos.
- Los recibos no resuelven disputas, no conceden derechos y no prueban autenticidad, procedencia jurídica, titularidad, conservación o cumplimiento legal.
- No se revisó una integración de red, marketplace, wallet ni token en este tramo de seguridad. PERMA y cualquier emisión siguen condicionados a cerrar los parámetros económicos de la prueba.

## Resultado de comprobación

Las cuatro pruebas de seguridad pasan en el estado corregido. La suite completa pasa con 37 pruebas, 0 fallidas y 0 omitidas. La revisión no habilita mainnet, dinero real, venta ni una afirmación de verificación cultural.
