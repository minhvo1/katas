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

//Pascal
const pascalCase = function (input) {
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
  string = string[0].toUpperCase() + string.slice(1);
  return string;  
}

//Snake
const snakeCase = function(input) {
  let string = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      string += "_";
    }
    else {
      string += input[i];
    }
  }
  return string;
}

//Kebab
const kebabCase = function(input) {
  let string = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      string += "-";
    }
    else {
      string += input[i];
    }
  }
  return string;
}

//Title
const titleCase = function (input) {
  let string = "";
  let temp = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      temp = input[i+1].toUpperCase();
      string += input[i];
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
  string = string[0].toUpperCase() + string.slice(1);
  return string;  
}

//Vowel
const vowelCase = function (input) {
  let string = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
      string += input[i].toUpperCase();
    }
    else {
      string += input[i];
    }
  }
  return string;
}

//Consonant
const consonantCase = function (input) {
  let newInput = input.toUpperCase();
  let string = "";
  for (let i = 0; i < newInput.length; i++) {
    if (newInput[i] === 'A' || newInput[i] === 'E' || newInput[i] === 'I' || newInput[i] === 'O' || newInput[i] === 'U') {
      string += newInput[i].toLowerCase();
    }
    else {
      string += newInput[i];
    }
  }
  return string;
}

//Upper
const upperCase = function (input) {
  return input.toUpperCase();
}

//Lower
const lowerCase = function (input) {
  return input.toLowerCase();
}



//Case Maker
const makeCase = function (input, option) {
  let result = input;
  let optionArray = [];
  if (typeof option === 'string') {
    optionArray = option.split();
  }
  else {
    optionArray = option;
  }
  for (let i = 0; i < optionArray.length; i++) {
    if (optionArray[i] === "camel") {
      result = camelCase(result);
    }
    else if (optionArray[i] === "pascal") {
      result = pascalCase(result);
    }
    else if (optionArray[i] === "snake") {
      result = snakeCase(result);
    }
    else if (optionArray[i] === "kebab") {
      result = kebabCase(result);
    }
    else if (optionArray[i] === "title") {
      result = titleCase(result);
    }
    else if (optionArray[i] === "vowel") {
      result = vowelCase(result);
    }
    else if (optionArray[i] === "consonant") {
      result = consonantCase(result);
    }
    else if (optionArray[i] === "upper") {
      result = upperCase(result);
    }
    else if (optionArray[i] === "lower") {
      result = lowerCase(result);
    }
  }
  return result;
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));