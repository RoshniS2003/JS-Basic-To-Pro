/* for a given array with marks of student -> [85,97,44,37,76,60]
find the average marks of the entire class */

let Marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let val of Marks) {
   sum = sum + val;
}
console.log(sum);

let avg = sum / Marks.length;
console.log(`avg marks of the class = ${avg}`);

console.log("====================================>>>>>>>>>");

/* for a given array with prices of 5 items -> [250,645,300,900,50]. All items have an offer of 
10% OFF on them. Change the array to store final price after applying offer. */

// 300 --->  300 Rs. / 10% off = 30% off --->> 300 - 30 --->> 270 Rs.
let items = [250, 645, 300, 900, 50]

for (let val of items) {
   console.log(val);
}

// iterations use
let items1 = [250, 645, 300, 900, 50]
let idx = 0;   //1
for (let val of items1) {
   console.log(`value at index ${idx} = ${val}`);  //3
   let offer = val / 10;
   items1[idx] = items1[idx] - offer;
   console.log(`value after offer = ${items1[idx]}`);
   idx++;   //2
}
console.log("------------------------------------>>>");


// for loop
let items2 = [250, 645, 300, 900, 50]

for (let i = 0; i < items2.length; i++) {
   let offer = items2[i] / 10;
   items2[i] -= offer;
   console.log(`value after offer = ${items2[i]}`);
}