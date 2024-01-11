const repeatString = function(text, number) {
  let i = 1;
  finalText = '';
  if (number < 0)
  {
    return 'ERROR';
  }
  else if (number == 0 || text.length == '')
  {
    return '';
  }
  else
  {
    while (i <= number)
    {
      finalText = finalText + text;
      i = i + 1;
    }
    return finalText;
  }
};

// Do not edit below this line
module.exports = repeatString;
