// inside console
// function sum(a , b){
//     console.log(a + b);
// }

function sum(a, b) {
    // local variables---->>>block scope means val present inside the function block
    s = a + b;
    return s;
}
let result = sum(3, 2);
// console.log(a);  // not possible beacuse A is defined inside function block
console.log("Sum of two no. =", result);


//Multiple Function
function sub(a, b) {
    s = a - b;
    return s;
}
function mul(a, b) {
    m = a * b;
    return m;
 }   // this method is wrong and we use arrow function


 const ArrSum = (m , p) => {
    console.log(m * p);
    // return m * p;
 }; // open the console and write ArrSum or arrSum(3,6);

const name = () =>{
    console.log("Roshni");
}   // open the console and write name()


