const marvel_heros =["ironman","spiderman","thor"]
const dc=["batman","superman","flash"]

// marvel_heros.push(dc)       
// console.log(marvel_heros);  it forms another element that contain another array not a single array 

// also another method for this is

// const allheros = marvel_heros.concat(dc)
// console.log(allheros); // show in one array

// another alternate that is spread

const all_new_heros =[...marvel_heros,...dc]  // in it it is not an array all elements spread differently 
console.log(all_new_heros);

