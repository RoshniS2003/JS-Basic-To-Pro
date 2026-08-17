/* function myFun() {
   console.log("Welcome to MCA class");
   console.log("we are learning JS.");
};
myFun();
myFun();   // redundancy se bachta hain(reduce)--->repeat  


// undefined paramater beacause no msg pass
function myFun(msg) {
  console.log(msg);
  
};
myFun(); */

function myFun(msg) {       // parameter
  console.log(msg);
  
};
  myFun("we are learning JS.");   // argument

  console.log("------------------->>>");
  
function myFun1(msg , n) {      
  console.log(msg * n);
  
};
  myFun1("we are learning JS." , 100);   // NaN (not a number)