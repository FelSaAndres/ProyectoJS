let variable;
let listapacientes = []
let persona;

class Pasiente{

    constructor(Nombre, Apellido, NumeroAsociado){
        this.Nombre = Nombre
        this.Apellido = Apellido
        this.NumeroAsociado = NumeroAsociado
    }

    EliminarTurno(){
        let aux = prompt("Numero de asociado:")
        for (let cont = 0; cont < listapacientes.length; cont++) {
            if(parseInt(listapacientes[cont].NumeroAsociado) == parseInt(aux)){
                listapacientes.splice(parseInt(cont), 1)
            }
        }
        console.log(listapacientes)
    }

    BuscarDatosPersonales() {
        let aux = prompt("Numero de asociado:")
        let datos = listapacientes.find((x) => parseInt(x.NumeroAsociado) == parseInt(aux))
        console.log(datos)
        if(datos != null){
            alert("Nombre: " + datos.Nombre + " Apellido: " + datos.Apellido)
        }
        else{
            alert("El pasiente buscado no existe")
        }
    }
}

do{
    
    variable = parseInt(prompt("1-Pedir un turno 2-Buscar sus datos 3-Dar de baja turno 4-Tiempo estimado de llamada 5-Salir"))

    switch(variable){
    
        case 1:
            persona = new Pasiente(prompt("Ingrese su nombre"),prompt("Ingrese su apellido"), ValidarNumeroAsociado()); 
            listapacientes.push(persona)
        break
        case 2:
            if(listapacientes.length > 0){
                persona.BuscarDatosPersonales()
            }
            else{
                alert("No se encontro ningun paciente, porfavor ingrese uno!!!")
            }
        break
        case 3:
            if(listapacientes.length > 0){
                persona.EliminarTurno()
            }
            else{
                alert("No se encontro ningun paciente, porfavor ingrese uno!!!")
            }
        break
        case 4:
            FacturaHospital()
        break
    }

}while(variable != 5);


function ValidarNumeroAsociado(){
    let numAsociado = prompt("Ingrese numero de asociado")
    if (listapacientes.some((x) => parseInt(x.NumeroAsociado) == parseInt(numAsociado)))
    {
        alert("Ese numero de asociado ya existe, vuelva a ingresarlo")
        numAsociado = ValidarNumeroAsociado()
    }

    return numAsociado
}
