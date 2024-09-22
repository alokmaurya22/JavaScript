class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username is : ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, pass) {
        super(username)
        this.email = email;
        this.pass = pass;

    }
    addCourse() {
        console.log(`New course was add by : ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@google.com", "123")
chai.addCourse()

const masalaChai = new User("masalaChai");
masalaChai.logMe(); clearInterval

//console.log(chai === masalaChai)
console.log(chai instanceof User)