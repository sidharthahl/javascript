// two types of memory we have =>
//       * STACK MEMORY(primitive type)=> in stack memory when we declare a variable we have a copy of that
//    *HEAP MEMORY(non primitive type)=>  in heap memory when we declare a variable we have its reference means when we change in it, it would change in main also
  

//  let myYoutubeName = "sidharthahl";
//  let anothername = myYoutubeName
//      anothername="chaiorcode"
//  console.log(myYoutubeName)  // sidharthahl
//  console.log(anothername)   // chaiorcode      because it copy the memory and then forward thats why it does not change in memory
   
 let userOne={
    email:"aaaa@",
    upi:"wwww"
 }
 let userTwo = userOne
  
 userTwo.email ="bbbbb@"
 console.log(userOne)        // bbbbbb@
 console.log(userTwo.email)  // bbbbbb@      because it take refferencial from main memory nad can change the value