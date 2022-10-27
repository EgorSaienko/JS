"use strict"
console.log("\t\t task1");
console.log("\t1 part:");
/*Прив'яжіть функцію format() до об'єкта user.
Реалізуйте 2 версії поточного завдання за допомогою:
1. Анонімну функцію обгортку;
*/
var user = {
    name: "Tom",
    print: function(beginMsg, endMsg) {
        console.log(beginMsg + this.name + endMsg);
    }
};
function tomFormat(func) {
    func();
}
tomFormat(function() {
    user.print("<<<", ">>>");
});
//2. Метод bind().
console.log("\t2 part:");

var user = {
    name: "Tom",
    print: function(beginMsg, endMsg) {
        console.log(beginMsg + this.name + endMsg);
    }
};
var tomFormat = user.print.bind(user, "<<<", ">>>");
tomFormat(); 

console.log("\t\t task2");
function mul(a, b) {
    return a * b;
}
var doubleMul = mul.bind("", 2);  
var qudraMul = mul.bind("", 4);     
console.log("doubleMul = ", doubleMul(5)); // 10
console.log("qudraMul = ", qudraMul(5)); // 20

console.log("\t\t task3");
function bind(func, context) {
    return function() {
        var key = Date.now().toString();
        context[key] = func;
        var result = context[key]();
        delete context[key];
        return result;
    }
    var ConvertToString = func.bind();
}
function func() {
    console.log(this.name + " - " + this.age);
}
var user = {
    name: "Tom",
    age: 20,
};
var f = bind(func, user);
f(); // "Tom – 20"
