/* 
01. Write a function that takes two numbers and return the maximum of two.
*/

function max_num(first_num, second_num) {
    if (first_num > second_num)
        return first_num
    return second_num
}

console.log(max_num(200, 199));
