//Guess a number from 0 to 10
let prompt = require("prompt-sync")();
number = Math.floor(Math.random() * 11);

let counter = 1;
let result;
let resultArr = [];
const numberGuesser = function (num) {
  let answer = prompt("Guess a number: ");

  for (let i = 0; i < resultArr.length; i++) {
    if (answer === resultArr[i]) {
      console.log("You have already guessed that!")
    }
  }
  resultArr.push(answer);

  console.log(Number(answer));
  if (isNaN(answer)) {
    counter += 1;
    console.log("Not a number!");
  }
  if (answer < num) {
    counter += 1;
    console.log("Too Low!");
 
  }
  else if (answer > num) {
    counter += 1;
    console.log("Too High!");

  }
  else if (answer === num) {
    counter += 1;
    console.log("Correct!");
  }
  return answer;
}

while (result != number) {
  result = numberGuesser(number);
}

console.log(`You got it! Took you ${counter} attempts!`);