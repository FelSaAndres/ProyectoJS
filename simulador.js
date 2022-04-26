let variable;
let contador = 0;
let listapacientes = []
let persona;

class Pasiente{

    constructor(Nombre, Apellido, NumeroAsociado){
        this.Nombre = Nombre
        this.Apellido = Apellido
        this.NumeroAsociado = NumeroAsociado
        this.TurnoPendiente = false
    }

    EliminarTurno(){
        let aux = prompt("Numero de asociado:")
        for (let posicion in listapacientes) {
            if (parseInt(posicion.NumeroAsociado) == parseInt(aux)) {
                listapacientes.splice(parseInt(posicion), 0)
            }
        }
    }

}

do{
    
    variable = parseInt(prompt("1-Pedir un turno 2-Buscar sus datos 3-Mostrar turno 4-Tiempo estimado de llamada 5-Salir"))

    switch(variable){
    
        case 1:
            persona = new Pasiente(prompt("Ingrese su nombre"),prompt("Ingrese su apellido"),prompt("Ingrese su numero de asociado"));
            persona.TurnoPendiente = true
            listapacientes.push(persona)
            console.log(listapacientes)
            contador++
        break
        case 2:
            if(listapacientes.length > 0){
                BuscarDatosPersonales()
            }
            else{
                alert("No se encontro ningun paciente, porfavor ingrese uno!!!")
            }
        break
        case 3:
            persona.EliminarTurno()
        break
        case 4:
            if(pass != null && aprobado == true){
                TiempoEsperaTurno()
            }
            else{
                alert("Genere su turno primero o validelo")
            }
    }

}while(variable != 5);

/*function NuevoPaciente() {
    let persona = new Pasiente(prompt("Ingrese su nombre"),prompt("Ingrese su apellido"),prompt("Ingrese su numero de asociado"));
    persona.TurnoPendiente = true
    listapacientes.push(persona)
    console.log(listapacientes)
}*/

function BuscarDatosPersonales() {
    let aux = prompt("Numero de asociado:")
    let datos = listapacientes.find((x) => parseInt(x.NumeroAsociado) == parseInt(aux))
    console.log(datos)
    alert("Nombre: " + datos.Nombre + " Apellido: " + datos.Apellido)
}
