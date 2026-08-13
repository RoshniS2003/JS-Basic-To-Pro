/* Prompt the user to enter their full name. generate a username for them based on the input. 
 Start username with @,followed by their full name and ending with the fullname length. */

 let username1="Roshni"
 let  username2="@"
 let  username3=7
 let  username4= username2 + username1 + username3
 console.log(username4);
 

 // best method to code
 let fullName= prompt("Enter your name without spaces");
 let username="@" + fullName + fullName.length;
//  console.log(fullName);
console.log(username);
 