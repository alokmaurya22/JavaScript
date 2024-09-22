const userEmail = "alok@ai"
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Dont have email");
}

/*
FALSY VALUES 
False , 0 , -0 , BigInt 0n, "", null, undefind, NaN

Thruthy Values
"0", "...", " ", [], {}, function(){}, 
*/

// CHECK ARRAY EMPTY
const myArr = []
if (myArr.length === 0) {
    console.log("Array is empty");
}


//CHECK OBJECT EMPTY
const myObj = {}
if (Object.keys(myObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??):null undefined 
let val1 = 5 ?? 10 //5
let val2 = null ?? 10 //10
let val3 = undefined ?? 10 //10
console.log(val3);


// terniary operator
//condition ? true : false;
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less Then 80") : console.log("Morethen 80");
;
