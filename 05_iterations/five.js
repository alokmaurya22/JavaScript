// FOR EACH LOOP
const coding = ["js", "ruby", "java", "python", "kotlin", "cpp",];

// Using call back function
coding.forEach(function (item) {
    //console.log(item);
})



// using arrow function
coding.forEach((item) => {
    //console.log(item);

})



// By using external/another function
function printMe(item) {
    //console.log(item);
}
coding.forEach(printMe)



// For each loop takes it multiple thing with it self
coding.forEach(function (item, index, myArray) {
    //console.log(item, index, myArray);
})



// Objects into an array

const myCoding = [
    {
        language: "javascript",
        file: ".js",
    }, {
        language: "java",
        file: ".java",
    }, {
        language: "c++",
        file: ".cpp",
    }
]
myCoding.forEach((item) => {
    console.log(item.language);
    console.log(`${item.language} file is ${item.file}`);
})