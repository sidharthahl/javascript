// primitive  (all were call by value means when we copy them then their original data will be given by copy not by reference, so all the changes will be done in copy only mot in original)

// 7 types : string , number , boolean , null , undefined(variable declared and memory space is declared but value is not assigned), symbol , bigint
            
        const score= 100       //number datatype
        const scorevalue =100  //number datatype not need to specify float

        const isLoggedIn = false // boolean value
        const outsideTemp = null // empty 
        let userEmail;  // undefined

        const id = symbol('123')          // symbol datatype
        const anotherId = symbol('123')   // it is property of symbol having same values in both  but different 
        console.log(id===anotherId);  // false 
         
        const bigNumber = 2222121212121212123332332323n    // bigint datatype





// reference type or non primitive =>
    // inka datatypes mostly function hi bola jata h !!
// arrays , objects , function(return datatype== object function)

/* IS JAVASCRIPT A DYNAMICALLY TYPED OR STATICALLY TYPED */
   // js is dynamically typed because t you don't need to specify the data type of a variable when you declare it,
 

   const heros = ["shaktimaan" ,"naagraj" ,"doga"]    //array datatype
  let myobj = {
    name:"sidharth",    // object datatype
    age : "23"
   }
   const myFunction = function(){
    console.log("hello world");            // myFunction ka return datatype -- function object 
   }





   