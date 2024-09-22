let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString())
console.log(typeof (myDate))

let myCreatedDate = new Date(2024, 0, 6, 6, 7) // monts starts from 0 in js
console.log(myCreatedDate.toString())

let newDate = new Date("2023-01-12")
console.log(newDate.toLocaleDateString())
console.log(newDate.getTime())
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

let myTimeStamp = Date.now()
console.log(myTimeStamp)


newDate.toLocaleString('default', {
    weakday: 'Long',
})
