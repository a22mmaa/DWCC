document.write("<h1>Exercicio 1 - TS</h1>");

document.write("<h2>Táboa do 9</h2>");
for (let i :number=1; i<10; i++) {
    document.write("9x"+i+"="+9*i);
}

document.write("<h2>Fibonacci</h2>");
let a :number = 0;
let b :number = 1;
let j :number = 1;
while  (j<10) {
    let c :number = a + b;
    document.createElement("p");
    document.write(c.toString());
    a = b;
    b = c;
    j++;
}

document.write("<h2>Enteiro</h2>");
    let n1:string = prompt("Introduza un número: ");
    let n2:number = parseInt(n1);
    if (n2 % 2 === 0) {
        document.write("É enteiro");
    } else {
        document.write("Non é enteiro");
    }