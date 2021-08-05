//construir una funcion que imprime una alerta en el navegador
const mifuncion = () => {
    const d1 = document.querySelector("#imp_d1").value;
    const d2 = document.querySelector("#imp_d2").value;

    const resultado= parseInt(d1) + parseInt(d2);

    alert(resultado)
}

//identificar el boton a taves de su ID
const  btn = document.querySelector(`#btn_probar`);

//cuando se haga click sobre el boton se ejecuta la funcion
btn.addEventListener("click",mifuncion);