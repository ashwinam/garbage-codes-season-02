// 29. FizzBuzz

/*
Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".
*/

const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        if ((i % 3 === 0) && ((i % 5 === 0))) console.log('FizzBuzz');
        else if (i % 3 === 0) console.log('Fizz');
        else if (i % 5 === 0) console.log('Buzz');

        else console.log(i);

    }
};

// Author Solution
/*
const fizzBuzz = () => {
  let output;
  for (let num = 1; num <= 100; num++) {
    output = '';
    if (num % 3 === 0) output += 'Fizz';
    if (num % 5 === 0) output += 'Buzz';
    console.log(output || num);
  }
};
*/

fizzBuzz(); // 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, ...