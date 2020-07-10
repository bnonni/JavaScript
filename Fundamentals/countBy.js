function countBy(x, n) {
 var z = [];
 var c = x;
 z.push(x);
 n-=1;
 for(n; n > 0; n--){
  z.push(x+=c);
 }

 return z;
}

console.log(countBy(1, 10));
console.log(countBy(2, 5));