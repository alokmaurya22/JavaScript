//  AFTER ES6
class User {
    constructor(username, email, pass) {
        this.username = username;
        this.email = email;
        this.pass = pass;
    }
    encryptPassword() {
        return `${this.pass}abc`
    }
    changeUserName() {
        return `${this.username.toUpperCase()}`
    }
}

const userone = new User("Alok", "Alok@qwer", "123")
console.log(userone.encryptPassword());
console.log(userone.changeUserName());


/// Behind the scene
function Users(username, email, pass) {
    this.username = username;
    this.email = email;
    this.pass = pass;
}
Users.prototype.encryptPassword = function () {
    return `${this.pass}abc`
}
Users.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}`
}

const usertwo = new Users("Alok", "Alok@qwer", "123")
console.log(usertwo.encryptPassword());
console.log(usertwo.changeUserName());
