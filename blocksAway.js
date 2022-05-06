const blocksAway = function(directions) {
  let gainArray = [1];
  let stepArray = [];
  let position = {
      east: 0,
      north: 0
  };
  for (let i = 2; i < directions.length; i += 2) {
      if (directions[i] === directions[i - 2]) {
          gainArray.push(-1);
      }
      else gainArray.push(1);
  };
  for (let i = 1; i < directions.length; i += 2) {
      stepArray.push(directions[i]);
  };
  
  if (directions[0] === "right") {
      for (let i = 0; i < stepArray.length; i += 2) {
          position.east += (gainArray[i]*stepArray[i]);
      }
      for (let i = 1; i < stepArray.length; i += 2) {
          position.north += (gainArray[i]*stepArray[i]);
      }
  }
  else if (directions[0] === "left") {
      for (let i = 0; i < stepArray.length; i += 2) {
          position.north += (gainArray[i]*stepArray[i]);
      }
      for (let i = 1; i < stepArray.length; i += 2) {
          position.east += (gainArray[i]*stepArray[i]);
      }
  }
  return position;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));