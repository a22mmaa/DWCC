let nomeApelidos = "Manuel Magán Abollo";

let arrayDatos = [];

arrayDatos.push(nomeApelidos.length);
arrayDatos.push(nomeApelidos.replace(/\s/g,'').length);
arrayDatos.push(nomeApelidos.toLowerCase());
arrayDatos.push(nomeApelidos.toUpperCase());
arrayDatos.push(nomeApelidos.replace(' ',', '));


for (let dato of arrayDatos) {
    console.log(dato);
}


let contra = "gaegah4tywg";

