let formulario = document.forms[0];

let nome = document.getElementById('nome');
let apelidos = document.getElementById('apelidos');
let idade = document.xestionjs.idade;
let nif = document.forms[0].elements[3];
let email = document.forms[0][(type = 'email')];
let provincias = document.getElementsByTagName('select');
let data = document.querySelector('#data');
let telefono = document.getElementById('telefono');
let hora = document.querySelector('input[id="hora"]');
let submit = document.forms[0].elements[9];

let intentos = 0;
let mensaxes = [];
let divErros = document.getElementById('erros');
let divIntentos = document.getElementById('intentos');

const iniciarIntentos = () => {
    setCookie('cookieIntentos', intentos, 30);
};

// ADICIONAMOS EVENTOS

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
});

formulario.addEventListener('submit', comprobar, false);

nome.addEventListener('blur', toMaius, false);
apelidos.addEventListener('blur', toMaius, false);

nome.addEventListener(
    'blur',
    function () {
        this.style.backgroundColor = 'lightgreen';
    },
    false
);

// FUNCIÓNS

function setCookie(nomeCookie, valor, dias) {
    let dataExpiracion = new Date();
    dataExpiracion.setTime(
        dataExpiracion.getTime() + dias * 24 * 60 * 60 * 1000
    );
    let expira = 'expires=' + dataExpiracion.toUTCString();
    document.cookie = nomeCookie + '=' + valor + ';' + expira + ';path=/';
}

function comprobar() {
    console.log('a');
    validarDni(nif);
    imprimirErros();
    intentos++;
    imprimirIntentos();
}

function toMaius() {
    this.value = this.value.toUpperCase();
}

function validarDni(obxecto) {
    let dni = obxecto.value.toLowerCase();
    if (dni.match(/^\d{8}-?\w{1}$/)) return true;
    escribirMensaxes('DNI incorrecto');
}

function imprimirErros() {
    if (mensaxes) {
        for (let mensaxe of mensaxes) {
            console.log(mensaxe);
        }
    } else {
        console.log('Todo correcto');
    }

    if (mensaxes) {
        for (let mensaxe of mensaxes) {
            divErros.innerHTML += mensaxe;
        }
    }

    divErros.style.backgroundColor = 'lightcoral';
}

function escribirMensaxes(mensaxeNova) {
    let coincidencia = false;
    for (let mensaxe of mensaxes) {
        if (mensaxe == mensaxeNova) {
            coincidencia = true;
        }
    }
    if (coincidencia == false) {
        mensaxes.push(mensaxeNova);
    }
}

function imprimirIntentos() {
    divIntentos.innerHTML = 'Número de intentos: ' + intentos;
    divIntentos.style.backgroundColor = 'lightyellow';
}
