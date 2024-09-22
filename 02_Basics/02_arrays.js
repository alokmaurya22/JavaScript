const marval_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marval_heros.push(dc_heros)
console.log(marval_heros);
console.log(marval_heros[3][2]);

heros = marval_heros.concat(dc_heros)
console.log(heros);


//spred operator
const all_new_heros = [...marval_heros, ...dc_heros]
console.log(all_new_heros);

myarr2 = [1, 2, 3, [4, 5], 9, [4, 9, 8, [6, 8, 1, 3], 5], 7]
const real_myarr2 = myarr2.flat(Infinity)
console.log(real_myarr2);

console.log(Array.isArray("Alok")); // false
console.log(Array.from("Alok")); //[ 'A', 'l', 'o', 'k' ]
console.log(Array.from({ name: "Alok" })); //[]


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));