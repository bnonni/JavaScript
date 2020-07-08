// Sum Numbers
function sum (numbers) {
 "use strict";
 var sum = 0.0;
 for(var i = 0; i < numbers.length; i++){
  sum += numbers[i];
 }
 return sum;
};

let numbers = [1, 5.2, 4, 0, -1];

console.log(sum(numbers));