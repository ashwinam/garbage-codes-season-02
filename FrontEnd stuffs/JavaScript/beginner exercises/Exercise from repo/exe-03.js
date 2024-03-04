// 3. Clock

/*
The clock shows h hours (0 <= h <= 23), m minutes (0 <= m <= 59) and s seconds (0 <= s <= 59) after midnight. Your task is to write a function which returns the time since midnight in milliseconds. There are 1,000 milliseconds in a second.
*/

const past = (h, m, s) => {
    const second = 1000
    let output = 0;
    let m_s = 60;
    let h_m = 60;
    if (s)
        output = output + (s * second);

    if (m) {
        // convert to seconds

        output = output + ((m * m_s) * second);
    }

    if (h) {
        output = output + ((h * h_m * m_s) * second);
    }


    return output
};

// Author solution
// const past = (h, m, s) => {
//     return (h * 60 * 60 + m * 60 + s) * 1000;
//   };

console.log(past(0, 0, 0)); // 0
console.log(past(0, 1, 1)); // 61000
console.log(past(1, 0, 0)); // 3600000
console.log(past(1, 0, 1)); // 3601000
console.log(past(1, 1, 1)); // 3661000