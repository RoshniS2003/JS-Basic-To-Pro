// create an array to store companies

let company = ["Bloomberg" , "Microsoft", "Uber" , " Google", "IBM" , " Netflix"];
console.log(company);

//Remove the first company from the array
// company.shift();
company.splice(0, 1);
console.log(company);

// remove uber and add ola in its place
company.splice(2, 1 ," ola");
console.log(company);

// Add Amazon at the end
company.push("Amazon");
console.log(company);
