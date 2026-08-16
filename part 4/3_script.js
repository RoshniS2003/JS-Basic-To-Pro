let foodItems = ["panner", "Tomato", "potato", "papaya"];
console.log(foodItems);


// push operation
foodItems.push("banana", "Apple");
console.log("list of Food Items is : ", `${foodItems}`);

// pop operation
foodItems.pop();
console.log("list of Food Items is : ", `${foodItems}`);

console.log(foodItems);
let DeletedItems = foodItems.pop();
console.log(foodItems);
console.log("deleted", `${DeletedItems}`);

// tostring()
let foodItems1 = ["panner", "Tomato", "potato", "papaya"];
console.log(foodItems1);
console.log(foodItems1.toString());
console.log(foodItems1);

let marks = [10, 20, 30, 40];
console.log(marks);
console.log(marks.toString());
console.log(marks);


// concat()--->> joins multiple array and return results
let surname = ["sahu", "gupta", "kaur", "singh"];
let othersname = ["sinha", "verma"];
let othersname1 = ["shukla"];

let IndianSname = surname.concat(othersname, othersname1);
console.log(IndianSname);

// unshift() --->> add to start (work like push)
// shift() ---->> delete from start and return(worl like pop)
let cities = ["raipur", "abhanpur"];
cities.unshift("rajim");
console.log(cities);

let cities1 = ["raipur", "abhanpur"];
let val = cities1.shift();
console.log("deletd",val);

// slice()--->> returns a piece of the array (original array not change)
let drName= ["Dr.Gupta" , "Dr.Singh" , "Dr. Sinha", "Dr.kaur" ,"Dr.Sahu"]
console.log(drName);
console.log(drName.slice(2,4));


// splice(): change original array(add , remove , replace)
let num = [1,2,3,4,5,6,7,8];
// num.splice(2 , 2, 111 , 122);      // 2 is index, at index 2 & 3 value delete means 3 and 4 value delete , 111 and 122 value added
// console.log(num);

// Add element
// num.splice(2 ,0 , 111);
// console.log(num);

// delete element
// num.splice(5 , 1);
// console.log();

// replace element
num.splice(3 , 1 ,111);
console.log(num);


