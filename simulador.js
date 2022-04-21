
let pasiente = null;
let aprobado;
let variable;
let Nombre;
let Apellido;
let contador = 0;

do{
    
    variable = parseInt(prompt("1-Pedir un turno 2-Confirmar un turno 3-Mostrar turno 4-Tiempo estimado de llamada 5-Salir"))

    switch(variable){
    
        case 1:
            pasiente = PedirTurno()
            aprobado = false
            contador++
        break
        case 2:
            if(pasiente != null){
                ConfirmarTurno()
                aprobado = true;
            }
            else{
                alert("Primero debe de pedir un turno")
            }
        break
        case 3:
            if(aprobado){
                MostrarDatosTurno()
            }
            else{
                alert("Genere su turno primero o validelo")
            }
        break
        case 4:
            if(pasiente != null && aprobado == true){
                TiempoEsperaTurno()
            }
            else{
                alert("Genere su turno primero o validelo")
            }
    }

}while(variable != 5);

function PedirTurno(){
    Nombre = prompt("Ingrese su nombre: ")
    Apellido = prompt("Ingrese su apellido: ")
    NumeroOS = prompt("Ingrese su numero de obra social/prepaga: ")
    return NumeroOS
}

function ConfirmarTurno(){
    alert("Su turno a sido generado con exito!!!")
}

function MostrarDatosTurno(){
    alert("Datos del turno: " + Nombre + " " + Apellido + " " + pasiente)
}

function TiempoEsperaTurno(){
    let tiempo = contador * 15
    alert("El tiempo estimado para su turno es de: " + tiempo + "min")
}