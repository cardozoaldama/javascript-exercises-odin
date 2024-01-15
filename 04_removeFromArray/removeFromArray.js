const removeFromArray = function(theArray, ...theArgs) {
 return theArray.filter(val => !theArgs.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
