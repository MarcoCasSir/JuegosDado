# DESAROLLO DE UN JUEGO DE DADOS

## Estructura de desarrollo

- Defino estructura del HTML ( espacio para: foto / punturacion /mensaje y botones)
- Creo variable para crear un numero aleatorio
- Defino las primeras funciones, necesarias para el funcionameinto del juego, cada funcion una operacion ( tirarDado / mostrarImagenDado / mostrarmensaje / mePlanto)
- Defino operacion logica para acumular pujntos ( sumarPuntos)
- Defino operacion logica de estado partida ( estadoPrtida) para operaar en funcion del estado en que se encuetra la puntuacion del jugador.
- Defino lso botones ( tirarDado /mePlanto /reinicio)
- Defino funcion handleCompruebaClick para realizar la gestion del boton tirar.
- Defino el DOMContentLoad para la carga del DOM y las funciones principales para el arranque.
- Incapsulacion de la botonera en la funcion eventos.
- Generacion de la funcion inicio.
- Refactorizcion del codigo para mejor legibilida y evitar que los elementos del dom se carguen a cada llamada de la funcion.
- Posibles mejoras a desarrollar : 1)Registro de jugadas.2) Ver la posibilidad de comparar dos partida para el mismo jugador o 3) Que puedan jugar dos jugadore. 4)Posibilidad de definir los limites del numero a alcanzar para partidas mas rapidas.

### Descripcion de cada funcion

#### tirarDado

La funcion se encarga de devolver la variable que contiene el numero aleatorio que se crea automaticamente.

#### mostrarImagenDado

La funcion recibe la variable resultado donde se guarda el nuemro aleatrio generado en la funcion tirarDado.
En funcion del numero ( tenemos 6 opciones) se esstablece un switch para mostrar la imagen correspondiente.

#### mePlanto

La funcion modifica el texto del mensaje indicando qeu la partida se termian y la puntuacion alcanzada.
Anula los botones de tirar y el mismo de mePlanto, dejando libre solo el de nueva partida.

#### mostrarMensaje

La funcnion se encarga de mostra el mensaje en funcion del valro conenido en la variable resultado.

#### sumaPunto

En funcion de la variable resultado que recibe, parsea el contenido de tipo string de elemento con id= puntos a un numero y lo suma al valor guardado en resultado y se muestra nuevamente.Llama a la funcion estadoPartida que es la encargada de comprobar el estado de la puntuacion acumulada. en funcion de ese estado definido mostrara un mensaje u otro.

#### reinicioJuego

la funcion llama a la funcion de inicio para mostrar la primera visualizacion, refrescando mensajes, imagen y puntuacion

#### handleCompruebaClick

Es la funcion que se encarga de los movimientos principales al teclear el boton tirar.
Construiye el resultado inicial, muestra la imagen,el mensaje y la suma .

### inicio

Es la funcion que se encarga de mostra la configuracion visual del inicio del juego
