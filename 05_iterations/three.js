// ARRAY SPECIFIC LOOPS

const myArray = [1, 2, 3, 4, 5, 6, 7, 8]

// FOR OF

for (const num of myArray) {
    //console.log(num);
}

// ARRAY USE
//Maps
const map = new Map()
map.set('IN', "India")
map.set('US', "United state of america")
map.set('Fr', "France")

for (const [key, value] of map) {
    console.log(key, ":- ", value);

}

/* OBJECTS ARE NOT ITERABLE IN FOROF LOOP
const myObject = {
    "game1": "NFS",
    "game2": "Spiderman",
}
for (const [key, value] of myObject) {
    console.log(key, ":- ", value);

}
   */ 