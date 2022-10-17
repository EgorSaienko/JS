
console.log("Task 1");
function digitSum(k) {
    var k0 = k;
    k0 = Math.floor(k % 10); 
    k = k / 10;
    if(k < 1) {
        return 1;
    }
    else {
        return k0 + digitSum(k);
    }
    
}
var k = 123;
console.log("Sum = ", digitSum(k));

