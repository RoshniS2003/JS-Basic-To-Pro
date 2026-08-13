// str are not change because string is immutable not changeable
// create a new string which is changeable
let str="Roshni"
str.toUpperCase()
console.log(str);

let str2="Roshni"
str2=str2.toUpperCase()
console.log(str2);

// new str is changeable 
let str1="Roshni"
let newstr=str1.toUpperCase()
console.log(newstr);

// trim
let str3="    Rani  Sahu    "
console.log(str3.trim());

// slice
let str4=" 0123456789"
console.log(str4.slice(4,7));

// concatenation
let str5="Roshni"
let str6="Rani"
let str7= str5 + str6
console.log(str7);
// console.log(str5.concat(str6));
console.log("Welcome to our MCA Group", str5 + str6);


let newS="rani" + 123
console.log(newS);


// replace
let str8="Roshni"
console.log(str8.replace("os","S"));
console.log(str8.charAt(2));

//not possible bec origin string not changeable
let str9="Rani"
str9[0] = "S"
console.log(str9);

// possible using replace method
let str10="Roshni"
console.log(str10.replace("hni","Sa"));

