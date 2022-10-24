"use strict" 
console.log("\t\t task1");
var calculator = {
    a : "",
    b : "",
    read: function() {
        this.a = prompt("Введіть значення а");
        this.b = prompt("Введіть значення b");
    },
    sum: function() {
        return parseInt(this.a) + parseInt(this.b);
    },
    mul: function() {
        return this.a * this.b;
    } 

};
calculator.read();
console.log("Sum = ", calculator.sum());
console.log("Mul = ", calculator.mul());