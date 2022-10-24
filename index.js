"use strict"
console.log("task 1");
function mul() {
    var mul = 1;
    var counter = 0;
    for(var i = 0; i < arguments.length; i++) {
        if(typeof(arguments[i]) === "number") {
            mul *= arguments[i];
            counter++;
        }
    }
    if(counter > 0) {
        return mul;
    }
    else {
        return 0;
    }
}
console.log("Mul 1 = ", mul(1, "str", 2, 3, true)); // 6
console.log("Mul 2 = ", mul(null, "str", false, true)); // 0

console.log("task 2");
var country = {
    name: "Ukraine",
    language: "ukrainian",
    capital: {
        name: "Kyiv",
        population: 2907817,
        area: 847.66,
    },
};
function format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
}
format.call(country, "<", ">"); // "<Ukraine>"
format.apply(country, ["[", "]"]); // "[Ukraine]"
format.call(country.capital, '""', '""'); // ""Kyiv""
format.apply(country.capital, ['"', '"']); // "Kyiv"
