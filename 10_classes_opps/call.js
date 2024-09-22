function SetUsername(username) {
    //Complex db calls check username is valid or not
    this.username = username
    console.log("Set username called. ");

}

function createUser(username, email, pass) {
    SetUsername.call(this, username)

    this.email = email;
    this.pass = pass;
}

const chai = new createUser("Chai", "chai@123", "123")
console.log(chai);
