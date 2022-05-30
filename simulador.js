let listausuarios = []
let userIniciado
let cont
let userCheck

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

let almacenado = JSON.parse(localStorage.getItem("iniciado"))
if (almacenado) {
    userIniciado = almacenado
    Toastify({
        text: "Bienvenido , " + userIniciado.Nombre,
        duration: 2000,
        newWindow: true,
        gravity: "top", 
        position: "right", 
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    formState()
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
        if (document.getElementById("recordarSecion").checked) {
            localStorage.setItem("iniciado", JSON.stringify(userIniciado))
        }
        Toastify({
            text: "Bienvenido , " + userIniciado.Nombre,
            duration: 2000,
            newWindow: true,
            gravity: "top", 
            position: "right", 
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
          }).showToast();
        buttonIniciar.reset()
        formState()
    }
    else{
        Toastify({
            text: "Numero de asociado o contraseña incorrecta",
            duration: 2000,
            newWindow: true,
            gravity: "top", 
            position: "center", 
            style: {
              background: "linear-gradient(to right, #ff5f6d, #ffc371)",
            },
          }).showToast();
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
        Swal.fire({
            icon: 'success',
            title: 'Increible',
            text: 'Te as registrado con exito',
          })
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Atencion!',
            text: 'Numero de asociado ya existente',
          })
    }
})

buttonCerrarSecion.addEventListener('click', () =>{
    if (userIniciado != null) {
        userIniciado = null
        localStorage.removeItem("iniciado")
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
        Toastify({
            text: "Inicie secion primero",
            duration: 2000,
            newWindow: true,
            gravity: "top", 
            position: "left", 
            style: {
                background: "linear-gradient(to right, #ff5f6d, #ffc371)",
            },
          }).showToast();
    }
})

function formState() {
    if (userIniciado != null) {
        document.querySelector("#IDpassword").disabled = true
        document.querySelector("#numAsociado").disabled = true
        document.querySelector("#aceptarTurno").disabled = true
        document.querySelector("#recordarSecion").disabled = true
        document.querySelector("#pediTurno").disabled = false
        document.querySelector("#buscarDatos").disabled = false
    }
    else{
        document.querySelector("#IDpassword").disabled = false
        document.querySelector("#numAsociado").disabled = false
        document.querySelector("#aceptarTurno").disabled = false
        document.querySelector("#recordarSecion").disabled = false
        document.querySelector("#pediTurno").disabled = true
        document.querySelector("#buscarDatos").disabled = true
    }
}

boton1.addEventListener('click', () =>{
    fetch('sedes.json')
    .then((response) => response.json())
    .then(sedes => {
        sedes.forEach((cadasede) => {
            apartadoSedes.innerHTML += `
            <div id="sede${cadasede.id}" class="sedesCard">
            <p class="titulo">${cadasede.Localizacion}</p>
            <p>Areas: ${cadasede.Areas}</p>
            <p>Horarios: ${cadasede.Horarios}</p>
        </div>
            `
        })
    })
    /*listasedes.forEach(contsedes => {
        apartadoSedes.innerHTML += `
        <div id="sede${contsedes.id}" class="sedesCard">
            <p class="titulo">${contsedes.Localizacion}</p>
            <p>Areas: ${contsedes.Areas}</p>
            <p>Horarios: ${contsedes.Horarios}</p>
        </div>
        `
    })*/
    cont = 1
    boton1.disabled = true
})

boton.addEventListener('click', () => {
    if (userIniciado.Turno == "NO") {
        listausuarios.forEach(user => {
            if (user.numAsociado == userIniciado.numAsociado) {
                user.Turno = "SI"
                Toastify({
                    text: "El turno fue validado",
                    duration: 2000,
                    newWindow: true,
                    gravity: "top", 
                    position: "center", 
                    style: {
                      background: "linear-gradient(to right, #00b09b, #96c93d)",
                    },
                  }).showToast();
            }
        })
    }
    else{
        Toastify({
            text: "El pasiente cuenta con un turno vigente",
            duration: 2000,
            newWindow: true,
            gravity: "top", 
            position: "center", 
            style: {
                background: "linear-gradient(to right, #ff5f6d, #ffc371)",
            },
          }).showToast();
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

