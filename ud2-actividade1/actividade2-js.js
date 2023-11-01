const prompt=require("prompt-sync")({sigint:true});
let idade = parseInt(prompt('Cantos anos tes?'));

if (idade >= 0 && idade <= 12) {
    console.log("neno")
} else if (idade >= 13 && idade <= 18) {
        console.log("adolescente")
    } else if (idade >= 19 && idade <= 30) {
            console.log("xoven")
        } else if (idade >= 31 && idade <= 64) {
                console.log("adulto")
            } else if (idade >= 65 && idade <= 100) {
                    console.log("xubilado")
                } else if (idade < 0 || idade > 100) {
                    console.log("erro")
}


