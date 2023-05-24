const spoonacularKey1 = "02855522d96c497d88f3fc4c6fdc54aa";

export async function RandomDish() {
    const query = `https://api.spoonacular.com/recipes/random?apiKey=${spoonacularKey1}`;
    const response = await fetch(
        query
    );
    const data = await response.json();

    if (data.recipes.length === 0) {
        throw Error("Undefined result");
    } else {
        return data.recipes;
    }
}

export async function createUser(username, firstName = '', lastName = '', email = '') {
    try {
        const response = await fetch(`https://api.spoonacular.com/users/connect?apiKey=${spoonacularKey1}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                firstName: firstName,
                lastName: lastName,
                email: email
            })
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

//// THIS IS HOW USER IS CREATED
// createUser('andrea_kozlovkyy', 'Andrea', 'Kozlovskyy', 'andrea.kozlovkyy@ucu.edu.ua')
// 	.then(userData => {
// 		console.log(userData);
// 	});

export async function addToWishList(username, hash, recipeId) {
    try {
        const response = await fetch(`https://api.spoonacular.com/mealplanner/${username}/items?apiKey=${spoonacularKey1}&hash=${hash}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "date": 0,
                "slot": 1,
                "position": 0,
                "type": "RECIPE",
                "value": {
                    "id": recipeId,
                    "servings": 1
                    // "title": "Spinach Salad with Roasted Vegetables and Spiced Chickpea",
                    // "imageType": "jpg",
                }
            })
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

// // THIS IS HOW MEAL IS ADDED TO MEAL PLANNER
// addToWishList("andrea-kozlovkyy1", "87718b3846a15bdaa0dbb6f5754dc7385120b278", 715538).then(data => {
// 	console.log(data);
// });
// //Result: { status: 'success', id: 17058617 }


export async function getWishList(username, hash) {
    try {
        const response = await fetch(`https://api.spoonacular.com/mealplanner/${username}/day/1970-01-01?apiKey=${spoonacularKey1}&hash=${hash}`);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

//  THIS IS HOW WISH LIST IS DISPLAYED
// getWishList("andrea-kozlovkyy1", "87718b3846a15bdaa0dbb6f5754dc7385120b278").then(data => {
// 	console.log(data.items);
// })
// Result: Success, we only need to use data.items:
// items: [
//     {
//       id: 17058617,
//       slot: 1,
//       position: 1,
//       type: 'RECIPE',
//       value: [Object]
//     }
//   ]

export async function getRecipesFromWishList(wishList) {
    let arrayOfID = [];

    for (let index in wishList) {
        arrayOfID.push(wishList[index].value.id);
    }

    const stringOfID = arrayOfID.join(',');

    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/informationBulk?apiKey=${spoonacularKey1}&ids=${stringOfID}`);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}