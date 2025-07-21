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

const tirarDado = () => {
  const resultado = generarNumeroAleatorio();

  mostarImagenDado(resultado);
};

const botonTirarDado = document.getElementById("tirar");
botonTirarDado.addEventListener("click", tirarDado);

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
