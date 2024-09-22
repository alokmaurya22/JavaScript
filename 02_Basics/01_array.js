const myArr = [1, 2, 3, 4, 5, 6, 9]
const myHearos = ["abjhs", "dfsd", "sdfsd", "lhh"]
const myNewArr = new Array(3, 4, 6, 2, 5, 7, 4, 2)
//console.log(myNewArr[3])

myArr.push(89)
//console.log(myArr)

myArr.pop()
//console.log(myArr)

myArr.unshift(90)

myArr.shift()
//console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

const myStringArr = myArr.join()
//console.log(myStringArr)

// slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log("C ", myArr)

