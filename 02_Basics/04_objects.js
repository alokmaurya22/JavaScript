//const tinderUser = new Object() // singleton object
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isloggedin = false

////console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Alok",
            lastname: "Maurya"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = { ...obj1, ...obj2 } //spred methode
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    }, {
        id: 2,
        email: "a@gmail.com"
    }, {
        id: 3,
        email: "ds@gmail.com"
    }, {
        id: 4,
        email: "ads@gmail.com"
    }
]

userFind = users[1].email
//console.log(userFind);

//console.log(tinderUser);

//console.log(Object.keys(tinderUser))
//console.log(Object.values(tinderUser))
//console.log(Object.entries(tinderUser))

//console.log(tinderUser.hasOwnProperty('isloggedin'))



// Destructuring of objects

const course = {
    courseName: "Jsin hindi",
    price: 333,
    courseInstructor: "Hitesh"
}
const { courseInstructor: instructor } = course
console.log(instructor);
