console.log("Táboa do 9");
for (let i=1; i<10; i++) {
    document.write("<p>9x"+i+"="+9*i+"</p>");
}

console.log("\nFibonacci");
let a = 0;
let b = 1;
let j = 1;
while  (j<10) {
    let c = a + b;
    document.write("<p>"+c+"</p>");
    a = b;
    b = c;
    j++;
}


console.log("\nEnteiro");
let n1 = prompt("Introduza un número: ");
let n2 = parseInt(n1);
if (n2 % 2 === 0) {
    document.write("<p>É enteiro</p>");
} else {
    document.write("<p>Non é enteiro</p>");
}