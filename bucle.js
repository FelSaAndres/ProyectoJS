
let numero = prompt("Ingrese un valor del 0 al 2: ")

while(numero > 0 || numero < 2){

    if(numero == 0){
        alert("Se a ganado $1000!!!")
        break
    }
    else if(numero == 1){
        alert("Se a ganado un auto!!!")
        break
    }
    else if(numero == 2){
        alert("Se a ganado una casa!!!")
        break
    }
    else{
        alert("Ingreso un valor incorrecto")
        numero = prompt("Ingrese un valor del 0 al 2: ")
    }

}