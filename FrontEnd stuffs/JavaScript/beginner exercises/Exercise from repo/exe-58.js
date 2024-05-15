// 58. Object Keys from snake_case to camelCase

/*
Write a function that converts all the keys in an object from snake case to camel case.
*/

const convertCamel = str => {
  let list_of_words = str.split("_")
  return list_of_words[0] + list_of_words[1][0].toUpperCase() + list_of_words[1].slice(1,);
}


const toCamel = obj => {
  let output = {}
    let keys = Object.keys(obj).map(ele => convertCamel(ele))
    let values = Object.values(obj)
    for(let key in keys){
      output[keys[key]] = values[key]
    }
    return output;
  };
  
  console.log(
    toCamel({
      first_name: 'John',
      last_name: 'Rambo',
      favorite_movie: 'First Blood',
    })
  ); // {'firstName': 'John', 'lastName': 'Rambo', 'favoriteMovie': 'First Blood'}