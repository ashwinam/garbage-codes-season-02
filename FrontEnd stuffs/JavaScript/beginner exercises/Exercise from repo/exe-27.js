// 27. Complementary DNA

/*
DNA is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms. In DNA strings, symbols "A" and "T" are complements of each other, as are "C" and "G". Given one side of the DNA, write a function that returns the other complementary side. The DNA strand is never empty.
*/

const DNAswitchCase = str => {
    switch (str) {
        case "A":
            return "T";
        case "T":
            return "A";
        case "C":
            return "G";
        case "G":
            return "C";
    }
}

const DNAStrand = dna => {
    let output = '';
    for (let char of dna)
        output += DNAswitchCase(char)

    return output;
};

console.log(DNAStrand('AAAA')); // 'TTTT'
console.log(DNAStrand('ATTGC')); // 'TAACG'
console.log(DNAStrand('GTAT')); // 'CATA'