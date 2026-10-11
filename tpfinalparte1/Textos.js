// Arreglos con textos oficina
//Oficina
let dialogoOficina = [ 
  "La lluvia golpea con fuerza la ventana de la oficina. Una noche tranquila que no va a durar mucho.",
  "Otro cigarrillo que se apaga... Esta ciudad nunca descansa, y yo tampoco.",
  "(Suena el teléfono sobre el escritorio)",
  "¿Márquez al habla? Decime que son buenas noticias...",
  "Una voz agitada al otro lado de la línea confirma lo peor: hallaron un cuerpo cerca del faro.",
  "Maldita sea, en unos momentos estaré allí.",
  "No terminaré hasta que este maldito esté tras las rejas..."
];
let nombresOficina = [
  "NARRADOR",
  "MÁRQUEZ",
  "NARRADOR",
  "MÁRQUEZ",
  "NARRADOR",
  "MÁRQUEZ",
  "MÁRQUEZ"
];

//Bodega
let dialogoBodega = [
  "(Márquez llega a la ubicación de la víctima)",
  "Llegué. El olor a humedad y metal oxidado es insoportable.",
  "Ahí está... Lucas. La silueta de tiza y los marcadores de evidencia cuentan una historia que debo descifrar.",
  "Muy bien, tendré que empezar a averiguar qué ocurrió aquí.",
  "Entre las pertenencias de Lucas encontré la dirección de su novio Eric y una tarjeta del club donde trabajaba como barman...",
  "Tengo poco tiempo. ¿Por dónde me conviene empezar la investigación?"
];
let nombresBodega = [
  "NARRADOR",
  "MÁRQUEZ",
  "MÁRQUEZ",
  "MÁRQUEZ",
  "MÁRQUEZ",
  "MÁRQUEZ"
];

//Departamento
let dialogoDepartamento = [
  "(Márquez golpea la puerta del departamento de Eric. Tardan en abrir.)",
  "Buenas noches, ¿en qué puedo ayudarlo?",
  "Soy Márquez, el detective a cargo de la investigación de la muerte de su pareja. Vengo a hacerle unas preguntas.",
  "Sí, adelante, pase por favor.",
  "(Márquez entra al departamento; es pequeño pero acogedor.)",
  "¿Podrías contarme un poco sobre Lucas antes de ir al trabajo?",
  "Sí. Yo estaba trabajando en la mesa del comedor acá en casa y él estaba a mi lado escribiendo en su diario íntimo...",
  "A las 11 PM él avisó que iba a trabajar, se preparó y se marchó. A las 2 AM le mandé un mensaje porque me estaba empezando a preocupar.",
  "Al no recibir respuesta alguna no dormí en toda la noche esperando a que regresara, hasta que me llamaron y me dijeron que lo hallaron muerto...",
  "Comprendo, y siento mucho su pérdida. Resolveré este caso para hacer justicia. Si no es molestia, me gustaría echarle un vistazo al diario íntimo.",
  "(Eric asiente y va a la habitación a buscarlo. Al encontrarlo, vuelve con Márquez y se lo da. Márquez empieza a leer detenidamente las páginas tratando de buscar alguna pista.)",
  "(Márquez descubre algo: en las páginas encuentra un código secreto que dice 'ALMACÉN JAIME' en morse.)",
  "Eric, ¿podrías decirme un poco sobre el Almacén Jaime?",
  "Es en donde trabajábamos los dos antes de que cerrara permanentemente. Ahora, por lo que entiendo, está abandonado.",
  "Bien, iré a investigar a ese lugar. Cualquier cosa que averigües no dudes en avisar, adiós.",
  "(Márquez se dirige al almacén abandonado.)"
];
let nombresDepartamento = [
  "NARRADOR",
  "ERIC BENJAMÍN",
  "MÁRQUEZ",
  "ERIC BENJAMÍN",
  "NARRADOR",
  "MÁRQUEZ",
  "ERIC BENJAMÍN",
  "ERIC BENJAMÍN",
  "ERIC BENJAMÍN",
  "MÁRQUEZ",
  "NARRADOR",
  "NARRADOR",
  "MÁRQUEZ",
  "ERIC BENJAMÍN",
  "MÁRQUEZ",
  "NARRADOR"
];

