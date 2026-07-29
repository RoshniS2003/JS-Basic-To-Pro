let mode = "pink"  
let color;

if (mode === "dark") {
    color = "black";
}
else if (mode === "pink"){
    color = "pink";
}
else if (mode === "red"){
    color = "red";
}
else {
   color = "white";
}

console.log(color);


// one another example
let modee = "dark" 
if (modee === "dark") {
    console.log("mode:",modee);
    
}

// ternanry operator
// condition ? true output : fasle output
let age = 22;
let result = (age >= 18 ? "adult" : "not adult");
// age >= 18 ? console.log("adult") : console.log("not adult");
console.log("Result =", result);

// More Information go to MDN Docs