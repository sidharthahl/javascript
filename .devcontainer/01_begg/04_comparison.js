// console.log(2 > 1); ot true
// console.log(2 >=1); ot true
// console.log(2<1);   ot false
// console.log(2==1);  ot false
// console.log(2!=1);  ot true


// console.log("2">1); //true     ,automatically js convert string into number    
// console.log("02">1);  // true   ,but it is also suggest to not to compare two different datatypes
 
// console.log("sid"==10); // false
 
// console.log(null >0);   // false
// console.log(null == 0); // false
// console.log(null >=0);  // true     the reason is that an equality check == and comparisons > <>= <= work differently
//                         //          comparisons convert null to a number, treating it as 0.
//                         //          thats why null >=0 is true amd null > 0 is false. 
// console.log(undefined == 0); // false
// console.log(undefined > 0);  // false
// console.log(undefined < 0);  // false

/* in comparison operations == equality sign works differently and comparison sign works differently,comparison operator convret null into 0 */
 
// STRICT CHECK ===          it check its value also check datatypes.
console.log("2"=== 2);  // false
 