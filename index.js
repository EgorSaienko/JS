console.log("\t\t task1");
var a = 0;
if(a > 0) {
    a = ++a;
}  
else if(a < 0) {
    a = a - 2;
}   
else {
    a = 10;
}
console.log(a);

console.log("\t\t task2");
var b = 0;
if(b > 0) {
    if(b % 2 == 0) {
        console.log("Додатне парне число");
    }
    if(b % 2 !== 0) {
        console.log("Додатне непарне число");
    }
}
else if(b < 0) {
    if(b % 2 == 0) {
        console.log("Від'ємне парне число");
    }
    if(b % 2 !== 0) {
        console.log("Від'ємне непарне число");
    }
}
else {
    console.log("Нульове число");
}
console.log("Задане число - ", b);

console.log("\t\t task3");
var a = 10;
var b = 10;
var c = 10;
var d = 5;

if(a == b && b == c){
  console.log("Порядковий номер 4");
}
if(a == b && b == d){
  console.log("Порядковий номер 3");
}
if(a == c && c == d){
  console.log("Порядковий номер 2");
}
if(b == c && c == d){
  console.log("Порядковий номер 1");
}