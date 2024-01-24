var arrayPaisesTS: string[] = ["Galiza", "Portugal", "Brasil", "Angola", "Moçambique", "Cabo Verde", "Guiné Equatorial", "Guiné-Bissau", "São Tomé e Príncipe"];

// Amosa o número de elementos do Array.

function mostrarTotalTS(array) {
    console.log(`Exercicio 1. Número elementos: ${arrayPaisesTS.length}`);
}

mostrarTotalTS(arrayPaisesTS);

// Amosa todos os países.

function mostrarPaisesTS(array) {
    console.log("Exercicio 2. Mostrar todos os países: ")
    for (let pais of array) {
        console.log(`\t${pais}`);
    }
}

mostrarPaisesTS(arrayPaisesTS);

// Amosa todos os países en sentido inverso. Ollo, que o Array orixinal non quede modificado, é dicir, que non quede ordenado ao revés.

function mostrarPaisesInversoTS(array) {
    console.log("Exercicio 3. Mostrar todos os países en sentido inverso: ")
    for (let i: number=arrayPaisesTS.length-1; i>=0; i--) {
        console.log(`\t${array[i]}`);
    }
}

mostrarPaisesInversoTS(arrayPaisesTS);

// Engade un país ao comezo do Array.

function engadirInicioTS(array, item) {
    array.unshift(item);
}

engadirInicioTS(arrayPaisesTS, "Timor-Leste");

console.log("Volvemos chamar a función do exercicio 2 para ver como queda: ")
mostrarPaisesTS(arrayPaisesTS);

// Engade un país ao final do Array.

function engadirFinalTS(array, item) {
    array.push(item);
}

engadirFinalTS(arrayPaisesTS, "Macau");

console.log("Volvemos chamar a función do exercicio 2 para ver como queda: ")
mostrarPaisesTS(arrayPaisesTS);

// Elimina un elemento ao comezo do Array e indica cal foi.

function eliminarInicioIndicarTS(array) {
    return array.shift();
}

console.log(`Exercicio 6. Item do inicio eliminado: ${eliminarInicioIndicarTS(arrayPaisesTS)}`);

// Elimina un elemento ao final do Array e indica cal foi.

function eliminarFinalIndicarTS(array) {
    return array.pop();
}

console.log(`Exercicio 7. Item final eliminado: ${eliminarFinalIndicarTS(arrayPaisesTS)}`);

// Amosa o elemento que se atope na posición que che indique o usuario.

function mostrarPaisTS(array, posicion) {
    if (array[posicion] !== null && posicion < array.length) {
        console.log(array[posicion])
    } else {
        console.log("Posición non encontrada. Probe con outra.")
    }
    
}

mostrarPaisTS(arrayPaisesTS, 60);
mostrarPaisTS(arrayPaisesTS, 5);

// Amosa a posición na que se atopa un elemento indicado polo usuario.

function mostrarPosicionTS(array, valor) {
    if (array.indexOf(valor) !== -1) {
        console.log(array.indexOf(valor))
    } else {
        console.log("Valor non encontrado. Probe con outro.")
    }
}

mostrarPosicionTS(arrayPaisesTS, "Galicia");
mostrarPosicionTS(arrayPaisesTS, "Galiza");

// Amosa os elementos que se atopan entre dúas posicións indicadas polo usuario.

function mostrarEntrePosicionsTS(array, posicion1, posicion2) {
    let erroPosicion1 = false;
    let erroPosicion2 = false;
    if (array[posicion1] === null || posicion1 > array.length) {
        erroPosicion1 = true;
        console.log("Posición 1 incorrecta.")
    }
    if (array[posicion2] === null) {
        erroPosicion2 = true;
        console.log("Posición 2 incorrecta.")
    }
    if (erroPosicion1===false && erroPosicion2===false) {
        let novoArray = array.slice(posicion1, posicion2);
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