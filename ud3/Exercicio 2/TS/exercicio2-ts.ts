/*
1. Días até final de curso
Amosar o número de días que quedan dende hoxe (día actual) ata final de curso (por exemplo, o 25 de Xuño).
*/

const hoxe: Date = new Date();
const finDeCurso: Date = new Date(2024, 5, 25);
const diasRestantes: number = Math.ceil(
    (finDeCurso.getTime() - hoxe.getTime()) / (1000 * 60 * 60 * 24)
);
let diasRestantesStr: string = `${diasRestantes}`;
document.write(diasRestantesStr);
document.write("<br/><br/>");

/*
2. Data aniversario
Pide a data do teu aniversario (non fai falla o ano) e saque todos os anos no que o teu aniversario vai caer en fin de semana dende este ano ata o ano 2100.
*/

let anosFinDeSemana: number[] = [];
let dataDeAniversarioStr: String;
dataDeAniversarioStr = prompt('Introduza a data (DD/MM/AAAA)') || '';

let [dia, mes, ano] = dataDeAniversarioStr.split('/').map(Number);

let dataDeAniversario: Date = new Date(ano, mes - 1, dia);

let mesAniversario = dataDeAniversario.getMonth();
let diaAniversario = dataDeAniversario.getDate();

for (let ano: number = 2023; ano <= 2100; ano++) {
    let data = new Date(ano, mesAniversario, diaAniversario);

    let diaSemana = data.getDay();

    if (diaSemana === 0 || diaSemana === 6) {
        anosFinDeSemana.push(ano);
    }
}

for (let ano of anosFinDeSemana) {
    document.write(`${ano}<br/>`);
}
document.write("<br/><br/>");

/*
3. Diferentes formatos de data
Amosa a data actual en diferentes formatos segundo o valor que meta o
usuario por parámetro (usa un switch):
1. 17/02/2016
2. Mércores, 17 de febreiro de 2016
3. Wednesday, February 17, 2016.
*/

let dataActual: Date = new Date();
let data: string;

let formatoData: string =
    prompt(
        'En que formato desexa ver a data? (a) 17/02/2016, b) Mércores, 17 de febreiro de 2016, c) Wednesday, February 17, 2016)'
    ) || '';
switch (formatoData!.toLowerCase()) {
    case 'a':
        data = `${dataActual.getDate()}/${
            dataActual.getMonth() + 1
        }/${dataActual.getFullYear()}`;
        break;
    case 'b':
        data = `${dataActual.toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })}`;
        break;
    case 'c':
        data = `${dataActual.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })}`;
        break;
    default:
        data = 'Formato non válido';
}
document.write(data);
document.write("<br/><br/>");

/*
4. Diferentes formatos de hora
Amosa a hora actual en diferentes formatos segundo o valor que meta o
usuario por parámetro (usa un switch):
1. 14:35:07 (hora detallada con minutos e segundos)
2. 02:35 PM ou 02:35 AM (hora con minutos e AM ou PM segundo sexa antes
ou despois de mediodía).
*/

let dataActual2 = new Date();
let horaActual = dataActual2.getHours();
let minutoActual = dataActual2.getMinutes();
let segundosActual = dataActual2.getSeconds();
let hora;

let formatoData2 = parseInt(
    prompt('En que formato desexa ver a hora? (1) 14:35:07, b) 02:35 PM)') || ''
);

switch (formatoData2) {
    case 1:
        hora = `${horaActual}:${minutoActual}:${segundosActual}`;
        break;
    case 2:
        if (horaActual >= 0 && horaActual <= 12) {
            hora = `${horaActual}:${minutoActual} AM`;
        } else {
            horaActual -= 12;
            hora = `${horaActual}:${minutoActual} PM`;
        }
        break;
    default:
        hora = 'Formato non válido';
}
document.write(hora);
document.write("<br/><br/>");
