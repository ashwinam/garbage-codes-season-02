// 15. You're a Square!

/*
Write a function that given an integer, checks to see if it is a square number. A square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
*/



const isSquare = n => {
    for (let i = 0; i <= n; i++)
        if (i * i === n) return true;

    return false
};

console.log(isSquare(0)); // true
console.log(isSquare(4)); // true
console.log(isSquare(25)); // true
console.log(isSquare(3)); // false
console.log(isSquare(93)); // false
console.log(isSquare(-1)); // false