console.log(2 > 3)
console.log(2 > 1)

console.log("2" > 1) // js auto convert data types 

console.log(null > 0) //false
console.log(null == 0) // false
console.log(null >= 0) //true

console.log(undefined > 0) //false
console.log(undefined == 0) // false
console.log(undefined >= 0) //false

// strict check === (check value and datatype both without conversion)
console.log(2 === "2") //false