const score = 400;
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length) //3
console.log(balance.toFixed(2)) //100.00 precision value

const otherNumber = 233.34
console.log(otherNumber.toPrecision(4))

const numberHund = 1000000;
console.log(numberHund.toLocaleString()) // as us standerd
console.log(numberHund.toLocaleString('en-IN')) // as india standerd


/// ++++++++++ MATHS ++++++

console.log(Math)
console.log(Math.abs(-4)) //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.6)); //5
console.log(Math.floor(4.6)); //4
console.log(Math.min(4, 5, 7, 2, 5, 8))
console.log(Math.max(4, 5, 7, 2, 5, 8))

console.log(Math.random());
console.log((Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min)