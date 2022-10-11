console.log("\t\ttask 1");
function find() {
    var a = 8;
    var b = 2;
    return function() {
        var S, P;
        P = 2 * (a + b);
        S = a * b;
        console.log(" S = " + S + " P = " + P);
    }
}
var vidpow = find();
vidpow();
//=====================================================
console.log("\t\ttask 2");
function createArrayIterator(arr) {
    var i =-1;
    return function() {
        i = i + 1;
        return arr[i];
    }
}
 var arr = [5, 3, 7];
 var itr = createArrayIterator(arr);
 console.log(itr()); // 5
 console.log(itr()); // 3
 console.log(itr()); // 7
 console.log(itr()); // undefined
 
 //=====================================================
 console.log("\t\ttask 3");
 var arr = [];

for (var i = 0; i <= 2; i++) {
    (function(iLocal) {
        return (arr[iLocal] = function() {
            console.log(iLocal);
        })
    })(i);
}

arr[0](); // 0
arr[arr.length - 1](); // 2

