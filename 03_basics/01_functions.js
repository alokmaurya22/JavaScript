function sayMyName() {
    console.log("Alok kumar maurya");
}
//sayMyName()

function addTwoNum(num1, num2) {
    sum = num1 + num2;
    console.log(sum);
    return sum;
}
const result = addTwoNum(89, 45)
// console.log(result)


// function loginUserMessage(username = "alok") { // for default value
function loginUserMessage(username) {
    if (!username) {
        console.log("Please enter a user name :");
        return
    }
    return `${username} just loggged in`
}
const usermsg = loginUserMessage("Alok")
// console.log(usermsg)




// Infinite parameter

function calculateCartPrice(...amount) {
    return amount;
}
totalAmount = calculateCartPrice()
console.log(totalAmount);


// object pass in function
const user = {
    name: "Alok",
    age: 22
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.name} and age is ${anyObject.age}`);
}
// handleObject(user)
handleObject({
    name: "Rahul",
    age: 20
})


// Array pass in array
const myNewArray = [2, 4, 6, 3, 5]
function returnSecondVal(myArray) {
    return myArray[1]
}
console.log(returnSecondVal(myNewArray))
console.log(returnSecondVal([232, 23442, 42331, 2311, 31]))