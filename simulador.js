let listapacientes = []

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

let apartadoSedes = document.getElementById("sedes")

class Pasiente{

    constructor(Nombre, Apellido, NumeroAsociado, Turno){
        this.Nombre = Nombre
        this.Apellido = Apellido
        this.NumeroAsociado = NumeroAsociado
        this.Turno = Turno
    }

}

let pasiente;
let boton = document.getElementById("aceptarTurno")
let boton1 = document.getElementById("buscarSedes")
let boton2 = document.getElementById("pediTurno")

function buttonState()
{
    if (document.getElementById("nombre").value && document.getElementById("apellido").value && document.getElementById("numAsociado").value) {
        document.getElementById("aceptarTurno").disabled = false
    }
    else{
        document.getElementById("aceptarTurno").disabled = true
    }
}

function Extras() {
    document.getElementById("buscarSedes").disabled = false
    document.getElementById("pediTurno").disabled = false
    document.getElementById("eliminarTurno").disabled = false
    document.getElementById("nombre").value = null
    document.getElementById("apellido").value = null
    document.getElementById("numAsociado").value = null
}

boton.addEventListener("click", () => {
    pasiente = new Pasiente(document.getElementById("nombre").value, document.getElementById("apellido").value, ValidarNumeroAsociado(), null)
    listapacientes.push(pasiente)
    alert("Se a iniciado correctamente")
    Extras()
    console.log(listapacientes)
})


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
    boton1.disabled = true
})

function ValidarNumeroAsociado(){
    let numAsociado = document.getElementById("numAsociado").value
    if (listapacientes.some((x) => parseInt(x.NumeroAsociado) == parseInt(numAsociado)))
    {
        alert("Numero de asociado ya existente")
        throw new error('Ese numero de asociado ya existe');
    }

    return numAsociado
}
