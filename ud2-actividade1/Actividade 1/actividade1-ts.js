document.write("<h1>Exercicio 1 - TS</h1>");
document.write("<h2>Táboa do 9</h2>");
for (var i = 1; i < 10; i++) {
    document.write("9x" + i + "=" + 9 * i);
}
document.write("<h2>Fibonacci</h2>");
var a = 0;
var b = 1;
var j = 1;
while (j < 10) {
    var c = a + b;
    document.createElement("p");
    document.write(c.toString());
    a = b;
    b = c;
    j++;
}
document.write("<h2>Enteiro</h2>");
var n1 = prompt("Introduza un número: ");
var n2 = parseInt(n1);
if (n2 % 2 === 0) {
    document.write("É enteiro");
}
else {
    document.write("Non é enteiro");
}
