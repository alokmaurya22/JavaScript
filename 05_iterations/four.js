// FOR IN LOOP
// for in loop in object
const myObject = {
    js: "JavaScript",
    cpp: "C++",
    swift: "Swift"
}
for (const key in myObject) {
    //console.log(`${key} is used for ${myObject[key]}`);
}

// for in loop in array
const programming = ["js", "c", "cpp", "java", "kotlin"]
for (const key in programming) {
    console.log(programming[key]);
}
/*

// for in loop in map

// Map is not iterable using for in loop 

const map = new Map()
map.set('IN', "India")
map.set('US', "United state of america")
map.set('Fr', "France")

for (const [key, value] of map) {
    console.log(key, ":- ", value);

}
   */ 