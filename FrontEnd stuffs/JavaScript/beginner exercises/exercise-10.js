/* 
Print stars
*/


function showStars(row) {
    for (let i = 0; i <= row; i++) {
        let pattern = '';
        for (let j = 0; j < i + 1; j++)
            pattern += '*'
        console.log(pattern);
    }
}

showStars(5)