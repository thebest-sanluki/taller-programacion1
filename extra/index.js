import Cuenta from "./cuenta.js";

const almacenar = () => {
const usuario = document.querySelector("#inp_1").value;
const password = document.getElementById("inp_2").value;

const instancia = new Cuenta(usuario,password);

}

document.getElementById("btn_button").addEventListener("click",almacenar);