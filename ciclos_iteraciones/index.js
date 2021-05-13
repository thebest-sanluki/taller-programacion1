const calcular1 = () => {

    let miArreglo = [44,88,11,2,7];

   console.log(miArreglo[1])

}

const boton = document.querySelector("#btn_calcular");
boton.addEventListener("click",calcular1);

const recorrer_arreglo = () => {

    let MiArreglo2 = ["Programacion","Web2","Robotica"];


    for(indice in MiArreglo2)
    {
        console.log(MiArreglo2[indice]);
    }
}

const recorrer_boton = document.querySelector("#btn_recorrer");
recorrer_boton.addEventListener("click",recorrer_arreglo);

const MiObjeto1 = () => {

    let MiObjeto = {
    nombre:'pepe',
    correo:{
        correo1:'pepito@gmail.com',
        correo2:'pepito@outlook.com'
    },
    redes_sociales:{
        facebook:'www.facebook.com',
        twitter:'www.twitter.com'
    },
    }
    console.log(`
        Mi Nombre: ${MiObjeto.nombre}
        Mis Correos Electronicos son:
        Mi Gmail: ${MiObjeto.correo.correo1}
        Mi Outlook: ${MiObjeto.correo.correo2}
        Mis Redes Sociales son:
        Mi Facebook: ${MiObjeto.redes_sociales.facebook}
        Mi Twitter: ${MiObjeto.redes_sociales.twitter}
    `);
}

const objeto_boton = document.querySelector("#btn_Objetos");
objeto_boton.addEventListener("click",MiObjeto1);

const recorrer_objetos = () => {

    let objetos = [
        {
            Nombre:'Pepe',
            Apellido:'Argento'
        },
        {
            Nombre:'Santiago',
            Apellido:'Perez'
        }
    ];
    objetos.forEach(objeto => {
        console.log(`
            Nombre: ${objeto.Nombre}
            Apellido: ${objeto.Apellido}
        `)        
    });
} 

const boton4 = document.querySelector("#btn_recorrer_objetos");
boton4.addEventListener("click",recorrer_objetos);