console.log("Task 1");
var x = 1;
var y = 2;
var res1 = String(x) + String(y); 
console.log(res1); // "12"
console.log(typeof res1); // "string"

console.log("Task 2");
var res2 = !isNaN(x) + String(y);;
console.log(res2); // "true2"
console.log(typeof res2); // "string"

console.log("Task 3");
var res3 = Boolean(x + y); 
console.log(res3); // true
console.log(typeof res3); // "boolean"

console.log("Task 4");
var res4 = parseInt("xy"); 
console.log(res4); // NaN
console.log(typeof res4); // "number"
/**/