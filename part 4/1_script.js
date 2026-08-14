// let marks_student1=10;
// let marks_student2=18;
// let marks_student3=80;

 /* let marks={
    stud1:18,
    stud2:20,
}   */

let marks= [10,20,30,40,50]
console.log(marks);
console.log("length of marks:",marks.length);
marks[0]=100;
console.log(marks[0]);
console.log(marks);
console.log(marks[3]);


let names=['Rani', 'roshni','pinku','piya','heena','payal'];
console.log(names[3]);
console.log(names);

//Looping over an Array---->>print all elements of an array
// using for loop
let names1=['Rani', 'roshni','pinku','piya','heena','payal'];

for (let i=0 ; i < names1.length ; i++){
    // console.log(names1[0]);
    console.log(names1[i]);
    // console.log(names1);
}
console.log("================================");

// for - of loop
let cities=['Raipur', 'Abhanpur','khorpa','kolar','Rajim','Mahasamund'];
for(let city of cities){
    console.log(city);
    
}