console.log("\t\t task1");
var a = 26;
var b = 3;

while(b <= a) {
    a = a - b;
}
console.log("Ostacha = ", a);

console.log("\t\t task2");
var n = 42679;
var discharge = 0;
while(n > 1) {
    discharge =  n % 10
    console.log(discharge);
    n = n - discharge;
    n = n/10;
}

console.log("\t\t task3");
var a = 15;
var b = 20;
var sum = 0;
for(var i = a; a < b; a++) {
    sum += a;
}
console.log("Sum = ", sum);

console.log("\t\t task4");
var number = 6;
var factorial = 1;
for(var i = 1; i <= number; i++) {
    factorial *= i;
}
console.log("Factorial = ", factorial);

console.log("\t\t task5");
var value;
var array = [];
var summa = 0;
var i = 0;
do {
 value = prompt("Enter number: ");
array[i] = +value; 
console.log(array[i]);
 i++;
} 
while (value !== null && !isNaN(+value));

for (let i = 0; i < array.length; i++) {
 summa += array[i];
}
console.log("Summa = ", summa);

console.log("\t\t task6");
var a = 10;
var b = 15;
var counter = 1;
for( a; a <= b; a++) {
    for(var i = 1; i <= counter; i++ ) {
        console.log(a);
    }
    counter++;
}