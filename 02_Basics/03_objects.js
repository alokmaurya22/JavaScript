// singleton
//Object.create // contructor methode
//object literals


const mySymbol = Symbol("key1")
const jsUser = {
    "Full Name": "Alok kumar maurya",
    [mySymbol]: "mykey1",
    name: "Alok",
    age: 22,
    location: "Ayodhya",
    email: "alok@gmail.com",
    isloggedin: false,
    lastLoginDays: ["MOnday", "saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["Full Name"]);
console.log(jsUser[mySymbol]);

jsUser.email = "alok@yahoo.com" //change

//Object.freeze(jsUser) //// for stop changes

console.log(jsUser)

jsUser.greeting = function () {
    console.log("Hello js user");
}
jsUser.greeting2 = function () {
    console.log(`Hello Js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());
