const sumAll = function(number1, number2) {
  let i = 1;
  let sum = 0;
  if (number1 < 0 || number2 < 0)
  {
    return 'ERROR';
  }
  else if (typeof number1 === 'object' || typeof number2 === 'object')
  {
    return 'ERROR';
  }
  else if (typeof number1 === 'string' || typeof number2 === 'string')
  {
    return 'ERROR';
  }
  else if (number1 > number2)
  {
    i = number2;
    while (i <= number1)
    {
      sum = sum + i;
      i = i + 1;
    }
    return sum;
  }
  else 
  {
    i = number1;
    while (i <= number2) {
      sum = sum + i;
      i = i + 1;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
