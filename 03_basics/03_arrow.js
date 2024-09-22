const user = {
    username: "Alok",
    price: 99,

    welcomeMassage: function () {
        console.log(`${this.username} welcome to websites `);
        console.log(this);

    }

}
// user.welcomeMassage()
// user.username = "Sam"
// user.welcomeMassage()

/*
function chai() {
    let username = "Alok"
    console.log(this.username); //this do not work in function it works only in objects
}
chai()
*/

/*
const chai = function () {
    let username = "Alok"
    console.log(this.username); //this do not work in function it works only in objects
}
chai()
*/

// ARROW FUNCTIONS 
/*syntex
    () => {}
 */

const chai = () => {
    let username = "Alok"
    console.log(this.username);
}
chai()

//Explicite return
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(2, 4));

// Implicite return
const addTwonum = (num1, num2) => num1 + num2

const addTwonum2 = (num1, num2) => (num1 + num2)

// object return

const addtwoObj = (num1, num2) => ({ username: "Alok" })
console.log(addtwoObj());



