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

const ES_EL_NUMERO_6 = 0;
const EL_TOTAL_ES_MENOR_DE_50 = 1;
const EL_TOTAL_ES_MAYOR_DE_50 = 2;
const EL_TOTAL_ES_IGUAL_A_50 = 3;

const tirarDado = () => {
  const resultado = generarNumeroAleatorio();
  console.log("Resultado del dado:", resultado);

  if (resultado === 6) {
    console.log("has perdido");
  } else resultado != 6;
  console.log("continua");
};

const botonTirarDado = document.getElementById("tirar");
botonTirarDado.addEventListener("click", tirarDado);
