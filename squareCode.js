const squareCode = function(message) {
  let newMessage = "";
  let code = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i] != " ") {
      newMessage += message[i];
    }
  }
  cols = Math.ceil(Math.sqrt(newMessage.length));
  for (let i = 0; i < cols; i++) {
    let phrase = "";
    for (let j = i; j < newMessage.length; j += cols) {
      phrase += newMessage[j];
    }
    code = code + phrase + " ";
  }

  return code.slice(0, -1);
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));