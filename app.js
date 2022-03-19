// let numero = Math.random()*20
let redondear= Math.floor(Math.random() * (1 , 20)) ;
// console.log(redondear)

// Numeros aleatorios donde su limite esta dado por la longitud del arreglo (semilla)
// let nombres = ['juan', 'pedro','luis','paco'];
// let cursos =['avanzada', 'nuevas','moviles3']
// let arregloNombres= Math.floor(Math.random() * nombres.length) ;
// let arregloNombres2= Math.floor(Math.random() * cursos.length) ;

// Imprimiendo un elemnto de las semillas de forma aleatoria
// console.log(nombres[arregloNombres])
// console.log(cursos[arregloNombres2])


let estudiantes = [];

for(let i=0; i<50; i++){
    // si voy a llenar un obejto vacio se debe hacer dentro del ciclo
    let estudiante={};

    //Llenando un objeto estudiante
    estudiante.nombre= nombres[ Math.floor(Math.random() * nombres.length)]
    estudiante.curso = cursos[Math.floor(Math.random() * cursos.length)]

    // agregando el objeto estudiante al arreglo estudiantes

    estudiantes.push(estudiante)
}
console.log(estudiantes)