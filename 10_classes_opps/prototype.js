// let myName = "Alok   "

// console.log(myName.truelength());



let myHeros = ["thor", "spiderman", "ironman"]
let heropower = {
    thor: "hammer",
    spiderman: "sling",
    ironman: "suit",

    getSpiderPower: function () {
        console.log(`Spidey power is : ${this.spiderman}`);
    }
}


// Define a prototype for object , it will be  cerculate in all their childs [array, string, .....]
Object.prototype.alok = function () {
    console.log("Alok is present in all object.");
}
//heropower.alok() //object ✅
//myHeros.alok() //array ✅



// Define prototype for array so it can be used from parent (object).
Array.prototype.heyAlok = function () {
    console.log("Alok says hii.!");
}
//heropower.heyAlok() //Object ❌ 
//myHeros.heyAlok() // Array ✅



//INHERITENCE

const user = {
    username: "ALOK MAURYA",
    email: "ak@google.vom"
}
const teacher = {
    makeVideo: true,
}

const teachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: "Js Assignment",
    fulltime: true,
    __proto__: teachingSupport //get access of teachingsupport in TAsupport
}

// teacher.__proto__ = user; //old approch
Object.setPrototypeOf(teachingSupport, teacher) // new syntex


let anotherUserName = "Chai aur code    "
String.prototype.truelength = function () {
    console.log(`${this}`);
    console.log(`True lenght is : ${this.trim().length}`);
}
anotherUserName.truelength()
"Alok".truelength()
"icetea".truelength()