const myNum = [1, 2, 3]

/*
let myTotal = myNum.reduce(function (acc, current) {
    console.log(`acc is ${acc} current is ${current}`);

    return acc + current
}, 0)
console.log(myTotal);
*/

const myTotal = myNum.reduce((acc, current) => acc + current, 0)
console.log(myTotal);




const shopping_cart = [
    {
        item: "js Course",
        price: 233
    }, {
        item: "mobilr Course",
        price: 2343
    }, {
        item: "eng Course",
        price: 3
    }
]
let priceToPay = shopping_cart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);