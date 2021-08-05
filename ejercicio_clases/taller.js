class Taller {

    libreria_css;
    servivio_google;

    constructor (nom,len){
        this.nombre_taller = nom;
        this.lenguaje_programacion = len;
    }

    mostrar_datos() {
        console.log (`
            taller: ${this.nombre_taller}
            lenguaje: ${this.lenguaje_programacion}
            libreria_ccs: ${this.libreria_css}
            servicio_google: ${this.servivio_google}
        `);
    }
}

const taller = new Taller('programacion','visual_studio');

taller.libreria_css = 'bootstrap';
taller.servivio_google = 'firebase';

taller.mostrar_datos();

const btn_mostrar = document.querySelector("#btn_mostrar");

btn_mostrar.addEventListener("click",taller.mostrar_datos());