//maquina de estados
function maquinaEstados() {
  if (estadoPantalla == 0) {
    dibujarPantallaInicio();
  } else if (estadoPantalla == 1) {
    dibujarEscena1(); // Oficina
  } else if (estadoPantalla == 2) {
    dibujarTransicionSuspenso(); // Pantalla negra
  } else if (estadoPantalla == 3) {
    dibujarEscena2(); // Bodega
  } else if (estadoPantalla == 4) {
    dibujarPantallaDecision(); // Decision
  } else if (estadoPantalla == 5) {
    dibujarEscenaDepartamento(); // Departamento
  } else if (estadoPantalla == 6) {
    dibujarEscenaDiscoteca(); // Tropitango Bailable
  } else if (estadoPantalla == 7) {
    dibujarEscenaSegundaBodega(); // Segunda inspeccion de la bodega donde encuentra el arma y las huellas hacia una zona oscura
  } else if (estadoPantalla == 8) {
    dibujarEscenaCallejon(); //Callejon    
  } else if (estadoPantalla == 9) {
    dibujarPantallaDecisionCallejon(); //  Decision callejon
  } else if (estadoPantalla == 10) {
    dibujarFinalBueno(); // Opcion de defenderse / pelear
  } else if (estadoPantalla == 11) {
    dibujarFinalMalo(); // Opcion de escapar / muerte
  } else if (estadoPantalla == 12) {
    dibujarEscenaAlmacen(); // Muestra el almacen y su interfaz de texto
  } else if (estadoPantalla == 13) {
    dibujarEscenaAlmacenSigiloso(); // Almacen pero de manera sigiloza
  } else if (estadoPantalla == 14) {
  dibujarEscenaAlmacenLlamas(); //Almacen en llamas
  } else if (estadoPantalla == 15) {
    dibujarPantallaDecisionAlmacen(); // Muestra el Almacen con los botones de decisión
  } else if (estadoPantalla == 16) {
    dibujarFinalNeutral(); // Muestra el Final Neutral
  } else if (estadoPantalla == 17) {
    dibujarPantallaCreditos(); // Muestra los créditos finales
  }
}
