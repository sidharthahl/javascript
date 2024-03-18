const marvel_heros =["ironman","spiderman","thor"]
const dc=["batman","superman","flash"]

// marvel_heros.push(dc)       
// console.log(marvel_heros);  it forms another element that contain another array not a single array 

// also another method for this is

// const allheros = marvel_heros.concat(dc)
// console.log(allheros); // show in one array

// another alternate that is spread

const all_new_heros =[...marvel_heros,...dc]  // in it it is not an array all elements spread differently 
//console.log(all_new_heros);

const another_array=[1,2,3[4,5,6[7,8,9]]];
const real_another_array =another_array.flat(Infinity)
//console.log(another_array);


// if we download data from net then it can be in any form object,string,node list then there we can use array to ask its types and can change it

console.log(Array.isArray("sidharth")); // false means itis not an array ,, we can convert it as
//console.log(Array.from("sidharth"));  // it can convert it into array 
console.log(Array.from({name: "sidharth"})) // [] empty array

let score1 =100
let score2 =200
let score3 =300
console.log(Array.of(score1,score2,score3));