//Discoteca
let dialogoDiscoteca = [
  "(Márquez se dirige a la discoteca, donde hay gente bailando en la pista de baile, ignorando los hechos. Va a la barra.)",
  "(Márquez reconoce al barman Yahir, de quien se sabe que fue la última persona que vio e interactuó con la víctima.)",
  "Buenas noches Yahir. Soy Márquez, el detective a cargo de la investigación de la muerte de Lucas. Vengo a hacerle unas preguntas.",
  "O-Oh, buenas noches... No pensé que vendría a investigar sabiendo que el lugar está lleno de gente...",
  "Bueno, eso no es impedimento para avanzar en la investigación. Bien, Yahir, ¿podrías contarme un poco sobre Lucas cuando vino acá?",
  "E-este, sí... Él vino porque dijo que había encontrado otro empleo y que renunciaría. Nos quedamos conversando un poco, le di su liquidación y se fue...",
  "Bien... ¿y no le comentó a dónde se dirigía exactamente?",
  "E-em, no, no recuerdo que haya mencionado algo al respecto.",
  "Entonces... ¿cómo explica que el cuerpo de Lucas haya aparecido en la bodega de este lugar si se supone que se había ido?",
  "¡Discúlpeme, pero me ofende muchísimo que esté dudando de mí cuando le digo que no sé nada!",
  "Además, aún no tienen muchas pistas sobre cómo lo asesinaron siquiera; ni siquiera descubrieron la pistola...",
  "(Márquez se da cuenta de dos cosas: el nerviosismo de Yahir y que él mencionó un detalle sobre el objeto/arma utilizada sin que nadie se lo dijera.)",
  "Tiene razón Yahir. Aún no tenemos la pista respecto al objeto o arma...",
  "¿V-vio? Se lo dije, no tienen nada contra m-mí... Y con su permiso, seguiré trabajando.",
  "(Yahir va a atender a dos clientes. Márquez aprovecha la información para regresar a la bodega y buscar pistas de la pistola.)"
];
let nombresDiscoteca = [
  "NARRADOR",
  "NARRADOR",
  "MÁRQUEZ",
  "YAHIR",
  "MÁRQUEZ",
  "YAHIR",
  "MÁRQUEZ",
  "YAHIR",
  "MÁRQUEZ",
  "YAHIR",
  "YAHIR",
  "NARRADOR",
  "MÁRQUEZ",
  "YAHIR",
  "NARRADOR"
];

//2da Bodega
let dialogoSegundaBodega = [
  "Volví a la bodega... Tengo que revisar cada rincón otra vez. No se me puede escapar nada.",
  "Estudio los detalles que pasé por alto la primera vez... ¡Acá hay algo más!",
  "Con estas nuevas pistas, ahora sí sé exactamente hacia dónde tengo que ir."
];
let nombresSegundaBodega = [
  "MÁRQUEZ",
  "MÁRQUEZ",
  "MÁRQUEZ"
];

//Callejon
let dialogoCallejon = [
  "El callejón está oscuro y silencioso. Los vidrios rotos crujen bajo los zapatos del detective.",
  "Acá es donde las pistas de la bodega finalmente cobran sentido. Hay marcas recientes en la pared.",
  "Las pistas finalmente me guían hasta aquí. Tendré que averiguar qué es lo que esconde este callejón tan oscuro.",
  "(Pasos desde la oscuridad)",
  "Je, je, je...",
  "¿Eh? ¿Quién anda ahí?",
  "¡TU PEOR PESADILLA!",
  "¡DETENTE! (¡Oh, por Dios, ¿qué hago?)"
];
let nombresCallejon = [
  "NARRADOR",
  "NARRADOR",
  "MÁRQUEZ",
  "???",
  "???",
  "MÁRQUEZ",
  "YAHIR",
  "MÁRQUEZ"
];

//Finales
let dialogoFinalBueno = [
  "FINAL BUENO: Finalmente, el asesino es atrapado y llevado a juicio, donde se descubre que Yahir fue el homicida de Lucas."
];
let nombresFinalBueno = [
  "NARRADOR"
];

let dialogoFinalMalo = [
  "FINAL MALO: El asesino acabó con el detective; el criminal escapa impune de la escena del crimen."
];
let nombresFinalMalo = [
  "NARRADOR"
];

let dialogoFinalNeutral = [
  "FINAL NEUTRAL: El fuego consumió el almacén por completo y las pruebas quedaron reducidas a cenizas... Yahir escapa impune de la ciudad y la policía arresta a un sospechoso inocente por falta de una investigación rigurosa."
];
let nombresFinalNeutral = [
  "NARRADOR"
];

//Almacen
let dialogoAlmacen = [
  "El almacén está oscuro y huele a humedad.",
  "Escucho pasos al fondo... Alguien me estaba esperando."
];
let nombresAlmacen = [
  "DETECTIVE",
  "DETECTIVE"
];

let dialogoAlmacenLlamas = [
  "¡Maldición! Mi entrada brusca activó una trampa o tiró una lámpara de queroseno.",
  "¡El fuego se expande violentamente por todas las cajas de madera!",
  "No hay tiempo para buscar pistas, ¡tengo que salir corriendo antes de que todo colapse!"
];
let nombresAlmacenLlamas = [
  "MÁRQUEZ",
  "NARRADOR",
  "MÁRQUEZ"
];

let dialogoAlmacenSigiloso = [
  "Me deslicé por la puerta trasera sin hacer el más mínimo ruido entre las sombras.",
  "Hay alguien detrás de unas pilas de cajas; lo veo con claridad: ¡es Yahir!",
  "Está apurado, metiendo paquetes sospechosos de sustancias ilícitas dentro de un bolso de lona.",
  "Tengo el elemento sorpresa de mi lado. Es ahora o nunca.",
  "¡YAHIR, ESTÁS BAJO ARRESTO POR TRÁFICO DE SUSTANCIAS Y HOMICIDIO!"
];
let nombresAlmacenSigiloso = [
  "MÁRQUEZ",
  "MÁRQUEZ",
  "MÁRQUEZ",
  "MÁRQUEZ",
  "MÁRQUEZ"
];
