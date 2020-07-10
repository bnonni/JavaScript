function isTriangle(a,b,c)
{
 if ( (a + b) <= c )
  return false;
 else if ( (a + c) <= b)
  return false;
 else if ( (b + c) <= a)
  return false;
 return true;
}

console.log(isTriangle(1,2,2));
// true
console.log(isTriangle(7,2,2));
// false
console.log(isTriangle(2,3,4));
console.log(isTriangle(10,7,2));