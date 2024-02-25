// Seleccionamos todos os campos cos que vamos traballar (tentando variar na forma de facelo)

const divErros = document.getElementById('errores');
const divIntentos = document.getElementById('intentos');

const formulario = document.querySelector('#formulario');
const enviar = document.getElementById('enviar');

const nombre = document.querySelector(
    'form[name="formulario"] input[name="nombre"]'
);
const apellidos = document.querySelector(
    'form[name="formulario"] input[name="apellidos"]'
);
const edad = document.querySelector('#formulario #edad');
const nif = formulario.elements[3];
const mail = formulario.querySelector('input[name="email"]');
const provincia = document.querySelector('#provincia');
const provincias = formulario.querySelectorAll('#provincia option');
const fecha = document.querySelector('input[name="fecha"]');
const telefono = document.getElementById('telefono');
const hora = document.querySelector('#hora');

let intentos = 0;

// Execución

comprobarBlur(nombre, validarTexto);
comprobarBlur(apellidos, validarTexto);

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    confirm('De verdade queres enviar?');
    divErros.innerHTML = '';
    intentos++;
    divIntentos.innerHTML = `Intentos de envío del formulario: ${intentos}`;
    comprobar(nombre, validarTexto);
    comprobar(apellidos, validarTexto);
    comprobar(edad, validarIdade);
    comprobar(nif, validarNif);
    comprobar(mail, validarMail);
    comprobar(provincia, validarLista, provincias);
    comprobar(fecha, validarData);
    comprobar(telefono, validarTlfn);
    comprobar(hora, validarHora);
});

enviar.addEventListener('click', function () {});

// Funcións útiles para o conxunto

function validarTexto(campo) {
    if (campo.value != '') return true;
}

function validarIdade(campo) {
    valor = parseInt(campo.value);
    if (!isNaN(valor)) {
        if (valor > 0 && valor < 105) {
            return true;
        }
    }
}

function validarNif(campo) {
    /*
    Explicación do patrón de regex:
        - /^      Inicio da cadea
        - \d{8}   8 díxitos seguidos
        - -       Guión
        - [A-z]   Letra mínuscula ou maiúscula entre A e Z
        - $/      Fin da cadea
    */
    if (campo.value.match(/^\d{8}-[A-z]$/)) return true;
}

function validarMail(campo) {
    /*
    Explicación do patrón de regex:
        - /^                Inicio da cadea
        - (\w|\.|-){1,50}   Secuencia de letras, `_`, `-` ou `.`. Debe aparecer     calquera deles ao menos 1 vez e como máximo 50. Poderíamos ter usado + para indicar que mínimo unha vez, pero este sitúa o máximo en infinito, e podería producir problemas de memoria.
        - @                 Debe estar continuado polo símbolo @
        - (\w|\.|-){1,50}   Cadea igual que a anterior.
        - \.                Continuación de un punto, `.`.
        - (com|gal|net|es)  Lista de posibilidades para o dominio. Nun exemplo real esta debería ser moito máis ampla.
        - $/                Fin da cadea
    */
    if (
        campo.value
            .toLowerCase()
            .match(/^(\w|\.|-){1,50}@(\w|\.|-){1,50}\.(com|gal|net|es)$/)
    )
        return true;
}

function validarLista(campo, opcions) {
    let match = false;

    opcions.forEach((opcion) => {
        if (campo.value != 0 && campo.value === opcion.value) {
            match = true;
        }
    });

    return match;
}

function validarData(campo) {
    /*
    Explicación do patrón de regex:
        - /^        Inicio da cadea
        - \d{n}     Pídense n díxitos. Para aceptar que fosen 1 ou 2 sería \d{1,2}.
        - [0-9]{n}  Pídense n díxitos. Entendo de cara a un código na vida real sería mellor usar sempre a mesma expresión en ambas partes, pero é só para probar.
        - $/        Fin da cadea
        - Sobre o uso de 2 días opcións, para `-` e `/`: sei que podería usar [-|\/], pero deste modo daríanse por válidas expresións como 01-01/2000.
    */
    if (
        campo.value.match(/^\d{2}\/\d{2}\/\d{4}$/) ||
        campo.value.match(/^[0-9]{2}-[0-9]{2}-[0-9]{4}$/)
    )
        return true;
}

function validarTlfn(campo) {
    /*
    Explicación do patrón de regex:
        - /^        Inicio da cadea
        - \d{9}     Nove díxitos. 
        - $/        Fin da cadea
    */
    if (campo.value.match(/^\d{9}$/)) return true;
}

function validarHora(campo) {
    /*
    Explicación do patrón de regex:
        - /^                    Inicio da cadea
        - ([0-1]?[0-9]|2[0-3])  Opcións para a hora:
            - [0-1]?[0-9] Permite que se obvie a primeira parte, de modo que se acepte só a segunda parte, para que a hora sexa (por exemplo, 9:42). Pero tamén se admitirá 00:, 10, 14 etc.
            - 2[0-3] Esta segunda opción será comezando por 2 e despois un número entre 0 e 3: 20, 21, 22 ou 23.
        - :                     :
        - [0-5][0-9]            Minutos. De 00 a 59.
        - $/                    Fin da cadea
    */
    if (campo.value.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)) return true;
}

function comprobarBlur(campo, validarCallback, campos) {
    campo.addEventListener('blur', function () {
        if (validarCallback(campo, campos)) {
            campo.value = campo.value.toUpperCase();
            if (divErros.innerHTML == '<p>Produciuse un erro no campo Nombre.</p>' || divErros.innerHTML == '<p>Produciuse un erro no campo Apellidos.</p>') {
                divErros.innerHTML = '';
            }
        } else {
            campo.focus();
            if (divErros.innerText == '') {
                divErros.innerHTML =
                    '<p>Produciuse un erro no campo ' +
                    campo.id.charAt(0).toUpperCase() +
                    campo.id.slice(1) +
                    '.</p>';
            }
        }
    });
}

function comprobar(campo, validarCallback, campos) {
    if (validarCallback(campo, campos)) {
        campo.value = campo.value.toUpperCase();
        campo.style.backgroundColor = '#FFF';
    } else {
        campo.focus();
        campo.style.backgroundColor = 'rgb(255, 77, 77)';
        divErros.innerHTML +=
            '<p>Produciuse un erro no campo ' +
            campo.id.charAt(0).toUpperCase() +
            campo.id.slice(1) +
            '.</p>';
    }
}
