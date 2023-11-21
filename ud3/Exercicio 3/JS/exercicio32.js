const contrasinal =
    prompt('Introduce contrasinal') || 'Contrasinal-por-defecto111';

if (contrasinal.length >= 8 && contrasinal.length <= 16) {
    document.write(
        'Perfecto! O contrasinal cumpre co tamaño obrigatorio.<br/>'
    );
} else {
    document.write(
        'Por favor, revisa o tamaño do contrasinal. Recorda que debe ter entre 8 e 16 caracteres.<br/>'
    );
}

if (contrasinal.match('(.*?)[A-Z](.*?)')) {
    document.write('Perfecto! Contén ao menos unha maiúscula.<br/>');
} else {
    document.write('Recorda que debe ter letras maiúsculas.<br/>');
}

if (contrasinal.match('(.*?)[a-z](.*?)')) {
    document.write('Perfecto! Contén ao menos unha minúscula.<br/>');
} else {
    document.write('Recorda que debe ter letras minúsculas.<br/>');
}

if (contrasinal.match('(.*?)[0-9](.*?)')) {
    document.write('Perfecto! Contén ao menos un número.<br/>');
} else {
    document.write('Recorda que debe ter ao menos un número.<br/>');
}

let caracteresEspeciais = '_-@#$%&…';
let erroCaracterEspecial = false;

for (charEs of caracteresEspeciais) {
    if (contrasinal.indexOf(charEs) !== -1) {
        document.write('Perfecto! Contén ao menos un carácter especial.<br/>');
        erroCaracterEspecial = true;
        break;
    }
}
if (erroCaracterEspecial == false) {
    document.write(
        'Recorda que debe ter ao menos un carácter especial (_, -, @, #, $, %, & ou …).<br/>'
    );
}
