let idade = parseInt(prompt('Cantos anos tes?'));

if (idade >= 0 && idade <= 12) {
    document.write("neno")
} else if (idade >= 13 && idade <= 18) {
        document.write("adolescente")
    } else if (idade >= 19 && idade <= 30) {
            document.write("xoven")
        } else if (idade >= 31 && idade <= 64) {
                document.write("adulto")
            } else if (idade >= 65 && idade <= 100) {
                    document.write("xubilado")
                } else if (idade < 0 || idade > 100) {
                    document.write("erro")
}


