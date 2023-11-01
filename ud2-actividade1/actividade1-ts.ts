console.log("Táboa do 9");
for (let i :number=1; i<10; i++) {
    console.log("9x"+i+"="+9*i);
}

console.log("\nFibonacci");
let a :number = 0;
let b :number = 1;
let j :number = 1;
while  (j<10) {
    let c :number = a + b;
    console.log(c);
    a = b;
    b = c;
    j++;
}


console.log("\nEnteiro");
    let n1:string = prompt("Introduza un número: ");
    let n2:number = parseInt(n1);
    if (n2 % 2 === 0) {
        console.log("É enteiro");
    } else {
        console.log("Non é enteiro");
    }