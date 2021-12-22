var findMissing = function (list) {  
 var len = list.length,
     interval = (list[len-1] - list[0])/len,
     missing;
 
 return interval;
}

console.log(findMissing([1, 3, 4]));
console.log(findMissing([1, 2, 3, 5, 9, 11]));