export async function RandomDish() {
  const first_part_link = `https://api.spoonacular.com/recipes/random?apiKey=a6d42ea6d47a4ce999322ef41f46b8e4`;
  const response = await fetch(
    first_part_link
  );
  const data = await response.json();

  if (data.recipes.length == 0 || data.recipes == undefined) {
      throw Error("Undefined result");
  }
  else {
    return data.recipes;
  }
}

// RandomDish()
// .then(result => {
// console.log(result[0].title);
// console.log(result[0].image)
// })
// .catch(error => {
// console.error(error);
// });

  