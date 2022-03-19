// let numero = Math.random()*20
let redondear= Math.floor(Math.random() * (1 , 20)) ;
// console.log(redondear)

// Numeros aleatorios donde su limite esta dado por la longitud del arreglo (semilla)
 let nombres = ['paloma petro', 'alvaro cepeda','polo inverso','juanpis gonzales'];
 let sexos=['0', '1']



let senadores = [];

for(let i=0; i<=20; i++){
    // si voy a llenar un obejto vacio se debe hacer dentro del ciclo
    let senador={};

    //Llenando un objeto estudiante
    senador.nombre= nombres[ Math.floor(Math.random() * nombres.length)]
    senador.sexo = sexos[Math.floor(Math.random() * sexos.length)]
    senador.votos = Math.floor(Math.random() * (1 , 1000)) ;

    // agregando el objeto estudiante al arreglo estudiantes

    senadores.push(senador)
}

//declarando la funcion principal
// console.log(senadores)

function filtrarMujeres(senadores,callback){
    setTimeout(()=>{
        let senadoras = senadores.filter((senador)=>{
            return (senador.sexo=='0' && senador.votos > 250)
        })
        callback(senadoras)
    },10000)
    
}

// Llamando la funcion principal 

filtrarMujeres(senadores, function(senadoras){
    let sumaVotos=0
    senadoras.forEach(senadora => {
        sumaVotos= sumaVotos + senadora.votos
    });
    console.log(senadoras)
    console.log(`el total de votos del pacto democratico es: ${sumaVotos}`)
})

