let idade1 :string = prompt('Cantos anos tes?');
let idade2 :number = parseInt(idade1);

if (idade2 >= 0 && idade2 <= 12) {
    console.log("neno")
} else {
    if (idade2 >= 13 && idade2 <= 18) {
        console.log("adolescente")
    } else {
        if (idade2 >= 19 && idade2 <= 30) {
            console.log("xoven")
        } else {
            if (idade2 >= 31 && idade2 <= 64) {
                console.log("adulto")
            } else {
                if (idade2 >= 65 && idade2 <= 100) {
                    console.log("xubilado")
                } else {
                    console.log("erro")
                }
            }
        }
    }
}

switch (idade2) {
    case (0-12): console.log("neno"); break;
    case (13-18): console.log("adolescente"); break;
    case (19-30): console.log("xoven"); break;
    case (31-64): console.log("adulto"); break;
    case (65-100): console.log("xubilado"); break;
    default: console.log("erro");break;
}
