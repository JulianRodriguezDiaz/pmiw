// Variables
let Estado = 0;
let frameActual = 0;
let tiempoAnterior = 0;
let tiempoEstado = 0;
let VelocidadAnimacion = 120;
let animacionActual;
let posX = -100;

// Arrays de Animaciones
let sansCaminar = [];
let sansPeinar = [];

let archivosCaminar = [
  "assets/SansW1.png",
  "assets/SansW2.png",
  "assets/SansW3.png",
  "assets/SansW4.png",
  "assets/SansW5.png",
  "assets/SansW6.png"
];

let archivosPeinar = [
  "assets/SansPelo1.png",
  "assets/SansPelo2.png",
  "assets/SansPelo3.png",
  "assets/SansPelo4.png"
];

let fondo;

function preload() {
  fondo = loadImage("assets/Undertale.jpg");

  cargarFrames(sansCaminar, archivosCaminar);
  cargarFrames(sansPeinar, archivosPeinar);
}

function setup() {
  createCanvas(800, 600);

  posX = -100;
  Estado = 0;
  frameActual = 0;
  tiempoAnterior = millis();
  tiempoEstado = millis();
}

function draw() {
  background(0);
  imageMode(CORNER);
  image(fondo, 0, 0, 800, 600); // Fondo

  animacionActual = PrepararAnimacion(Estado);

  if (Estado == 0) {
    posX = posX + 2;

    // Se detiene en el medio (400)
    if (posX >= 400) {
      Estado = 1;
      frameActual = 0;
      tiempoAnterior = millis();
      tiempoEstado = millis();
      posX = 400;
    }
  } else if (Estado == 1) {
    // Espera en el medio 
    if (millis() > tiempoEstado + 4000) {
      Estado = 2;
      frameActual = 0;
      tiempoAnterior = millis();
      tiempoEstado = millis();
    }
  } else if (Estado == 2) {
    posX = posX + 2;
  }

  // Cambio de frames
  if (millis() > tiempoAnterior + VelocidadAnimacion) {
    frameActual++;
    if (frameActual >= animacionActual.length) {
      frameActual = 0;
    }
    tiempoAnterior = millis();
  }

  mostrarAnimacion(animacionActual, frameActual, posX, 170, 160, 220); // Dibuja personaje
}

function cargarFrames(animacion, archivos) {
  for (let i = 0; i < archivos.length; i++) {
    animacion.push(loadImage(archivos[i]));
  }
}

function PrepararAnimacion(estado) {
  if (estado == 0) {
    return sansCaminar;
  } else if (estado == 1) {
    return sansPeinar;
  } else if (estado == 2) {
    return sansCaminar;
  }
  return sansCaminar;
}

function mostrarAnimacion(animacion, frame, x, y, ancho, alto) {
  let imagen = animacion[frame];
  imageMode(CENTER);
  image(imagen, x, y, ancho, alto);
}

// Reset
function resetear() {
  Estado = 0;
  frameActual = 0;
  posX = -100;
  tiempoAnterior = millis();
  tiempoEstado = millis();
}

function keyPressed() {
  // Tecla R para reiniciar
  if (key == "r" || key == "R") {
    resetear();
  }
}
