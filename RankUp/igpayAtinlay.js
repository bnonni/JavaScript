function pigIt(str){
 var english = str.split(' '), pigLatin = '', ex = '!', qu = '?';
 english.forEach(word => {
  if (word.indexOf(ex) >= 0 || word.indexOf(qu) >= 0)
   return pigLatin += word;
  var letter = word.slice(0, 1);
  word = word.substr(1) + letter + 'ay';
  pigLatin += word + ' ';
 });
 return pigLatin.trim();
}

console.log(pigIt('Pig latin is cool'));
// igPay atinlay siay oolcay
console.log(pigIt('Hello world'));
// elloHay orldway
console.log(pigIt('This is my string !'));
//hisTay siay ymay tringsay
console.log(pigIt('Quis custodiet ipsos custodes ?'))