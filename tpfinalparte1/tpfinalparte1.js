//TP#Final — Aventura Gráfica Interactiva Web [Etapa 1]
//links videos explicativos
//Julian Rodriguez Díaz:
//Milagros Ana Sofia Pizzio:

let imgFondo;
let framesLluvia = [];
let totalFramesLluvia = 8;
let frameActual = 0;
let contadorFrames = 0;
let imgLogo;
let imgInicio;
let imgOficina;
let imgCuadroTexto; 
let imgMarcoPersonaje;
let imgFondoNegro;
let imgBodega;
let imgCuadroDecision;
let imgDepartamento;
let imgDiscoteca;
let imgCallejon;
let imgFinalMalo;
let imgFinalBueno;
let imgAlmacen;
let imgAlmacenEnLlamas;
let imgFinalNeutral;
let imgCreditos;
let framesDetective = [];
let totalFramesDetective = 2;
let frameActualDetective = 0;
let contadorFramesDetective = 0;
let xDetective = -100;

let maxTexto = 0;
let indiceTexto = 0;

// Esto es para la maquinita de estados
let estadoPantalla = 0;

//Esto es para sonidos
let ambienteDiscoteca;
let lluvia;
let risa;
let pasos;
let notaPianoSuspenso;
let notaPianoDross;

//Aca se cargan las imagenes.
function preload() {
  imgInicio = loadImage('assets/start.png');
  imgFondo = loadImage('assets/fondo_ciudad.jpg');
  imgLogo = loadImage('assets/logo.png'); 
  imgOficina = loadImage('assets/fondo_oficina.jpg'); 
  imgCuadroTexto = loadImage('assets/cuadro_texto.png');
  imgMarcoPersonaje = loadImage('assets/marco_personaje.png');
  imgFondoNegro = loadImage('assets/fondo_negro.png');
  imgBodega = loadImage('assets/fondo_bodega.jpg');
  imgCuadroDecision = loadImage('assets/cuadro_decision.png');
  imgDepartamento = loadImage('assets/fondo_departamento.png');
  imgDiscoteca = loadImage('assets/fondo_discoteca.png');
  imgCallejon = loadImage('assets/fondo_callejon.png');
  imgFinalMalo = loadImage('assets/final_malo.jpg');   
  imgFinalBueno = loadImage('assets/final_bueno.jpg');
  imgAlmacen = loadImage('assets/fondo_almacen.png');
  imgAlmacenEnLlamas = loadImage('assets/fondo_almacen_en_llamas.png');
  imgFinalNeutral = loadImage('assets/final_neutral.jpg');
  imgCreditos = loadImage('assets/creditos.jpg');
   
   for( let i = 0; i < totalFramesDetective; i++) {
     framesDetective[i] = loadImage('assets/detective_' + i + '.png');
   }
  
  for (let i = 0; i < totalFramesLluvia; i++) {
    framesLluvia[i] = loadImage('assets/lluvia_' + i + '.png');
  }
  //Aca se cargan los sonidos.
  ambienteDiscoteca = loadSound('assets/323255__scale75__hip-hop_liquid.wav');
  lluvia = loadSound('assets/613852__suso_ramallo__rain-oc818.wav');
  risa = loadSound('assets/366176__nanakisan__evil-laugh-06-gen-4.wav');
  pasos = loadSound('assets/508708__mgc5066__steps.wav');
  notaPianoSuspenso = loadSound('assets/648909__tusic99__reversed-piano-note-with-clean-no-reverb.wav');
  notaPianoDross = loadSound('assets/sonidoPianoDross.mp3');
}

function setup() {
  createCanvas(800, 450);
}

