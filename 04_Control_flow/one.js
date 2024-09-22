// IF Control
const balance = 1000;
if (balance > 500) {
    console.log("Test");
}


// implicit
if (balance > 400) console.log("test");

if (balance < 500) {
    console.log("Less then");
} else if (balance < 750) {
    console.log("Less then 750");
}
else {
    console.log("Somethig something");

}


const loggedinfromgoogle = true
const loggedinfromemail = true
const userloggedin = true;
const debitcard = true;
if (loggedinfromemail || loggedinfromgoogle) {
    if (userloggedin && debitcard & 2 == 2) {
        console.log("Allow to shoping.");
    }
}