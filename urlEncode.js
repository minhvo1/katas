const urlEncode = function(text) {
  let newUrl = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      newUrl += "%20";
    }
    else {
      newUrl += text[i];
    }
    
  }
  return newUrl;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));