function draw() {
  background(0);
  
  //Maquinita de estados. Se vuelve a llamar la funcion
  maquinaEstados();
  //sonido de lluvia
  controlarLluvia();
  //sonido discoteca
  AmbienteDiscotecaSonido();
}
function controlarLluvia() {
  if (estadoPantalla == 6) {
    // Discoteca: se corta la lluvia
    if (lluvia.isPlaying()) {
      lluvia.stop();
    }
  } else if (estadoPantalla > 0) {
    if (!lluvia.isPlaying()) {
      lluvia.loop();
    }
  }
}
//Para que solo se escuche el ambiente de la discoteca
function AmbienteDiscotecaSonido() {
  if (estadoPantalla == 6) {
    // Discoteca: suena en loop
    if (!ambienteDiscoteca.isPlaying()) {
      ambienteDiscoteca.loop();
    }
  } else {
    if (ambienteDiscoteca.isPlaying()) {
      ambienteDiscoteca.stop();
    }
  }
}

//INICIO: Funcion para todo lo que es la primera pantalla y que este ordenadito.
function dibujarPantallaInicio() {
  //fondo y lluvia solo en pantalla 0.
  image(imgFondo, 0, 0);

  contadorFrames++;
  if (contadorFrames >= 4) {
    frameActual = (frameActual + 1) % totalFramesLluvia;
    contadorFrames = 0;
  }

  if (framesLluvia[frameActual]) {
    image(framesLluvia[frameActual], 0, 0);
  }
  
  //esto seria el logo.
  imageMode(CENTER);
  image(imgLogo, width / 2, 120);
  imageMode(CORNER);
  //esto seria la imagen del boton.
  image(imgInicio, 300, 280, 200, 100);
}

//OFICINA: funcion para toda la pantalla de Oficina
function dibujarEscena1() {
  if (indiceTexto === dialogoOficina.length - 1) {
    image(imgFondoNegro, 0, 0, width, height);
  } else {
    image(imgOficina, 0, 0, width, height);
  }

  dibujarInterfazTexto(nombresOficina, dialogoOficina);
}

//BODEGA: Funcion para todo lo que es bodega
function dibujarEscena2() {
  image(imgBodega, 0, 0, width, height);

  dibujarInterfazTexto(nombresBodega, dialogoBodega);
}

//Pantalla de Decision usando solo 1 imagen 
function dibujarPantallaDecision() {
  image(imgBodega, 0, 0, width, height);
  
  dibujarInterfazTexto(nombresBodega, dialogoBodega);

  image(imgCuadroDecision, 200, 110, 400, 160);

  push();
  fill(20, 50, 60);
  textSize(14);
  textAlign(CENTER, CENTER);

//Esta seria la primera opcion 
  text("Ir al departamento de Eric (Novio)", 400, 165);

//Y esta la 2da 
  text("Ir a la discoteca a interrogar al Barman", 415, 215);
  pop();
}

//DEPARTAMENTO: Aun en progreso ashex
function dibujarEscenaDepartamento() {
  image(imgDepartamento, 0, 0, width, height);
  dibujarInterfazTexto(nombresDepartamento, dialogoDepartamento);
}

//Discoteca: hecho
function dibujarEscenaDiscoteca() {
  image(imgDiscoteca, 0, 0, width, height);
  dibujarInterfazTexto(nombresDiscoteca, dialogoDiscoteca);
}

//Esto seria volver a la bodega
function dibujarEscenaSegundaBodega() {
  if (indiceTexto == dialogoSegundaBodega.length - 1){
  image(imgFondoNegro, 0, 0, width, height);
  } else {
    image(imgBodega, 0, 0, width, height);
  }
  dibujarInterfazTexto(nombresSegundaBodega, dialogoSegundaBodega);
}
//CALLEJON OSCURO:  que mieio
function dibujarEscenaCallejon() {
  image(imgCallejon, 0, 0, width, height);
  dibujarInterfazTexto(nombresCallejon, dialogoCallejon);
}

