import "./style.css";

/* genera un numero aleatorio entre el 1 y el 6 */

const generarNumeroAleatorio = () => Math.floor(Math.random() * 6) + 1;

/* carga de inicio  y botyonera*/

let imagenDado;
let puntosElement;
let mensajeElement;

document.addEventListener("DOMContentLoaded", () => {
  imagenDado = document.getElementById("imagen-dado");
  puntosElement = document.getElementById("puntos");
  mensajeElement = document.getElementById("mensaje-despues-tiros");
  inicio();
  eventos();
});

/* ------------------------------------------------------FUNCION INICIO ------------------------------*/

const inicio = () => {
  const inicioPuntuacion = 0;
  imagenDado.src = "src/img/cara1.png";
  puntosElement.textContent = inicioPuntuacion;
};

/* ------------------------------------------------------FUNCION TIRAR DADOS ------------------------------*/
const tirarDado = () => {
  return generarNumeroAleatorio();
};

/* ------------------------------------------------------FUNCION ME PLANTO ----------------------------------*/

const mePlanto = () => {
  mensajeElement.textContent = `La partida ha terminado. Tu puntuacion es  ${puntosElement.textContent}`;

  document.getElementById("tirar").disabled = true;
  document.getElementById("me-planto").disabled = true;
};

/* ------------------------------------------------------FUNCION MOSTRAR DADOS ------------------------------*/
const mostarImagenDado = (resultado) => {
  switch (resultado) {
    case 1:
      imagenDado.src = "src/img/cara1.png";
      break;
    case 2:
      imagenDado.src = "src/img/cara2.png";
      break;
    case 3:
      imagenDado.src = "src/img/cara3.png";
      break;
    case 4:
      imagenDado.src = "src/img/cara4.png";
      break;
    case 5:
      imagenDado.src = "src/img/cara5.png";
      break;
    case 6:
      imagenDado.src = "src/img/cara6.png";
      break;
  }
};

/* ------------------------------------------------------FUNCION MOSTRAR MENSAJE ------------------------------*/

const mostraMensaje = (resultado) => {
  mensajeElement.textContent =
    resultado != 6
      ? `BIEN !!!! ha salido ${resultado} TE ATREVES A SEGUIR ?`
      : `LO SIENTO !!! ha salido ${resultado} GAME - OVER `;
};

/* -------------------------------------------------FUNCION PARA ACUMULAR PUNTOS-------------------------------*/

const sumarPuntos = (resultado) => {
  if (resultado != 6) {
    const puntuacionActual = parseInt(puntosElement.textContent);

    const nuevaPuntuacion = puntuacionActual + resultado;
    puntosElement.textContent = nuevaPuntuacion;

    estadoPartida(nuevaPuntuacion);
  } else {
    document.getElementById("tirar").disabled = true;
    document.getElementById("me-planto").disabled = true;

    mensajeElement.textContent = `LO SIENTO !!! ha salido el  ${resultado} GAME - OVER `;
  }
};
/* -------------------------------------------------FUNCION CONTROL ESTADO PARTIDA-------------------------------*/

const estadoPartida = (nuevaPuntuacion) => {
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
  inicio();

  mensajeElement.textContent = "";
  imagenDado.src = "src/img/cara1.png";
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

function eventos() {
  const botonTirarDado = document.getElementById("tirar");
  botonTirarDado.addEventListener("click", handleCompruebaClick);

  const botonMePlanto = document.getElementById("me-planto");
  botonMePlanto.addEventListener("click", mePlanto);

  const botonReinicio = document.getElementById("reiniciar");
  botonReinicio.addEventListener("click", reiniciarJuego);
}
