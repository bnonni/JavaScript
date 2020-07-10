function removeChar(str){
 var newStr = str.substr(1);
 var lastStr = newStr.slice(0, -1);
 return lastStr;
};


console.log(removeChar('eloquent'))
console.log(removeChar('country'))
console.log(removeChar('person'))
console.log(removeChar('place'))

console.log(removeChar('b1bbaaa')) 
// 1bbaa