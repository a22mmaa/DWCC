/*
1. Días até final de curso
Amosar o número de días que quedan dende hoxe (día actual) ata final de curso (por exemplo, o 25 de Xuño).
*/
var hoxe = new Date();
var finDeCurso = new Date(2024, 5, 25);
var diasRestantes = Math.ceil((finDeCurso.getTime() - hoxe.getTime()) / (1000 * 60 * 60 * 24));
var diasRestantesStr = "".concat(diasRestantes);
document.write(diasRestantesStr);
document.write("<br/><br/>");
/*
2. Data aniversario
Pide a data do teu aniversario (non fai falla o ano) e saque todos os anos no que o teu aniversario vai caer en fin de semana dende este ano ata o ano 2100.
*/
var anosFinDeSemana = [];
var dataDeAniversarioStr;
dataDeAniversarioStr = prompt('Introduza a data (DD/MM/AAAA)') || '';
var _a = dataDeAniversarioStr.split('/').map(Number), dia = _a[0], mes = _a[1], ano = _a[2];
var dataDeAniversario = new Date(ano, mes - 1, dia);
var mesAniversario = dataDeAniversario.getMonth();
var diaAniversario = dataDeAniversario.getDate();
for (var ano_1 = 2023; ano_1 <= 2100; ano_1++) {
    var data_1 = new Date(ano_1, mesAniversario, diaAniversario);
    var diaSemana = data_1.getDay();
    if (diaSemana === 0 || diaSemana === 6) {
        anosFinDeSemana.push(ano_1);
    }
}
for (var _i = 0, anosFinDeSemana_1 = anosFinDeSemana; _i < anosFinDeSemana_1.length; _i++) {
    var ano_2 = anosFinDeSemana_1[_i];
    document.write("".concat(ano_2, "<br/>"));
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
var dataActual = new Date();
var data;
var formatoData = prompt('En que formato desexa ver a data? (a) 17/02/2016, b) Mércores, 17 de febreiro de 2016, c) Wednesday, February 17, 2016)') || '';
switch (formatoData.toLowerCase()) {
    case 'a':
        data = "".concat(dataActual.getDate(), "/").concat(dataActual.getMonth() + 1, "/").concat(dataActual.getFullYear());
        break;
    case 'b':
        data = "".concat(dataActual.toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }));
        break;
    case 'c':
        data = "".concat(dataActual.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }));
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
var dataActual2 = new Date();
var horaActual = dataActual2.getHours();
var minutoActual = dataActual2.getMinutes();
var segundosActual = dataActual2.getSeconds();
var hora;
var formatoData2 = parseInt(prompt('En que formato desexa ver a hora? (1) 14:35:07, b) 02:35 PM)') || '');
switch (formatoData2) {
    case 1:
        hora = "".concat(horaActual, ":").concat(minutoActual, ":").concat(segundosActual);
        break;
    case 2:
        if (horaActual >= 0 && horaActual <= 12) {
            hora = "".concat(horaActual, ":").concat(minutoActual, " AM");
        }
        else {
            horaActual -= 12;
            hora = "".concat(horaActual, ":").concat(minutoActual, " PM");
        }
        break;
    default:
        hora = 'Formato non válido';
}
document.write(hora);
document.write("<br/><br/>");
