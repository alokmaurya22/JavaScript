// Immediately Invoked Function Expression (IIFE)

//Istant call function for execution
(function db_connect() {
    //Named IIFE
    console.log("DB Connected")
})(); //semicolun need for end of execution


// IIFE call in arrow function
((name) => {
    //Unnamed IIFE
    console.log(`DB connected ${name}`);

})("Alok");