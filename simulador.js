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
            alert("Nombre: " + datos.Nombre + " Apellido: " + datos.Apellido + " Numero asociado: " + datos.NumeroAsociado)
        }
        else{
            alert("El pasiente buscado no existe")
        }
    }

    FacturaHospital(){
        let aux = prompt("Numero de asociado:")
        if (listapacientes.some((x) => parseInt(x.NumeroAsociado) == parseInt(aux)))
        {
            let propTurno
            do {
                propTurno = parseInt(prompt("Proposito del turno: 1-Pediatria 2-Cardilogia 3-Cirujia General 4-Dermatologia 5-Oftalmologia"))
            } while (propTurno < 0 || propTurno > 6); 
            switch (propTurno) {
                case 1:
                    alert("Su factura medica es de: $5000")
                    break;
            
                case 2:
                    alert("Su factura medica es de: $10.000")
                    break;
    
                case 3:
                    alert("Su factura medica es de: $30.000")
                    break;
                case 4:
                    alert("Su factura medica es de: $15.000")
                    break;
                case 5:
                    alert("Su factura medica es de: $20.000")
                    break;
            }  
        }
        else{
            alert("Numero de asociado no valido")
        }
    }
}

do{
    
    variable = parseInt(prompt("1-Pedir un turno 2-Buscar sus datos 3-Dar de baja turno 4-Precio por turno 5-Salir"))

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
            if(listapacientes.length > 0){
                persona.FacturaHospital()
            }
            else{
                alert("No se encontro ningun paciente, porfavor ingrese uno!!!")
            }
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
