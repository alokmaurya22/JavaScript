const user = {
    username: "Alok",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        console.log("USER DETAILS FOUND.");
        console.log("USERNAME: ", this.username);
        console.log(this);

    }
}
//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);


function usernew(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome, ${this.username}`);

    }
    return this;
}
const userOne = new usernew("Alok", 8, true)
const usertwo = new usernew("Golu", 4, false)
//console.log(userOne);
//console.log(usertwo);
console.log(userOne.constructor);