# Explorador Tensorial del SV

**Componente subordinado al Selector · 15 de octubre de 2026.**

El Explorador Tensorial del SV observa los recursos que el entorno de ejecución expone al proceso. Identifica los dispositivos, sus interfaces y la información disponible sobre su estado. Proporciona esos datos al [Selector del Árbitro - Director CPU/GPU/TPU/NPU](selector-arbitro-director.md), que los relaciona con capacidades comprobadas para la operación solicitada.

La observación, la selección y el gobierno de la ejecución tienen funciones distintas:

| Componente | Función |
| --- | --- |
| Explorador Tensorial del SV | Consultar e identificar recursos; conservar procedencia, vigencia e incidencias de la observación. |
| Selector | Elegir un destino admisible para la carga, conforme a la política aplicable y a las capacidades contrastadas. |
| Árbitro - Director | Gobernar la solicitud, sus permisos, la ejecución y la recepción del resultado. |
| Adaptador de ejecución | Realizar la operación y aportar las medidas que permitan comprobar el dispositivo utilizado. |

## Identificación y capacidad

Encontrar un dispositivo no demuestra que pueda ejecutar un modelo. Es necesario comprobar que el adaptador admite la operación exacta, que existe memoria utilizable y que la configuración sigue disponible. Una GPU integrada y una GPU dedicada pueden exponer condiciones de memoria diferentes; una denominación comercial no resuelve esa diferencia.

Las consultas del sistema operativo, NVML y PJRT tienen alcances distintos. El sistema puede identificar un acelerador aunque su interfaz de cálculo no esté accesible. A su vez, una consulta fallida no demuestra ausencia de hardware. Un dispositivo gráfico virtual tampoco acredita la disponibilidad de la GPU física del equipo anfitrión.

La realización inicial está escrita en Rust y consulta CPU, memoria y dispositivos declarados por Windows o por PCI en Linux. También incorpora la consulta de NVIDIA mediante NVML y la de dispositivos TPU mediante un cliente PJRT aportado por el adaptador. Los controladores y las bibliotecas de los fabricantes conservan su propia realización tecnológica.

## Vigencia y ejecución

El inventario pertenece a una sesión y conserva el instante de observación. Una capacidad comprobada debe corresponder a la identidad observada y a la carga exacta. La información incompleta, caducada o discordante impide habilitar el destino afectado.

Antes de invocar la operación, el enlace vuelve a consultar el entorno y contrasta la decisión. Un cambio que invalida el destino impide continuar por esa vía; no se sustituye silenciosamente por CPU. Esta reconsulta no reserva recursos ni reemplaza la observación de la ejecución efectiva.

La aplicación depende del control sobre la operación. Helsinki-NLP/opus-mt-en-es, como traductor del Gestor documental ejecutado bajo control propio, corresponde al nodo 1. Que su traducción acompañe una consulta a una IA externa no cambia esa modalidad. El hardware de inferencia de una API ajena queda fuera de la exploración si el proveedor no lo expone mediante una interfaz verificable.

## Comprobación de la realización inicial

En Windows se realizaron veinte exploraciones sobre una CPU Intel Core i7-1165G7 y un dispositivo gráfico Intel Iris Xe. La identificación coincidió con la consulta independiente del sistema en todas las observaciones. La mediana fue de 3,2645 ms; el máximo, correspondiente a la primera consulta, fue de 1.020,618 ms.

En Linux sobre WSL2 se realizaron otras veinte consultas, con coincidencia de la identificación de CPU respecto de su registro del sistema. La mediana fue de 0,6405 ms. Estos resultados describen la observación en dos entornos; no miden velocidad de inferencia ni cobertura universal de aceleradores.

Veintitrés casos artificiales del Explorador comprobaron selección y rechazos ante cambios de identidad, disponibilidad, memoria y vigencia. Se conservaron además los dieciocho casos del Selector. Las pruebas artificiales no se presentan como ejecuciones físicas de GPU, TPU o NPU.

La versión inicial no acredita todavía el recorrido completo del nuevo Explorador con una inferencia acelerada. La consulta TPU conserva identidad y acceso, pero no aporta memoria utilizable a la selección. La integración debe comprobar conjuntamente permiso, carga, decisión, dispositivo utilizado y resultado; las pruebas históricas de otros adaptadores no sustituyen ese contraste.

## Referencias

- [Realización Rust, resultados y límites del Explorador Tensorial del SV](https://github.com/juantoniolloretegea/SV-lenguaje-de-computacion/blob/7af1e1e73ba7c6c48d8b6be1613db52df2c49efa/docs/hardware-de-aceleracion-tensorial/selector-arbitro-director-cpu-gpu-tpu-npu/explorador-tensorial-sv/readme.md).
- [Criterios de selección y comprobación](selector-arbitro-director.md).
- [Características y configuraciones del hardware](hardware-aceleracion-tensorial.md).

---

© 2026 Juan Antonio Lloret Egea. Algunos derechos reservados. | ORCID: 0000-0002-6634-3351 | Instituto Tecnológico Virtual de la Inteligencia Artificial para el Español™ (ITVIA) | IA eñ™ – La Biblia de la IA™ | ISSN 2695-6411 | Licencia Creative Commons Atribución-NoComercial-SinDerivadas 4.0 Internacional (CC BY-NC-ND 4.0).
