function principal(){

    // Se instancia un objeto de la clase promesa de js
    let promesa = new Promise(function (resolve,reject){
        setTimeout(function (){
            //definiendo el proceso de la funcion principal
            console.log('soy el proceso principal')
            resolve('el proceso del callback (soy el segundo proceso)')
        },2000)

    })
    //la funcion principal retorna la promesa
    return promesa

    
    
}

// llamando la funcion principal (evaluar el estado de la promesa)
principal()
.then(function (respuesta){
    console.log(respuesta)
})