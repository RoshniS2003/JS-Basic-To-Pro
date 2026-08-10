for (let i = 1; i <= 100; i++) {
    //    if (i % 2 !== 0) {
    if (i % 2 == 0) {
        console.log("Num=", i);

    }
}

//random game no.
let gameNum = 12;
let userNum = prompt("Enter the game number:");

while(userNum != gameNum){
   userNum = prompt ("You entered wrong number. Guess Again...");
}

console.log("Congraluations , you entered the right number");
