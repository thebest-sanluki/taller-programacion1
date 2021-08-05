class Auto {
    //Declaro los artributos de la clase
    precio = '$50000ds';
    motor;

    constructor (mar,mod){
        this.marca = mar;
        this.modelo = mod;
    }

    arranque() {
        console.log(`
        Marca: ${this.marca}
        Modelo: ${this.modelo}
        Precio: ${this.precio}
        Motor: ${this.motor}
        `);
    }
}

/* 
    Creo instancia de la clase pero tambien 
    se ejecuta el constructor
*/
const auto = new Auto('Chevrolet','Camaro');

auto.motor = '1.4 TSI';
//aca con la instancia ejecuto el metodo arranque
auto.arranque();

/*  
Exportando esta clase, esta visible 
para los demas archivos
*/
//module.export = Auto;