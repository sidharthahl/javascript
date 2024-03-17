const myArr = [0,1,2,3,4,]
const myArr2 =new Array(1,2,3,4,5) // other way to declare 
//console.log(myArr[0]);

// methods

// myArr.push(5)   // it add the values in array
// myArr.pop()     // to remove last values
// myArr.unshift(9) // to add values in initial
// myArr.shift()   // to remove initial value

//console.log(myArr.includes(4))  // true     to ask question if number present in array or other in true or false
//console.log(myArr.indexOf(9))  // -1   because it is not present in array if it is present then it follows index 

// const newArr = myArr.join()  // binds the array into 0,1,2,3,4 instead of [0,1,2,3,4] and change type of into string 
// console.log(newArr);
// console.log(typeof newArr)  // string

// console.log(myArr);

 // +++++++++++++++++++ SLICE OR SPLICE +++++++++++++++

 console.log("A",myArr)
 const myn1 = myArr.slice(1,3)
 console.log(myn1); // 1,2  slice includes starting number and upto first of end number 
 console.log("B",myArr);
 const myn2 = myArr.splice(1,3)
 console.log("C",myArr); // [0,4]
 console.log(myn2); // 1,2,3 splice include starting number to end number it also manipulate(change) the original array if 1,2,3 is ans then original array is [0,4]
 

