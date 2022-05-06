const urlDecode = function(text) {
  let phrase = "";
  text = text.replaceAll("%20", " ")
  let newText = [];
  let url = {};
  for (i = 0; i < text.length; i++) {
    if (text[i] === "=" || text[i] === "&") {
      newText.push(phrase);
      newText.push(text[i]);
      phrase = "";
    }
    else {
      phrase += text[i];
    }
  }
  newText.push(phrase);

  for (let i = 0; i < newText.length; i++) {
    if (newText[i] === "=") {
      url[newText[i - 1]] = newText[i + 1];
    }
  }
  return url;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);