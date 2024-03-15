// const score = 400
// console.log(score);   // 400

// const balance = new Number(100)
// console.log(balance); // [number: 100]

// console.log(balance.toString().length);   // 3   its type change to string

// console.log(balance.toFixed(2));  // 100.00

// const othernumber = 23.9999
// console.log(othernumber.toPrecision(3));   // 24.00 

// const hundereds = 10000000
// console.log(hundereds.toLocaleString()); // 10,000,000   usa 
// console.log(hundereds.toLocaleString('en-IN'));  // 1,00,00,000   indian style




// ++++++++++++++++++++++++++++++++++++ MATHS library +++++++++++++++++++++++++++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-4));  // 4  only negative values convert into positive not positive into negative 
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.8));  // it always select upper limit in roundoff
// console.log(Math.floor(4.2)); // it always select lower limit in roundoff
// console.log(Math.min(3 , 4 , 5 ,6 ));  // to take minimum value in array
// console.log(Math.max(4 , 5 , 7 ,4));  // to take maximum value in array

console.log(Math.random());  // its value lies btw 0 and 1 always
console.log((Math.random()*10) + 1); // we add plus 1 to ensure the value will not 0
  
       //  what if we define lower and maximum values also =>

const min = 10 ;
const max = 20 ;

console.log(Math.floor(Math.random()*(max - min +1)) + min)