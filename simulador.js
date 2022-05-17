let listausuarios = []
let userIniciado
let cont

class SedesHospitales{
    constructor(id, Localizacion, Areas, Horarios){
        this.id = id
        this.Localizacion = Localizacion
        this.Areas = Areas
        this.Horarios = Horarios
    }
}

const sede1 = new SedesHospitales(1, "Castelar", "Pediatraia, Dermatologia, Oftalmologia", "8:00hs a 18:00hs")
const sede2 = new SedesHospitales(2, "Almagro", "Pediatraia, Cardiologia, Cirugia General", "10:00hs a 22:00hs")
const sede3 = new SedesHospitales(3, "Centro", "Pediatraia, Angiologia, Ginecologia", "00:00hs a 12:00hs")
const sede4 = new SedesHospitales(4, "Berazategui", "Pediatraia, Neurologia, Ortopedia", "15:00hs a 6:00hs")

let listasedes = [sede1, sede2, sede3, sede4]

let apartadoSedes = document.querySelector("#sedes")
let datosPersonales = document.querySelector("#datos")

class Registro{

    constructor(Nombre, Apellido, NumeroAsociado, Contraseña, Turno){
        this.Nombre = Nombre
        this.Apellido = Apellido
        this.NumeroAsociado = NumeroAsociado
        this.Contraseña = Contraseña
        this.Turno = Turno
    }
}

let pasiente;
let boton = document.querySelector("#pediTurno")
let boton1 = document.querySelector("#buscarSedes")
let boton2 = document.querySelector("#buscarDatos")
let botonClose = document.querySelector('#close')

let buttonIniciar = document.querySelector('#formularioInicio')
let buttonRegistrar = document.querySelector('#formularioRegistro')
let buttonCerrarSecion = document.querySelector('#IDcerrarsecion')

buttonIniciar.addEventListener('submit', (e) => {
    e.preventDefault()
    if (listausuarios.some( (x) => parseInt(document.querySelector("#numAsociado").value) == parseInt(x.NumeroAsociado) && document.querySelector("#IDpassword").value == x.Contraseña)) {
        userIniciado = listausuarios.find( (x) => parseInt(document.querySelector("#numAsociado").value) == parseInt(x.NumeroAsociado))
        alert("Bienvenido, " + userIniciado.Nombre)
        buttonIniciar.reset()
        formState()
    }
    else{
        alert("Numero de asociado o contraseña incorrecta")
    }
    if (usuario != null) {
        buttonIniciar.reset()
        formState()
    }
})

buttonRegistrar.addEventListener('submit', (e) => {
    e.preventDefault()
    let usuarioRegistrado = new Registro(document.querySelector("#IDnombre").value, document.querySelector("#IDapellido").value, document.querySelector("#IDnumAsociado").value, document.querySelector("#IDpasswordR").value, "NO")
    let cond = true
    listausuarios.forEach(auxuser =>{
        if (auxuser.NumeroAsociado == usuarioRegistrado.NumeroAsociado) {
            cond = false
        }
    })
    if (cond) {
        listausuarios.push(usuarioRegistrado)
        buttonRegistrar.reset()
        alert('Te as registrado con exito')
    }
    else{
        alert("Numero de asociado ya existente")
    }
})

buttonCerrarSecion.addEventListener('click', () =>{
    if (userIniciado != null) {
        userIniciado = null
        formState()
        if (cont == 1) {
            for (let index = 1; index < 5; index++) {
                let element = document.querySelector('#sede' + index)
                apartadoSedes.removeChild(element)
            }
        }
        let elementDatos = document.querySelector('#plantilla')
        datosPersonales.removeChild(elementDatos)
        document.getElementById("buscarSedes").disabled = false
    }
    else{
        alert("No hay una secion iniciada anteriormente")
    }
})

function formState() {
    if (userIniciado != null) {
        document.querySelector("#IDpassword").disabled = true
        document.querySelector("#numAsociado").disabled = true
        document.querySelector("#aceptarTurno").disabled = true
        document.querySelector("#pediTurno").disabled = false
        document.querySelector("#buscarDatos").disabled = false
    }
    else{
        document.querySelector("#IDpassword").disabled = false
        document.querySelector("#numAsociado").disabled = false
        document.querySelector("#aceptarTurno").disabled = false
        document.querySelector("#pediTurno").disabled = true
        document.querySelector("#buscarDatos").disabled = true
    }
}

boton1.addEventListener('click', () =>{
    listasedes.forEach(contsedes => {
        apartadoSedes.innerHTML += `
        <div id="sede${contsedes.id}" class="sedesCard">
            <p class="titulo">${contsedes.Localizacion}</p>
            <p>Areas: ${contsedes.Areas}</p>
            <p>Horarios: ${contsedes.Horarios}</p>
        </div>
        `
    })
    cont = 1
    boton1.disabled = true
})

boton.addEventListener('click', () => {
    if (userIniciado.Turno == "NO") {
        listausuarios.forEach(user => {
            if (user.numAsociado == userIniciado.numAsociado) {
                user.Turno = "SI"
                alert("El turno fue validado")
            }
        })
    }
    else{
        alert("El pasiente cuenta con un turno vigente")
    }
})

boton2.addEventListener('click', () =>{
    datosPersonales.innerHTML = `
    <div id="plantilla">
        <h2>${userIniciado.Nombre} ${userIniciado.Apellido}</h2>
        <p>Numero de asociado: ${userIniciado.NumeroAsociado}</p>
        <p>Turno pendiente: ${userIniciado.Turno}</p>
    </div>
    `
})

botonClose.addEventListener('click', () => {
    buttonRegistrar.reset()
})

