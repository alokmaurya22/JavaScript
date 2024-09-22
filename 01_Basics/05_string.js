const name = "Alok"
const age = " 23"

// console.log(name + age)

console.log(`Hello my name is ${name} and my age is ${age}`)

const gameName = new String('Alokgame')
console.log(gameName[0]);
console.log(gameName.__proto__);

//strings prototype methode
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("k"));

const newstring = gameName.substring(0, 2)
console.log(newstring)

const anotherString = gameName.slice(-3, 1)
console.log(anotherString);

const stringName = "     Alok    "
console.log(stringName);
console.log(stringName.trim())

const url = "https://alok.com/alok maurya"
//const url = "https://alok.com/alok%20maurya"
console.log(url.replace(' ', '%20'))

let myName = "Alok-kumar-maurya"
console.log(myName.split('-'))