console.log("\t\t task1");
function pow(x, n) {
    var pow = 1;
    for(var i = 0; i < n; i++) {
         if(n >= 2) {
            pow *= x;
        }
        else {
            console.log("X = ", x);
            break;
        }
    }
    console.log(pow);
}
pow(2, 3);
//==============================================================
console.log("\t\t task2");
function min() {
    var min = 0;
    for(var i = 0; i < arguments.length; i++) {
        if(arguments[i] < arguments[i + 1]) {
            min = arguments[i];
        }
    }
    console.log(min);
}
min(5, 2, 1, 0);
//==============================================================
console.log("\t\t task3");
function sign(x) {
    if(x < 0) {
        console.log(-1);
    }
    else if(x = 0) {
        console.log(0);
    }
    else {
        console.log(1);
    }
}
sign(-5);
//==============================================================
console.log("\t\t task4");
function calc(a, b, op) {
    switch(op) {
        case 1:
            console.log(a - b);
            break;
            case 2:
                console.log(a * b);
                break;
                case 3:
                    console.log(a / b);
                    break;
    }
    if(op > 3) {
        console.log(a + b);
    }
}
calc(3, 6, 4);
//==============================================================
console.log("\t\t task5");
function digitN(k, n) {
    var k0 = k;
    var counter = 0;
    while(k > 0) {
        k = Math.floor(k / 10);
        counter++;
    }
    if(counter < n) {
        console.log(-1);
        return 0;
    }
    k = k0;
    
    for(var i = 0; i < n; i++) {
    var reply = Math.floor(k % 10);
    k0 = Math.floor(k / 10);
    k = k / 10;    
    }
    console.log(reply);   
}
digitN(1234, 3);