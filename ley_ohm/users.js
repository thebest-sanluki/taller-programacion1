const obtenerUsuarios = async () =>{
    const resupuestas = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data2 = await resupuestas.json();
    data2.forEach(objeto => {
        console.log(`
        datos:
        - usuario: ${objeto.name}
        - email: ${objeto.email}
        - ciudad: ${objeto.address.city}
    `)
    });
}

const  btn_probando = document.querySelector(`#btn_probando`);
btn_probando.addEventListener("click",obtenerUsuarios);


