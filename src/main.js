import "./style.css";

/* genera un numero aleatorio entre el 1 y el 6 */

const generarNumeroAleatorio = () => Math.floor(Math.random() * 6) + 1;

/*
 - una funcion de tirar   ---   para generar el número aleatorio y manejar la lógica de perder si sale un 6.
 - una funcion de mostrar el numero   --- para actualizar la imagen del dado y el historial.
 - una funcion me planto   --- para permitir que el jugador termine la partida voluntariamente.
 - una funcion mostrar puntos totales.  --- para actualizar la puntuación acumulada y comprobar si ha ganado.
*/

/* el ESTADO */

const EL_TOTAL_ES_MENOR_DE_50 = 0;
const EL_TOTAL_ES_MAYOR_DE_50 = 1;
const EL_TOTAL_ES_IGUAL_A_50 = 2;
const GAME_OVER = 3;

/* ------------------------------------------------------FUNCION TIRAR DADOS ------------------------------*/
const tirarDado = () => {
  return generarNumeroAleatorio();
};

/* ------------------------------------------------------FUNCION ME PLANTO ----------------------------------*/

const mePlanto = () => {
  const mensajeElement = document.getElementById("mensaje-despues-tiros");
  const puntos = document.getElementById("puntos").textContent;

  mensajeElement.textContent = `La partida ha terminado. Tu puntuacion es  ${puntos}`;

  document.getElementById("tirar").disabled = true;
  document.getElementById("me-planto").disabled = true;
};

/* ------------------------------------------------------FUNCION MOSTRAR DADOS ------------------------------*/
const mostarImagenDado = (resultado) => {
  switch (resultado) {
    case 1:
      document.getElementById("imagen-dado").src = "src/img/cara1.png";
      break;
    case 2:
      document.getElementById("imagen-dado").src = "src/img/cara2.png";
      break;
    case 3:
      document.getElementById("imagen-dado").src = "src/img/cara3.png";
      break;
    case 4:
      document.getElementById("imagen-dado").src = "src/img/cara4.png";
      break;
    case 5:
      document.getElementById("imagen-dado").src = "src/img/cara5.png";
      break;
    case 6:
      document.getElementById("imagen-dado").src = "src/img/cara6.png";
      break;
  }
};

/* ------------------------------------------------------FUNCION MOSTRAR MENSAJE ------------------------------*/

const mostraMensaje = (resultado) => {
  const mensajeElement = document.getElementById("mensaje-despues-tiros");

  if (resultado != 6) {
    mensajeElement.textContent = `BIEN !!!! ha salido ${resultado} TE ATREVES A SEGUIR ?`;
  } else {
    mensajeElement.textContent = `LO SIENTO !!! ha salido ${resultado} GAME - OVER `;
  }
};

/* -------------------------------------------------FUNCION PARA ACUMULAR PUNTOS-------------------------------*/

const sumarPuntos = (resultado) => {
  if (resultado != 6) {
    const puntos = document.getElementById("puntos");
    let puntuacionActual = parseInt(puntos.textContent);
    let nuevaPuntuacion = puntuacionActual + resultado;
    puntos.textContent = nuevaPuntuacion;

    estadoPartida(nuevaPuntuacion);
  } else {
    document.getElementById("tirar").disabled = true;
    document.getElementById("me-planto").disabled = true;

    document.getElementById(
      "mensaje-despues-tiros"
    ).textContent = `LO SIENTO !!! ha salido el  ${resultado} GAME - OVER `;
  }
};

/* -------------------------------------------------FUNCION CONTROL ESTADO PARTIDA-------------------------------*/

const estadoPartida = (nuevaPuntuacion) => {
  const mensajeElement = document.getElementById("mensaje-despues-tiros");

  if (nuevaPuntuacion > 50) {
    mensajeElement.textContent = `ENHORABUENA!!!!! HAS GANADO LA PARTIDA CON ${nuevaPuntuacion} puntos`;
    document.getElementById("tirar").disabled = true;
    document.getElementById("me-planto").disabled = true;
  } else if (nuevaPuntuacion === 50) {
    mensajeElement.textContent = `Bestial !!!!! HAS GANADO con  ${nuevaPuntuacion} puntos exactos`;
    document.getElementById("tirar").disabled = true;
    document.getElementById("me-planto").disabled = true;
  }
};

/* -------------------------------------------------FUNCION REINICIO DE LA PARTIDA-------------------------------*/

const reiniciarJuego = () => {
  generarNumeroAleatorio();

  document.getElementById("mensaje-despues-tiros").textContent = "";
  document.getElementById("puntos").textContent = "";

  document.getElementById("tirar").disabled = false;
  document.getElementById("me-planto").disabled = false;
};

/* ----------------------------------------------GESTION DEL JUEGO-----------------------------------*/

const handleCompruebaClick = () => {
  const resultado = tirarDado();
  mostarImagenDado(resultado);
  mostraMensaje(resultado);
  sumarPuntos(resultado);
};

/* ------------------------------------------------------BOTON ENVIAR --------------------------------------*/
const botonTirarDado = document.getElementById("tirar");
botonTirarDado.addEventListener("click", handleCompruebaClick);

const botonMePlanto = document.getElementById("me-planto");
botonMePlanto.addEventListener("click", mePlanto);

const botonReinicio = document.getElementById("reiniciar");
botonReinicio.addEventListener("click", reiniciarJuego);
