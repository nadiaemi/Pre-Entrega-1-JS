//Algoritmo para crear un perfume. Se eligen primero las notas, es decir, los ingredientes. Luego la medida en ml. y la concentración de la fragancia.


//creo tres arrays que contienen las notas que están disponibles para elegir y tres métodos de búsqueda y transformación para los ingredientes

//lista notas de salida o también llamadas notas altas
const listaNotasSalida = ['Limón', 'Mandarina', 'Durazno', 'Frambuesa', 'Cardamomo', 'Anís']
console.log (`Las NOTAS DE SALIDA disponibles son: ${listaNotasSalida.join(', ')}`);

listaNotasSalida.sort ((a,b)=>{
 if (a>b){
     return 1;
 }
 if (a<b){
     return -1;
 }
 return 0;
})
console.log(`Notas de salida por orden alfabético: ${listaNotasSalida}`);

// lista notas de corazón o notas medias
const listaNotasCorazon = ['Rosa', 'Jazmín', 'Magnolia', 'Nardos', 'Orquídea', 'Violeta']
console.log (`Las NOTAS DE CORAZÓN disponibles son: ${listaNotasCorazon.join(', ')}`);

const buscaVioleta = listaNotasCorazon.find (listaNotasCorazon=> listaNotasCorazon == 'Violeta');
console.log (`Busca nota ${buscaVioleta}`);

//lista notas de fondo o notas base
const listaNotasFondo = ['Pachulí', 'Almizcle', 'Vainilla', 'Haba Tonka', 'Sándalo', 'Ámbar']
console.log (`Las NOTAS DE FONDO disponibles son: ${listaNotasFondo.join(', ')}`);

const existeVainilla = listaNotasFondo.some (listaNotasFondo => listaNotasFondo == 'Vainilla');
console.log (`¿Existe Vainilla? ${existeVainilla}`);



//función para ingresar por prompt las notas de salida, que serán dos por cada tipo y hacer un chequeo si están incluídas en las listas correspondientes

let notaSalida = 0;

function solicitarNotaSalida (){

    let notaSalida = prompt (`Ingrese la nota de salida. Puede elegir hasta dos:
                                                                    Limón
                                                                    Mandarina
                                                                    Durazno
                                                                    Frambuesa
                                                                    Cardamomo
                                                                    Anís`)

    let chequeoIngreso = (listaNotasSalida.includes(notaSalida));

    if (chequeoIngreso === false){
        notaSalida = prompt ('Ingrese la nota como está escrita en la lista');
        console.log (`La nota de salida elegida es ${notaSalida}`);
     
    }else { 
        console.log (`La nota de salida elegida es ${notaSalida}`);
    }

}
solicitarNotaSalida();
solicitarNotaSalida();


//función para ingresar por prompt las notas de corazón:

function solicitarNotaCorazon (){

    let notaCorazon = prompt (`Ingrese la nota de corazón. Puede elegir hasta dos:
                                                                        Rosa
                                                                        Jazmín
                                                                        Magnolia
                                                                        Nardos
                                                                        Orquídea
                                                                        Violeta`)

    let chequeoIngreso = (listaNotasCorazon.includes(notaCorazon));

    if (chequeoIngreso === false){
        notaCorazon = prompt ('Ingrese la nota como está escrita en la lista');
        console.log (`La nota de corazón elegida es ${notaCorazon}`);
     
    }else { 
        console.log (`La nota de corazón elegida es ${notaCorazon}`);
    }

}
solicitarNotaCorazon();
solicitarNotaCorazon();
    

//función para ingresar por prompt las notas de fondo:

function solicitarNotaFondo (){

    let notaFondo = prompt (`Ingrese la nota de fondo. Puede elegir hasta dos:
                                                                    Pachulí
                                                                    Almizcle
                                                                    Vainilla
                                                                    Haba Tonka
                                                                    Sándalo
                                                                    Ámbar `)

    let chequeoIngreso = (listaNotasFondo.includes(notaFondo));

    if (chequeoIngreso === false){
        notaFondo = prompt ('Ingrese la nota como está escrita en la lista')
        console.log (`La nota de fondo elegida es ${notaFondo}`);
    }else { 
        console.log (`La nota de fondo elegida es ${notaFondo}`);
    }

}
solicitarNotaFondo();
solicitarNotaFondo();
    


//variables para ingresar por prompt el contenido de la botella y la concentración del perfume

let seleccionaMedida = Number(prompt(`Ingrese la cantidad en ml. que desea:
                                                                    30
                                                                    50
                                                                    100`))


let seleccionaConcentracion = prompt (`Ingrese la concentración: 
                                                        EDT
                                                        EDP
                                                        Parfum`)



//creo una función para que calcule el precio de acuerdo a la medida de la botella

let precioMedida = 0;

function calculaPrecioMedida(){

        if (seleccionaMedida ===  30){
            precioMedida = 2000;
         }
         else if (seleccionaMedida === 50){
             precioMedida = 4000
         }
         else {
            precioMedida = 6000
         }
    
}

calculaPrecioMedida();
console.log (`El precio del contenido en ${seleccionaMedida} ml es: $${precioMedida}`);


//creo otra función para que calcule el precio de acuerdo a la concentración del perfume

let precioConcentracion = 0;

function calculaPrecioConcentracion(){
    if (seleccionaConcentracion == 'EDT'){
       precioConcentracion = 1000;
    }
    else if (seleccionaConcentracion == 'EDP'){
        precioConcentracion = 2000;
    }
    else {
       precioConcentracion = 4000;
    }
}

calculaPrecioConcentracion();
console.log(`El precio de la concentración ${seleccionaConcentracion} es: $${precioConcentracion}`);


//Función flecha para calcular el valor final del pedido
const totalPedido = (a, b)=> a + b;
console.log (`El VALOR TOTAL del pedido es: $ ${totalPedido(precioMedida, precioConcentracion)}`);


class Perfume{
    constructor(medida, concentracion){
        this.medida = medida;
        this.concentracion = concentracion;
        
    }

    mostrar(){
        console.log (`Tu elección: 
                    ${this.medida} ml.
                    ${this.concentracion}
                    `)
    }

}

const perfumeElegido = new Perfume (seleccionaMedida, seleccionaConcentracion);

perfumeElegido.mostrar();