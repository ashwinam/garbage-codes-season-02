// 53. Roman Numerals Encoder

/*
Create a function that takes a positive integer less than 4,000 as its input and returns a string containing the Roman numeral representation of that integer. Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There can't be more than 3 identical symbols in a row. More about Roman numerals: http://en.wikipedia.org/wiki/Roman_numerals

Table of individual decimal places for your reference:

Thousands   Hundreds	Tens	Units
1	M	   C	           X	I
2	MM	  CC	          XX	II
3	MMM	  CCC	         XXX	III
4		  CD	          XL	IV
5		   D	           L	V
6		DC	              LX	VI
7		DCC	             LXX	VII
8		DCCC	        LXXX	VIII
9		CM	              XC	IX
*/

let roman_object = {
    0 : "",
    1 : "I",
    2 : "II",
    3 : "III",
    4 : "IV",
    5 : "V",
    6 : "VI",
    7 : "VII",
    8 : "VIII",
    9 : "IX",
    10 : "X",
    20 : "XX",
    30 : "XXX",
    40 : "XL",
    50 : "L",
    60 : "LX",
    70 : "LXX",
    80 : "LXXX",
    90 : "XC",
    100 : "C",
    200 : "CC",
    300 : "CCC",
    400 : "CD",
    500 : "D",
    600 : "DC",
    700 : "DCC",
    800 : "DCCC",
    900 : "CM",
    1000: "M",
    2000: "MM",
    3000: "MMM"
}

const convertToRoman = number => {
    const digitsSequence = number.toString()
    if (digitsSequence.length === 1){
        return roman_object[number];
    }
    else if (digitsSequence.length === 2){
        let tenthPlace = parseInt(digitsSequence[0]) * 10
        let firstPlace = parseInt(digitsSequence[1])
        let equation = roman_object[tenthPlace] + roman_object[firstPlace]
        return equation;
    }
    else if(digitsSequence.length === 3) {
        let hundrethPlace = parseInt(digitsSequence[0]) * 100
        let tenthPlace = parseInt(digitsSequence[1]) * 10
        let firstPlace = parseInt(digitsSequence[2])
        const equation = roman_object[hundrethPlace] + roman_object[tenthPlace] + roman_object[firstPlace]
        return equation;
    }
    else if(digitsSequence.length === 4) {
        let thousandthPlace = parseInt(digitsSequence[0]) * 1000
        let hundrethPlace = parseInt(digitsSequence[1]) * 100
        let tenthPlace = parseInt(digitsSequence[2]) * 10
        let firstPlace = parseInt(digitsSequence[3])
        const equation = roman_object[thousandthPlace] + roman_object[hundrethPlace] + roman_object[tenthPlace] + roman_object[firstPlace]
        return equation;
    }
  };
  
  console.log(convertToRoman(4)); // IV
  console.log(convertToRoman(9)); // IX
  console.log(convertToRoman(11)); // XI
  console.log(convertToRoman(19)); // XIX
  console.log(convertToRoman(22)); // XXII
  console.log(convertToRoman(15)); // XV
  console.log(convertToRoman(39)); // XXX + IX = XXXIX
  console.log(convertToRoman(160)); // C + LX = CLX
  console.log(convertToRoman(207)); // CC + VII = CCVII
  console.log(convertToRoman(246)); // CC + XL + VI = CCXLVI
  console.log(convertToRoman(789)); // DCC + LXXX + IX = DCCLXXXIX
  console.log(convertToRoman(1009)); // M + IX = MIX
  console.log(convertToRoman(1066)); // M + LX + VI = MLXVI
  console.log(convertToRoman(1776)); // M + DCC + LXX + VI = MDCCLXXVI
  console.log(convertToRoman(1918)); // M + CM + X + VIII = MCMXVIII
  console.log(convertToRoman(1954)); // M + CM + L + IV = MCMLIV
  console.log(convertToRoman(2014)); // MM + X + IV = MMXIV
  console.log(convertToRoman(2421)); // MM + CD + XX + I = MMCDXXI
  console.log(convertToRoman(3999)); // MMM + CM + XC + IX = MMMCMXCIX