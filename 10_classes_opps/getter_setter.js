class User {
    constructor(email, pass) {
        this.email = email;
        this.pass = pass;
    }
    get pass() {
        // return this.pass.toUpperCase()// Maximum call stack size exceeded
        return this._pass.toUpperCase()
    }
    set pass(value) {
        // this.pass = value; // Maximum call stack size exceeded
        this._pass = value;
    }
}
const userOne = new User("alok@123", "abc")
console.log(userOne.pass);
