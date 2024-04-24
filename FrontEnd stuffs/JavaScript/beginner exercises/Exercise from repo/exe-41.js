// 41. Reverse Integer

/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
*/

const reverse = x => {
    let output = '';
    let otherChars = '';
    for (val of x.toString()) {
        if (isNaN(val)) {
            otherChars = val
        } else {
            output = val + output;
        }
    }
    output = otherChars + output;
    if (2147483648 < Number(output)) return 0;
    return isNaN(output) ? output : Number(output)
};

console.log(reverse(0)); // 0
console.log(reverse(120)); // 21
console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(1534236469)); // 0