//Funcion para volver a llamar la interfaz de texto, vendria siendo literalmente todo lo que sirva pal texto xD
function dibujarInterfazTexto(listaNombres, listaDialogos) {
  image(imgCuadroTexto, 100, 300, 600, 150);
  image(imgMarcoPersonaje, 110, 265, 160, 45);
  
  push();
  fill(20, 50, 60);
  textSize(15);
  textAlign(CENTER, CENTER);
  text(listaNombres[indiceTexto], 110, 268, 160, 40);
  pop();
  
  fill(20, 50, 60);
  textSize(16);
  textAlign(LEFT, TOP);
  
  let textoActual = listaDialogos[indiceTexto];
  let textoProgresivo = textoActual.substring(0, maxTexto);
  text(textoProgresivo, 157, 330, 500, 100);
  
  if (maxTexto < textoActual.length) {
    maxTexto++;
  }
}
//Una imagen negra que sirve para darle ese toque de suspensito
function dibujarTransicionSuspenso(){
  image(imgFondoNegro, 0, 0, width, height);
}
//boton de decision callejon
function dibujarPantallaDecisionCallejon() {
  dibujarEscenaCallejon();
  
  image(imgCuadroDecision, 200, 110, 400, 160);

  push();
  fill(20, 50, 60);
  textSize(14);
  textAlign(CENTER, CENTER);
  text("Enfrentar al atacante y defenderse", 400, 165);
  text("Intentar huir y escapar del callejón", 400, 215);
  pop();
}

function dibujarEscenaAlmacen() {
  image(imgAlmacen, 0, 0, width, height); 
  dibujarInterfazTexto(nombresAlmacen, dialogoAlmacen);
}
 
 function dibujarPantallaDecisionAlmacen() {
  image(imgAlmacen, 0, 0, width, height);
  dibujarInterfazTexto(nombresAlmacen, dialogoAlmacen);

  image(imgCuadroDecision, 200, 110, 400, 160);

  push();
  fill(20, 50, 60);
  textSize(14);
  textAlign(CENTER, CENTER);
  text("Entrar sigilosamente por la puerta trasera", 415, 165);
  text("Entrar a la fuerza derribando la entrada", 415, 215);
  pop();
}

function dibujarEscenaAlmacenLlamas() {
  image(imgAlmacenEnLlamas, 0, 0, width, height);
  dibujarInterfazTexto(nombresAlmacenLlamas, dialogoAlmacenLlamas);
}
function dibujarEscenaAlmacenSigiloso() {
  image(imgAlmacen, 0, 0, width, height);
  dibujarInterfazTexto(nombresAlmacenSigiloso, dialogoAlmacenSigiloso);
}

// FUNCIONES PARA LOS FINALES
function dibujarFinalBueno() {
  image(imgFinalBueno, 0, 0, width, height); 
  dibujarInterfazTexto(nombresFinalBueno, dialogoFinalBueno);
}

function dibujarFinalMalo() {
  image(imgFinalMalo, 0, 0, width, height); 
  dibujarInterfazTexto(nombresFinalMalo, dialogoFinalMalo);
}
function dibujarFinalNeutral() {
  image(imgFinalNeutral, 0, 0, width, height);
  dibujarInterfazTexto(nombresFinalNeutral, dialogoFinalNeutral);
}
function dibujarPantallaCreditos() {
  image(imgCreditos, 0, 0, width, height); 
  contadorFrames++;
  if (contadorFrames >= 4) {
    frameActual = (frameActual + 1) % totalFramesLluvia;
    contadorFrames = 0;
  }
  if (framesLluvia[frameActual]) {
    image(framesLluvia[frameActual], 0, 0);
  }
  contadorFramesDetective++;
 
  if (contadorFramesDetective >= 20) {
    frameActualDetective = (frameActualDetective + 1) % totalFramesDetective;
    contadorFramesDetective = 0;
  }
  xDetective += 1; 

  if (xDetective > width + 100) {
    xDetective = -500; 
  }

  if (framesDetective[frameActualDetective]) {
    image(framesDetective[frameActualDetective], xDetective, 50, 400, 720);
  }
}
