// 47. Pete, the Baker

/*
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe object and the available ingredients object and returns the maximum number of cakes Pete can bake. Ingredients that are not present in the objects, can be considered as 0.
*/

const cakes = (recipe, available) => {
    let temp_space = [];
    let results = 0;
    for (k in recipe)
      temp_space.push(available[k]/recipe[k]);
    for (let i of temp_space){
      if (isNaN(i)){
        return 0;
      }
    }
    return parseInt(Math.min(...temp_space))
  };

  // Author solution

  /*
const cakes = (recipe, available) => {
  let num_cakes = Infinity;
  for (let ingredient in recipe) {
    if (!available[ingredient] || recipe[ingredient] > available[ingredient])
      return 0;
    num_cakes = Math.min(
      num_cakes,
      Math.floor(available[ingredient] / recipe[ingredient])
    );
  }
  return num_cakes;
};
  */
  
  let recipe = { flour: 500, sugar: 200, eggs: 1 };
  let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
  console.log(cakes(recipe, available)); // 2
  
  recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
  available = { sugar: 500, flour: 2000, milk: 2000 };
  console.log(cakes(recipe, available)); // 0