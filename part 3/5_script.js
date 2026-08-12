let str1 = "Roshni";
let str2 = "Rani";
console.log(str1[2]);
console.log(str2.length);



// template literals
let specialstring = 'This is a template literal $(1+2+3)';
// console.log(typeof specialstring);
console.log(specialstring);

// escape character  /n
let a="Rani \n Sahu";   // next line
let b="Rani \t Sahu";    // tab line
console.log(a);   
console.log(b);


let obj = {
    item : "pen",
    price : 20,
};

let output = 'the cost of ${obj.item} is ${obj.price} rupees';
console.log(output);

console.log("the cost of",obj.item, "is", obj.price, "rupees");

