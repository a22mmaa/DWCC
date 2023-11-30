var arrayPaisesTS = ["Galiza", "Portugal", "Brasil", "Angola", "Moçambique", "Cabo Verde", "Guiné Equatorial", "Guiné-Bissau", "São Tomé e Príncipe"];
// Amosa o número de elementos do Array.
function mostrarTotalTS(array) {
    console.log("Exercicio 1. N\u00FAmero elementos: ".concat(arrayPaisesTS.length));
}
mostrarTotalTS(arrayPaisesTS);
// Amosa todos os países.
function mostrarPaisesTS(array) {
    console.log("Exercicio 2. Mostrar todos os países: ");
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var pais = array_1[_i];
        console.log("\t".concat(pais));
    }
}
mostrarPaisesTS(arrayPaisesTS);
// Amosa todos os países en sentido inverso. Ollo, que o Array orixinal non quede modificado, é dicir, que non quede ordenado ao revés.
function mostrarPaisesInversoTS(array) {
    console.log("Exercicio 3. Mostrar todos os países en sentido inverso: ");
    for (var i = arrayPaisesTS.length - 1; i >= 0; i--) {
        console.log("\t".concat(array[i]));
    }
}
mostrarPaisesInversoTS(arrayPaisesTS);
// Engade un país ao comezo do Array.
function engadirInicioTS(array, item) {
    array.unshift(item);
}
engadirInicioTS(arrayPaisesTS, "Timor-Leste");
console.log("Volvemos chamar a función do exercicio 2 para ver como queda: ");
mostrarPaisesTS(arrayPaisesTS);
// Engade un país ao final do Array.
function engadirFinalTS(array, item) {
    array.push(item);
}
engadirFinalTS(arrayPaisesTS, "Macau");
console.log("Volvemos chamar a función do exercicio 2 para ver como queda: ");
mostrarPaisesTS(arrayPaisesTS);
// Elimina un elemento ao comezo do Array e indica cal foi.
function eliminarInicioIndicarTS(array) {
    return array.shift();
}
console.log("Exercicio 6. Item do inicio eliminado: ".concat(eliminarInicioIndicarTS(arrayPaisesTS)));
// Elimina un elemento ao final do Array e indica cal foi.
function eliminarFinalIndicarTS(array) {
    return array.pop();
}
console.log("Exercicio 7. Item final eliminado: ".concat(eliminarFinalIndicarTS(arrayPaisesTS)));
// Amosa o elemento que se atope na posición que che indique o usuario.
function mostrarPaisTS(array, posicion) {
    if (array[posicion] !== null && posicion < array.length) {
        console.log(array[posicion]);
    }
    else {
        console.log("Posición non encontrada. Probe con outra.");
    }
}
mostrarPaisTS(arrayPaisesTS, 60);
mostrarPaisTS(arrayPaisesTS, 5);
// Amosa a posición na que se atopa un elemento indicado polo usuario.
function mostrarPosicionTS(array, valor) {
    if (array.indexOf(valor) !== -1) {
        console.log(array.indexOf(valor));
    }
    else {
        console.log("Valor non encontrado. Probe con outro.");
    }
}
mostrarPosicionTS(arrayPaisesTS, "Galicia");
mostrarPosicionTS(arrayPaisesTS, "Galiza");
// Amosa os elementos que se atopan entre dúas posicións indicadas polo usuario.
function mostrarEntrePosicionsTS(array, posicion1, posicion2) {
    var erroPosicion1 = false;
    var erroPosicion2 = false;
    if (array[posicion1] === null || posicion1 > array.length) {
        erroPosicion1 = true;
        console.log("Posición 1 incorrecta.");
    }
    if (array[posicion2] === null) {
        erroPosicion2 = true;
        console.log("Posición 2 incorrecta.");
    }
    if (erroPosicion1 === false && erroPosicion2 === false) {
        var novoArray = array.slice(posicion1, posicion2);
        console.log(novoArray);
    }
}
console.log("Ambos correctos:");
mostrarEntrePosicionsTS(arrayPaisesTS, 1, 3);
console.log("Primeiro incorrecto:");
mostrarEntrePosicionsTS(arrayPaisesTS, 100, 3);
console.log("Segundo longo de máis:");
mostrarEntrePosicionsTS(arrayPaisesTS, 1, 300);
console.log("Primeiro correcto e segundo moi longo:");
mostrarEntrePosicionsTS(arrayPaisesTS, 100, 300);
