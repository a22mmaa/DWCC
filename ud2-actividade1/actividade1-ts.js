console.log("Táboa do 9");
for (var i = 1; i < 10; i++) {
    console.log("9x" + i + "=" + 9 * i);
}
console.log("\nFibonacci");
var a = 0;
var b = 1;
var j = 1;
while (j < 10) {
    var c = a + b;
    console.log(c);
    a = b;
    b = c;
    j++;
}
console.log("\nEnteiro");
var n1 = prompt("Introduza un número: ");
var n2 = parseInt(n1);
if (n2 % 2 === 0) {
    console.log("É enteiro");
}
else {
    console.log("Non é enteiro");
}
