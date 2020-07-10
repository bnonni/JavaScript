function DNAtoRNA(dna) {
 rna = '';
 for(i = 0; i < dna.length; i++){
  if(dna[i] === 'T'){
   rna += 'U'
  } else {
   rna += dna[i];
  }
 };
 return rna;
}

console.log(DNAtoRNA("TTTT"))
// "UUUU"
console.log(DNAtoRNA("GCAT"))
// "GCAU"
console.log(DNAtoRNA("GACCGCCGCC"))
// "GACCGCCGCC"