async function RandomDish() {
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

RandomDish()
.then(result => {
console.log(result[0].title);
console.log(result[0].image)
})
.catch(error => {
console.error(error);
});

const image = document.getElementById('myImage');

image.addEventListener('mouseover', handleMouseOver);
image.addEventListener('mouseout', handleMouseOut);

async function handleMouseOver() {
    try {
      const dishes = await RandomDish([], 1); // Call RandomDish function with empty tags array and get only one dish
      const dish = dishes[0];
      const textElement = document.createElement('p');
      textElement.textContent = dish.title;
      textElement.classList.add('image-text');
  
      const imageContainer = this.parentNode;
      imageContainer.appendChild(textElement);
    } catch (error) {
      console.error(error);
    }
  }
  
  function handleMouseOut() {
    const textElement = document.querySelector('.image-text');
    if (textElement) {
      textElement.parentNode.removeChild(textElement);
    }
  }
  