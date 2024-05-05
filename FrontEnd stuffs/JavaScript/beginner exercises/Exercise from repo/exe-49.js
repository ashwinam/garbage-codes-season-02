// 49. Break camelCase

/*
Complete the solution so that the function will break up camel casing, using a space between words.
*/

const solution = str => {
    output = [];
    let index = 0;
    if (!str) return str;
    if (str[0] !== str[0].toLowerCase()) return str;

    
    for (let ind in str){
        if (str[ind] === str[ind].toUpperCase()){
            index = str.indexOf(str[ind].toUpperCase());
        }
        if (parseInt(ind) === index){
            if (parseInt(ind) === 0)
                output.push(str.slice(parseInt(ind),(parseInt(ind) + str.indexOf(str[ind].toUpperCase()))));
            else
            output.push(str.slice(parseInt(ind),(parseInt(ind) + str.indexOf(str[ind].toUpperCase())) + 1));


        }

    }
    return output.join(" ");
  };
  
  console.log(solution('camelCasingHere')); // camel Casing Here
  
  console.log(solution('No Camels here')); // No Camels here
  console.log(solution('ABC')); // ABC
  console.log(solution('')); // ''