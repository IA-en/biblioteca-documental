# **4.** Playground del Lenguaje SV {#playground-del-lenguaje-sv}

**Interfaz y alcance de la comprobación · 19 de octubre de 2026.**

El [Playground del SV](https://lenguaje-sv.itvia.online/) permite escribir o cargar un programa SVP, comprobar su admisión y consultar su representación estructurada desde el navegador. Es una interfaz del Lenguaje de Computación SV. No es un servicio de consulta a modelos de IA ni un entorno de examen de candidatos.

## **4.1.** Primer recorrido {#primer-recorrido}

El recorrido comprende la elección explícita del perfil, la entrada del archivo SVP, su comprobación y la consulta de la representación obtenida. El perfil del programa y el idioma de la interfaz son decisiones distintas. Las versiones declaradas permiten interpretar el resultado y reproducirlo.

El [primer programa del manual para desarrolladores](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/main/docs/manual_svp/01-primer-programa.md) explica los pasos de uso y conduce a los ejercicios.

La distribución descrita en esta guía utiliza gramática 0.2, representación intermedia 0.3 y proyección 0.1.0. La cabecera identifica las versiones de la distribución abierta. Conserve esa identificación junto con el archivo cuando necesite reproducir una comprobación.

## **4.2.** Qué significa «Admitido» {#qué-significa-admitido}

La admisión indica que el programa supera las comprobaciones implementadas por esa versión. El resultado estructurado conserva declaraciones, referencias y operaciones. Por ejemplo, que aparezca una operación de evaluación no demuestra por sí solo que se haya calculado y recibido su resultado decisional.

**Texto SVP → comprobación del lenguaje → representación estructurada.** La ejecución de una operación, la recepción de su resultado y la autorización de un uso institucional son comprobaciones adicionales. La interfaz no convierte la admisión sintáctica y estructural en aptitud de un modelo de IA ni en autorización de producción.

## **4.3.** Ensamblar unidades {#ensamblar-unidades}

El apartado de ensamblaje permite presentar dos unidades con perfiles de origen independientes. El lenguaje transforma cada unidad y comprueba conjuntamente sus declaraciones y referencias. Una referencia entre unidades debe quedar resuelta y los identificadores deben respetar las reglas del conjunto.

El ensamblaje no equivale a disponer de un sistema general de importación de bibliotecas o de macros. Sus límites se explican en [Construcciones del lenguaje y componentes propios](construcciones-y-componentes.md).

## **4.4.** Archivo, navegador y límites {#archivo-navegador-y-límites}

La comprobación del programa se realiza mediante el componente Rust compilado a WebAssembly que recibe el navegador. JavaScript proporciona la interfaz y el transporte de datos hacia sus funciones expuestas. La página descarga los recursos necesarios del sitio; ello no concede a un programa SVP acceso arbitrario a la red, al sistema de archivos o a servicios de IA.

La identificación del componente, su tamaño y sus exportaciones obligatorias se verifican antes de utilizarlo. Esto permite comprobar su correspondencia con la distribución, pero no sustituye la revisión de su código ni acredita capacidades ausentes.

Para practicar, utilice los ejemplos públicos. La admisión de un archivo no autoriza a introducir datos personales o documentación reservada. Los diagnósticos y las métricas de programación describen la comprobación del lenguaje; no son medidas del razonamiento de una IA externa.

## **4.5.** Ejemplos y referencias {#ejemplos-y-referencias}

La [guía de ejemplos SVP](ejemplos-svp.md) distingue los casos que deben admitirse de los preparados para comprobar un rechazo. La futura [programación de aplicaciones con la DSL](programacion-dsl.md) tiene un alcance diferente.

- [Playground público](https://lenguaje-sv.itvia.online/).
- [Identificación de la distribución publicada](https://lenguaje-sv.itvia.online/build-info.json).
- [Colección de ejemplos que sirve la interfaz](https://lenguaje-sv.itvia.online/examples.json).
- [Herramientas de desarrollo y comprobación](herramientas-desarrollo-comprobacion.md).

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
