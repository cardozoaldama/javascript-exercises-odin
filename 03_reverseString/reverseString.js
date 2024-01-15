const reverseString = function(text) {
  let finalText = '';
  for(let i = 1; i <= text.length; i++)
  {
    finalText += text.at(-i);
  }
  return finalText;
};

// Do not edit below this line
module.exports = reverseString;
