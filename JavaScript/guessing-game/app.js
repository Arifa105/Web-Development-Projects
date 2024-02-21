const max = prompt("enter the max number");
//console.log(max);
//floor for roundoff
const random = Math.floor(Math.random() * max)+1;
console.log(random);
let guess = prompt("Guess the number");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("You are Right, Congrats!! Random number was right :", random);
        break;
    }else if(guess < random){
       guess = prompt("hint: Your number is too small.Please try again");
    }
    else{
        guess = prompt("hint: Your number is too large. Please try again"); 
    }

}