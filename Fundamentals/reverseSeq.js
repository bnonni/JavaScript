const reverseSeq = n => {
 var arr = []
 for(n; n > 0; n--){
  arr.push(n)
 }
 return arr;
};

console.log(reverseSeq(5));