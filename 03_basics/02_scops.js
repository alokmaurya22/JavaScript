let a = 10;
const b = 30;
var c = 40;

console.log(a);
console.log(b);
console.log(c);

// closure
function one() {
    const username = "alok"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)
    two()
}
one()