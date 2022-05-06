//Camel
const camelCase = function(input) {
  let string = "";
  let temp = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      temp = input[i+1].toUpperCase();
    }
    else if (temp != "") {
      string += temp;
      temp = "";
    }
    else {
      string += input[i];
      temp = "";
    }
  }
  return string;
};
console.log(camelCase('this is a string'))