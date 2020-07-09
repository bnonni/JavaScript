function stray(numbers) {
 var strayN = numbers[0]
 for(var i = 0; i <= numbers.length; i++){
  var temp = numbers[i+1];
  if(temp != strayN){
   strayN = temp;
   break;
  }
 }
 return strayN;
}

console.log(stray([1, 1, 2]))
console.log(stray([17, 17, 3, 17, 17, 17, 17]))