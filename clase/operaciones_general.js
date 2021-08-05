import Auto from './auto';

//Creamos la instancia de la clase Auto
const auto = new Auto();

//auto.arranque();

//Identificamos el boton a traves de su id
const btn_arranque = document.querySelector("#btn_arranque");

btn_arranque.addEventListener("click",auto.arranque());