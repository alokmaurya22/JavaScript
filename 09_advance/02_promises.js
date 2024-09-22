const promiseOne = new Promise(function (resolve, reject) {
    // DO AN ASYNC TASK
    //DB calls,cryptography, newtwork
    setTimeout(function () {
        console.log('Async task is completed .')
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("Promise consumed.");

})

////2nd

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task two");
        resolve()

    }, 1000)
}).then(function () {
    console.log("AYNC two resolved");

})


//promise 3 ... rsolve passes parameter or data
const promisethree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "chai", email: "abc@example.com" })
    }, 1000)
})
promisethree.then(function (user) {
    console.log(user);

})


// promise4
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "abc123", pass: "123456" })
        } else {
            reject("Something went wromg.")
        }
    }, 2000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((Myusername) => {
    console.log(Myusername);
}).catch(function (MYerror) {
    console.log(MYerror)
}).finally(() => console.log("Promise is resolved or rejected."))



//promise 5
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", pass: "123456" })
        } else {
            reject("ERROR : js went wromg.")
        }
    }, 2000)
})
async function consumePromiseFive() {
    try {
        const responce = await promiseFive
        console.log(responce)
    } catch (error) {
        console.log(error)
    }
};
consumePromiseFive();


// GET DATA FROM API CALL USING PROMISES AND AWAIT FUNCTIONS
// METHOD 1.
/*
async function GetAllUsers() {
    try {
        const responce = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await responce.json()
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    }
}
GetAllUsers()
*/

//METHOD 2.

fetch("https://api.github.com/users/alokmaurya22")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log("ERROR IS:", error));
