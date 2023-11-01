let idade :number = parseInt(prompt('Cantos anos tes?'));

switch (true) {
    case (idade >= 0 && idade <= 12):
        document.write("neno");
        break;
    case (idade >= 13 && idade <= 18):
        document.write("adolescente");
        break;
    case (idade >= 19 && idade <= 30):
        document.write("xoven");
        break;
    case (idade >= 31 && idade <= 64):
        document.write("adulto");
        break;
    case (idade >= 65 && idade <= 100):
        document.write("xubilado");
        break;
    default:
        document.write("erro");
        break;
}

