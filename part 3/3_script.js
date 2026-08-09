// for - of loop is used in Array and string
let str="Ranniii"
size=0;
for (let val of str) {
    console.log("val=",val);   
    size++;
}
console.log("string size =",size);


// for - in loop
let student = {
   name : "rani",
   age : 20,
   cgpa : 70,
   ispass : true,
};

for (const key in student) {
   console.log("key :", key, ", value =", student[key]);
   
}