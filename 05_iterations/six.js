const coding = ["js", "ruby", "java", "python", "kotlin", "cpp",];

/// For each does not returns value
const values = coding.forEach((item) => {
    // console.log(item);
})
//console.log(values);


// Filter returns values 
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//let new_nums = myNum.filter((num) => num > 4)  // number is greter then four\
let new_nums = myNum.filter((num => {
    return num > 4
}))
//console.log(new_nums);


// explicitaly return value by for each
const newNum = []
myNum.forEach((num) => {
    if (num > 4) {
        newNum.push(num)
    }
})
//console.log(newNum)


