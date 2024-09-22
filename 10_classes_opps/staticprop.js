class User {
    constructor(username) {
        this.username = username
    }

    logme() {
        console.log(`Username : ${this.username}`);

    }
    static createID() {
        return "123"
    }
}

const alok = new User("Alok")
//console.log(alok.createID())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("iphone", "i@phone.com")
iphone.logme();
console.log(iphone.createID()); // *