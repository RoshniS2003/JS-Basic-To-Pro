/* logical AND &&
logical OR ||
logical NOT ! */

let a=5;
let b=3;
cond1 = a > b;  // true
cond2 = a === 5;  // true
// cond2 = a === 6;
console.log("cond1 && cond2 =", cond1 && cond2);

c= cond1 = a < b;     // false
d= cond2 = a === 5;     // true
console.log("cond1 || cond2 =", c || d);

e= !(a>b); // false
console.log("!(a>b)=",e);
