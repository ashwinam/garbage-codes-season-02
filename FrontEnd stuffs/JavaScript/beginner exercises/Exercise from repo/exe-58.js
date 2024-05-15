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

  // Author Solution
  /*
const toCamel = obj => {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    // Let's use regex capture groups
    const camelKey = key.replace(/(_[a-z])/gi, $1 =>
      $1.replace('_', '').toUpperCase()
    );
    result[camelKey] = value;
  }
  return result;
};
  */
  
  console.log(
    toCamel({
      first_name: 'John',
      last_name: 'Rambo',
      favorite_movie: 'First Blood',
    })
  ); // {'firstName': 'John', 'lastName': 'Rambo', 'favoriteMovie': 'First Blood'}