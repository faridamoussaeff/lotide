const middle = function(array) {
 let arrayLength = array.length;
 let arrayMiddle = [];
 if (arrayLength <= 2) {
   return [];
 }

  if (arrayLength % 2 === 0) {
    arrayMiddle.push(array[arrayLength / 2 - 1]);
    arrayMiddle.push(array[arrayLength / 2]);
  } else {
    arrayMiddle.push(array[Math.floor(arrayLength / 2)]);
  }
  return arrayMiddle; 
};

module.exports = middle;