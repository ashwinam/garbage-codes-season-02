// 40. Valid Parentheses

/*
Given a non-empty string s containing just the characters (, ), {, }, [, ], determine if the input string is valid. An input string is valid if open brackets are closed by the same type of brackets, and open brackets are closed in the correct order.
*/

const isValid = s => {
    if (s.length === 1) return false
    // Remaining code
};

console.log(isValid('[')); //false
console.log(isValid('()')); //true
console.log(isValid('(]')); //false
console.log(isValid('{[]}')); //true
console.log(isValid('([)]')); //false
console.log(isValid('()[]{}')); //true