# Definiciones y relaciones

La [Enciclopedia temática del Sistema Vectorial SV](https://documentos-sv.itvia.online/enciclopedia/index.html) reúne las definiciones comunes, sus fuentes y ejemplos. Este capítulo conserva las precisiones propias de su objeto; las referencias formales mantienen su autoridad.

## Dominio y Universo

El dominio organiza un ámbito de conocimiento. Su denominación no equivale a la existencia de un agente ni demuestra que todo ese ámbito esté formalizado. Para conocer qué puede evaluarse es necesario identificar cada Universo, su finalidad, sus fuentes y sus límites.

En el [marco de inmunología](https://github.com/juantoniolloretegea/SVperitus-dataset/blob/9939d600b3c3ffc3f4237f229ca0670de8f3693d/dominios/inmunologia/marco-tecnico-de-universos-subdominios-y-modulos/README.md), un **Universo** delimita una operación clínica mediante finalidad prevista, población, tiempo de referencia, exclusiones y producto de salida. Es la unidad de evaluación y autorización de ese marco.

El primer Universo de [ciberseguridad](https://github.com/juantoniolloretegea/SVperitus-dataset/blob/bbac1b44b1d3b845305e9cde492a08221206d631/dominios/ciberseguridad-inteligente/dominio-04-09-26/universos/OP-CYB-001/ACTA_Y_MANIFIESTO_CONTINUIDAD_OP_CYB_001_v0.4.md) delimita otro objeto: la evidencia y legitimidad de corregir una vulnerabilidad mediante actualización. Su contexto procede de su propia constitución. No se le trasladan poblaciones, reglas clínicas, tamaños ni resultados de inmunología.

Cada dominio necesita, por tanto, una definición pertinente para sus propias operaciones. Una carpeta temática o una colección bibliográfica no constituyen por sí solas un Universo.

## Subdominio y módulo

El marco de inmunología distingue el **subdominio**, que agrupa Universos relacionados, del **módulo**, que representa, transforma o presenta información. Ninguno recibe autoridad clínica por su mera pertenencia. Esta distinción permite reconocer la agrupación documental y el componente técnico sin confundirlos con una operación autorizada.

## Alcance de un Agente Especializado

El alcance de referencia de un Agente Especializado es el dominio completo que se le asigne, salvo que su definición establezca expresamente un subdominio, un conjunto identificado de Universos u otra división constituida. Puede tener más de un dominio asignado. La ausencia de una definición recibida no concede alcance completo por defecto: deben identificarse el ámbito y sus límites.

La asignación delimita el conocimiento pertinente; no obliga a recorrer íntegramente cada dominio en toda consulta. El recorrido concreto depende del objeto de la consulta y de las relaciones y obligaciones constituidas. El [alcance documental del agente](https://github.com/juantoniolloretegea/SVperitus-dataset/blob/ccf7597e7f9de65fef52ed616d1dab8d2a3c668d/agentes/ALCANCE-Y-ACCESO.md) distingue esta referencia de las operaciones efectivamente constituidas y de sus autorizaciones.

El [Estatuto del universo de sucesos](https://www.itvia.online/pub/estatuto-del-universo-de-sucesos-admisibilidad-suficiente-y-composicion-tipada-de-agentes-especializados-en-el-sistema-vectorial-sv/release/2) y la [Instrucción Técnica de Implementación (ITI)](https://www.itvia.online/pub/instruccion-tecnica-de-implementacion-especifica-de-agente-especializado-en-el-sistema-vectorial-sv-iti-v1/release/2) exigen concretar fase, versión, dominio y horizonte de actuación. La referencia al dominio completo no sustituye esos requisitos ni declara recibidas todas sus operaciones.

La delimitación parcial no autoriza a omitir conocimiento necesario. Si una ruta crítica exige un Universo situado fuera del alcance autorizado del agente, se declara la insuficiencia y se aplica la interrupción o revisión prevista. La asignación no se amplía por iniciativa del modelo ni se sustituye la dependencia por información semejante. Compartir dominios tampoco transmite permisos, documentos ni conclusiones entre consultas.

El agente se construye íntegramente mediante el lenguaje específico de dominio (DSL) del Lenguaje de Computación del SV. Su definición identifica alcance, versiones, fuentes, contratos y condiciones de ejecución; queda sometida a la semántica y a la representación intermedia (IR) regidas por el núcleo. La realización interna del modelo de inteligencia artificial (IA) conserva su identidad tecnológica y no adquiere autoridad para modificar esas reglas. La construcción de un agente no permite introducir excepciones tácitas a las invariantes matemáticas o semánticas del SV.

En el funcionamiento determinista exigido para producción, cada consulta debe relacionar su recorrido acreditado con uno o varios polígonos del SV, según las células constituidas que correspondan a su naturaleza. Cada polígono conserva identidad celular, dimensión, parámetros, fuentes y evidencia; la multiplicidad de dominios no fija por sí sola el número de figuras. Si faltan las definiciones o las comprobaciones necesarias, se informa de esa carencia sin producir una figura decisional aparente.

Los primeros Universos documentados de Inmunología y Ciberseguridad constituyen las referencias delimitadas de esta fase. No acreditan que las restantes células, rutas o relaciones de los agentes estén definidas o ejecutadas. Las [condiciones de autorización y seudo-producción](https://documentos-sv.itvia.online/evaluacion/validacion-autorizacion-modelos/autoridad.html#agentes-especializados-y-frontera) distinguen estas exigencias de una demostración con fuentes abiertas y respuestas no deterministas.

La prohibición de acceso directo y autoridad sobre el núcleo alcanza a todos los agentes y a cualquier IA que actúe como Perfil defensor (PD). Su aplicación a la protección de la plataforma se desarrolla en la [especificación del Agente Especializado en Ciberseguridad Inteligente](https://github.com/juantoniolloretegea/SVperitus-dataset/blob/072b101459a94b1df139ce451dd116615847f679/agentes/ciberseguridad-inteligente/PROTECCION-DESDE-EL-ARRANQUE.md); los demás agentes conservan sus propias funciones y límites.

## Arquitectura común de los agentes {#arquitectura-agentes}

Los pilares del SV fijan el fundamento. Las publicaciones exponen conceptos, razones y arquitectura; el Gestor y su realización computacional los materializan y aportan las pruebas de lo construido. Cada plano conserva su función: una idea documentada no acredita una función implementada, y una decisión técnica no modifica los pilares. Las diferencias deben identificarse como realización pendiente, concreción técnica compatible o contradicción que exige corrección.

Los [Fundamentos, exigencias y arquitectura general](https://www.itvia.online/pub/fundamentos-exigencias-y-arquitectura-general-de-los-agentes-especializados-en-el-sistema-vectorial-sv-formulacion-transversal-desde-el-caso-director-del-agente-especializado-en-inmunologia/release/1), junto con el Estatuto, la Instrucción Técnica de Implementación (ITI) y la Carta Magna, fijan funciones complementarias. Los Fundamentos ordenan la arquitectura transversal; no constituyen por sí solos cada Universo ni sustituyen su autorización.

La arquitectura distingue tres planos: el interno, que calcula y presenta la estructura del caso conforme a sus reglas; el externo, que relaciona al experto, las fuentes y la asistencia de inteligencia artificial (IA); y el acoplamiento custodial, que gobierna la posible incorporación de material externo. Leer una fuente no le concede autoridad para cambiar el núcleo ni los parámetros del caso.

El experto debe poder ver la estructura, conocer las indeterminaciones y su fundamento, y conservar una corrección competente como nuevo suceso. La [relación del agente con el Gestor](https://github.com/juantoniolloretegea/SVperitus-dataset/blob/main/agentes/ALCANCE-Y-ACCESO.md#relación-con-el-gestor) desarrolla qué debe hacerse visible. Los controles documentados y los controles efectivamente recibidos se distinguen expresamente. El [régimen de incorporación extrínseca](metodologia.md#incorporacion-extrinseca) mantiene sus propias compuertas y no se confunde con la evaluación de un modelo.

## Cuenta, dominio y uso de modelos

El ámbito de conocimiento del agente, las facultades de la persona y la autorización de uso de un modelo son relaciones diferentes. La cuenta identifica a la persona; sus funciones y permisos delimitan recursos, operaciones, dominio y vigencia. La autorización del modelo identifica además configuración, contenido permitido y condiciones de comunicación. Ninguna de estas relaciones se deduce de un icono o de la entrada a una página.

El Gestor debe conservar una identidad común y comprobar cada operación mediante sus registros vigentes. La administración del sistema no sustituye la validación profesional ni la recepción de un Universo. La [relación entre acceso y autorizaciones](https://github.com/juantoniolloretegea/SVperitus-dataset/blob/ccf7597e7f9de65fef52ed616d1dab8d2a3c668d/agentes/ALCANCE-Y-ACCESO.md#relación-con-el-gestor) desarrolla estas condiciones y sus comprobaciones sin crear otra cuenta o un registro paralelo.

## Qué identifica un parámetro

Un parámetro es una unidad de significado delimitada por su definición, dominio, función y alcance. La analogía con un átomo expresa su separación respecto de otras unidades, pero no demuestra atomicidad ni determina automáticamente una posición celular.

El **parámetro de conocimiento** conserva una unidad de conceptos o datos generales dentro de un Universo. No tiene por sí mismo un valor ternario del caso. El **parámetro singular de decisión** formula una cuestión que recibe 0, 1 o U conforme a su contrato, contexto y evidencia. Dos casos que utilizan una misma definición conservan valoraciones independientes.

Se propone, además, valorar mediante la terna la **pertenencia de un parámetro de conocimiento a una ruta determinada**. Ese valor correspondería a la relación, no a la verdad del conocimiento ni al resultado decisional. La propuesta permanece en evaluación. El [capítulo de parámetros y rutas](parametros-rutas.md) explica la diferencia mediante ejemplos y diagramas.

Todo valor debe leerse junto a la pregunta evaluada y su convención. No basta interpretar un número por costumbre ni convertir información ausente en una conclusión negativa. Los inventarios históricos se conservan con sus contratos; esta distinción no los reclasifica automáticamente.

## Propiedad de los parámetros

Cada parámetro tiene un único Universo propietario y puede compartirse mediante relaciones explícitas con otros Universos. La referencia conserva identidad y versión; no transmite permisos ni valores de un caso. Cambiar el propietario exige designar otro sin dejar el parámetro huérfano. Un Universo constituido mantiene parámetros asignados; un borrador incompleto no acredita esa constitución.

La propiedad de los documentos y la de los parámetros son relaciones distintas. Un parámetro puede apoyarse en varias fuentes y una fuente sustentar varias unidades de conocimiento, siempre con selecciones y fundamento identificados.

## Versiones y reutilización

La reutilización requiere una referencia exacta, justificación de aplicabilidad y evidencia propia en el nuevo contexto. La semejanza temática no transmite automáticamente reglas, configuraciones, conclusiones, permisos ni resultados de pruebas.

Los inventarios de este libro conservan la edición de sus fuentes. Una modificación posterior exige revisar la referencia y explicar su alcance; no cambia retrospectivamente una evaluación anterior. No se trasladan automáticamente las revisiones futuras de una fuente a esta edición.

## Estados que deben distinguirse

| Cuestión | Qué permite afirmar |
| --- | --- |
| Definición documentada | Existe una formulación identificada que puede examinarse. |
| Comprobación acreditada | Hay evidencia para una condición y versión determinadas. |
| Exigencia pendiente | La condición aplicable todavía no se ha demostrado. |
| Uso prohibido | El uso indicado no está permitido en el estado documentado. |
| Fallo técnico | No puede obtenerse una ejecución válida; no debe disfrazarse de conclusión profesional. |

Esta tabla explica distinciones de lectura; no sustituye los estados formales propios de cada Universo ni crea una clasificación común nueva. La ausencia de evidencia nunca acredita cumplimiento.

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
