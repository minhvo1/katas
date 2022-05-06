const sumLargestNumbers = function(data) {
  let numOne = data[0];
  let indexOne = 0;
  if (data.length < 2) {
    return "Please enter an array with 2 or more numbers";
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i] === undefined || data[i] === NaN || data[i] === null || typeof data[i] !== "number") {
      return "Please enter a valid array";
    }
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i] > numOne) {
      numOne = data[i];
      indexOne = i;
    }
  }
  data.splice(indexOne, 1);
  let numTwo = data[0];
  let indexTwo = 0;
  for (let j = 0; j < data.length; j++) {
    if (data[j] > numTwo) {
      numTwo = data[j];
      indexTwo = j;
    }
  }
  return numOne + numTwo;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));