//   let myDate = new Date()
//   console.log(myDate);  // 2024-03-16T05:01.00.770Z
   
// console.log(myDate.toString())   // some different format

// to declare a new date we have 

// let myCreatedDate = new Date(2024 ,0 ,23)  // months in js start from 0 -> january
// console.log(myCreatedDate.toDateString());  // tues jan 23 2024


// +++++++++++++++++++ TIME STAMP ++++++++++++++++++++++++++

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // 1710566625645   ( these are milliseconds)

// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));
