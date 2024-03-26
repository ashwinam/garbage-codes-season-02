// 21. Bit Counting

/*
Write a function that takes an integer as input, and returns the number of bits that are equal to 1 in the binary representation of that number. You can guarantee that input is non-negative. For example the binary representation of 1234 is 10011010010, so the function should return 5 in this case.

0 -> 0000
4 -> 0010
7 -> 00111
*/

const dec_binary = n => {
    let remainder = '';
    if (n === 0) return 0;
    while (n >= 1) {
        remainder += Math.floor(n % 2);
        n = n / 2;
    }
    return remainder;
}

const countBits = n => {
    let rem = dec_binary(n).toString();

    return rem.split('').filter(ele => ele == 1).length

};

console.log(countBits(0)); // 0
console.log(countBits(4)); // 1
console.log(countBits(7)); // 3
console.log(countBits(9)); // 2