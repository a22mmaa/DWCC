console.log("=== 1. 125/8 ===");
console.log("Se desprazar 1 bit (2^1) á dereita é como dividir entre 2, 2 bits (2^2) será como dividir entre 4 e 3 bits (2^3) será como dividir entre 8.");
let resultado1 = 125 >> 3;
console.log("Resultado: "+resultado1);

console.log("=== 2. 40x4 ===");
console.log("Se desprazar 1 bit (2^1) á esquerda é como multiplicar por 2, 2 bits (2^2) será como multiplicar por 4.");
let resultado2 = 40 << 2;
console.log("Resultado: "+resultado2);

console.log("=== 3. 25/2 ===");
console.log("Aplicamos a lóxica do exercicio 1.");
let resultado3 = 25 >> 1;
console.log("Resultado: "+resultado3);

console.log("=== 4. 10x16 ===");
console.log("Seguindo a lóxica do exercicio 2, desprazamos 4 bits: 2^4=16");
let resultado4 = 10 << 4;
console.log("Resultado: "+resultado4);