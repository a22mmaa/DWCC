let arrayPaises = ["Galiza", "Portugal", "Brasil", "Angola", "Moçambique", "Cabo Verde", "Guiné Equatorial", "Guiné-Bissau", "São Tomé e Príncipe"];

// Amosa o número de elementos do Array.

function mostrarTotal(array) {
    console.log(`Exercicio 1. Número elementos: ${arrayPaises.length}`);
}

mostrarTotal(arrayPaises);

// Amosa todos os países.

function mostrarPaises(array) {
    console.log("Exercicio 2. Mostrar todos os países: ")
    for (pais of array) {
        console.log(`\t${pais}`);
    }
}

mostrarPaises(arrayPaises);

// Amosa todos os países en sentido inverso. Ollo, que o Array orixinal non quede modificado, é dicir, que non quede ordenado ao revés.

function mostrarPaisesInverso(array) {
    console.log("Exercicio 3. Mostrar todos os países en sentido inverso: ")
    for (i=arrayPaises.length-1; i>=0; i--) {
        console.log(`\t${array[i]}`);
    }
}

mostrarPaisesInverso(arrayPaises);

// Engade un país ao comezo do Array.

function engadirInicio(array, item) {
    array.unshift(item);
}

engadirInicio(arrayPaises, "Timor-Leste");

console.log("Volvemos chamar a función do exercicio 2 para ver como queda: ")
mostrarPaises(arrayPaises);

// Engade un país ao final do Array.

function engadirFinal(array, item) {
    array.push(item);
}

engadirFinal(arrayPaises, "Macau");

console.log("Volvemos chamar a función do exercicio 2 para ver como queda: ")
mostrarPaises(arrayPaises);

// Elimina un elemento ao comezo do Array e indica cal foi.

function eliminarInicioIndicar(array) {
    return array.shift();
}

console.log(`Exercicio 6. Item do inicio eliminado: ${eliminarInicioIndicar(arrayPaises)}`);

// Elimina un elemento ao final do Array e indica cal foi.

function eliminarFinalIndicar(array) {
    return array.pop();
}

console.log(`Exercicio 7. Item final eliminado: ${eliminarFinalIndicar(arrayPaises)}`);

// Amosa o elemento que se atope na posición que che indique o usuario.

function mostrarPais(array, posicion) {
    if (array[posicion] !== null && posicion < array.length) {
        console.log(array[posicion])
    } else {
        console.log("Posición non encontrada. Probe con outra.")
    }
    
}

mostrarPais(arrayPaises, 60);
mostrarPais(arrayPaises, 5);

// Amosa a posición na que se atopa un elemento indicado polo usuario.

function mostrarPosicion(array, valor) {
    if (array.indexOf(valor) !== -1) {
        console.log(array.indexOf(valor))
    } else {
        console.log("Valor non encontrado. Probe con outro.")
    }
}

mostrarPosicion(arrayPaises, "Galicia");
mostrarPosicion(arrayPaises, "Galiza");

// Amosa os elementos que se atopan entre dúas posicións indicadas polo usuario.

function mostrarEntrePosicions(array, posicion1, posicion2) {
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

console.log("Ambos correctos:") + mostrarEntrePosicions(arrayPaises, 1, 3);
console.log("Primeiro incorrecto:") + mostrarEntrePosicions(arrayPaises, 100, 3);
console.log("Segundo longo de máis:") + mostrarEntrePosicions(arrayPaises, 1, 300);
console.log("Primeiro correcto e segundo moi longo:") + mostrarEntrePosicions(arrayPaises, 100, 300);