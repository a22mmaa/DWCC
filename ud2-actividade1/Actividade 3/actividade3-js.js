document.write("<h1>Exercicio 3 - JS</h1>");

document.write("<h2>1. 125/8</h2>");

document.write("<p>Se desprazar 1 bit (2^1) á dereita é como dividir entre 2, 2 bits (2^2) será como dividir entre 4 e 3 bits (2^3) será como dividir entre 8.</p>");

let resultado1 = 125 >> 3;
document.write("<p>Resultado: "+resultado1+"</p>");


document.write("<h2>2. 40x4</h2>");

document.write("<p>Se desprazar 1 bit (2^1) á esquerda é como multiplicar por 2, 2 bits (2^2) será como multiplicar por 4.</p>");

let resultado2 = 40 << 2;
document.write("<p>Resultado: "+resultado2+"</p>");


document.write("<h2>3. 25/2</h2>");

document.write("<p>Aplicamos a lóxica do exercicio 1.</p>");

let resultado3 = 25 >> 1;
document.write("<p>Resultado: "+resultado3+"</p>");


document.write("<h2>4. 10x16</h2>");

document.write("<p>Seguindo a lóxica do exercicio 2, desprazamos 4 bits: 2^4=16</p>");

let resultado4 = 10 << 4;
document.write("<p>Resultado: "+resultado4+"</p>");