const conditionalSum = function(values, condition) {
  let array = [];
  let sum = 0;
  if (values.length === 0) {
    return 0;
  }
  if (condition === "even") {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        array.push(values[i]);
      }
    }
  }
  else if (condition === "odd") {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 1) {
        array.push(values[i]);
      }
    }
  }
  else {
    return "Please enter a valid condition";
  }
  if (array.length === 0) {
    return 0;
  }
  else {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));