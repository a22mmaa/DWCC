// Código de validaciones del formulario

// Caracteres para usar nas validacións
const caracteresAlfabeticos = /^[a-zA-ZáéíóúñçÁÉÍÓÚÑÇ\s]+$/
const caracteresAlfanumericos = /^[a-zA-Z0-9áéíóúñçÁÉÍÓÚÑÇ\s]+$/
const regexMail = /^[a-zA-Z0-9]{1,50}@[a-zA-Z0-9]{1,50}\.(com|net|es|gal|org)$/

// Función para validar o nome
function validarNome(nome) {
    if (nome.match(caracteresAlfabeticos) && nome.length <= 20) {
        return true
    }
}

// Función para validar apelidos
function validarApelidos(apelidos) {
    if (apelidos.match(caracteresAlfabeticos) && apelidos.length <= 40)
        return true
}

// Función para validar o mail
function validarMail(mail) {
    if (mail.match(regexMail)) return true
}

// Función para validar usuario
function validarUsuario(usuario) {
    if (usuario.match(caracteresAlfanumericos) && usuario.length <= 20)
        return true
}

// Función para validar contrasinal
function validarContrasinal(contrasinal) {
    if (
        contrasinal.match(/^(.*?)[A-Z](.*?)$/) &&
        contrasinal.match(/^(.*?)[a-z](.*?)$/) &&
        contrasinal.match(/^(.*?)[0-9](.*?)$/) &&
        contrasinal.match(/^(.*?)(\.|\$|-|\||\/|\*|\?|\¿|\!|\¡|=)(.*?)$/) &&
        contrasinal.length >= 8
    )
        return true
}

// Función para validar teléfono
function validarTelefono(telefono) {
    if (telefono.length === 9) return true
}

// Función para validar o formulario, usando as funcións de validación individuais
function validarFormulario(nome, apelidos, correo, user, pass, telefono) {
    if (
        validarNome(nome) &&
        validarApelidos(apelidos) &&
        validarMail(correo) &&
        validarUsuario(user) &&
        validarContrasinal(pass) &&
        validarTelefono(telefono)
    )
        return true
}

/*
Cando o contido se cargue e se "envíe" o formulario,
seleccionaranse os valores dos campos, validarase o
formulario e enviaranse os datos.
*/
document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("formulario")
        .addEventListener("submit", function (event) {
            let nome = document.getElementById("nombre").value
            let apelidos = document.getElementById("apellidos").value
            let correo = document.getElementById("correo").value
            let user = document.getElementById("usuario").value
            let pass = document.getElementById("clave").value
            let telefono = document.getElementById("telefono").value

            event.preventDefault()
            if (
                validarFormulario(nome, apelidos, correo, user, pass, telefono)
            ) {
                enviarDatos()
            } else {
                alert("Os campos conteñen erros. Revíseos.")
            }
        })
})

// Envio de datos con XMLHttpRequest
function enviarDatos() {
    let peticion = new XMLHttpRequest()

    const divResposta = document.getElementById("info-respuesta")
    const zonaResposta = document.getElementById("respuesta-servidor")

    peticion.open("POST", "http://localhost/php/registrar.php", true)
    peticion.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
    )
    peticion.onreadystatechange = function () {
        if (peticion.readyState === XMLHttpRequest.DONE) {
            if (peticion.status === 200) {
                divResposta.style.display = "block"
                zonaResposta.innerHTML = peticion.responseText
            } else {
                alert("Erro no envío de datos")
            }
        }
    }

    peticion.send(
        "nombre=" +
            document.getElementById("nombre").value +
            "&" +
            "apellidos=" +
            document.getElementById("apellidos").value +
            "&" +
            "correo=" +
            document.getElementById("correo").value +
            "&" +
            "usuario=" +
            document.getElementById("usuario").value +
            "&" +
            "clave=" +
            document.getElementById("clave").value +
            "&" +
            "telefono=" +
            document.getElementById("telefono").value
    )
}
