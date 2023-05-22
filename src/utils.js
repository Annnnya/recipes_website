// a key to Rapid API to add/manage users
const xRapidKey = "beec3e8463msh3e268a1ba2198bdp17fdc5jsn0869bc12e7f6"
const spoonacularKey = "a6d42ea6d47a4ce999322ef41f46b8e4"

export async function RandomDish() {
	const first_part_link = `https://api.spoonacular.com/recipes/random?apiKey=${spoonacularKey}`;
	const response = await fetch(
		first_part_link
	);
	const data = await response.json();

	if (data.recipes.length === 0 || data.recipes === undefined) {
		throw Error("Undefined result");
	}
	else {
		return data.recipes;
	}
}

export async function createUser(username, firstName = '', lastName = '', email = '') {
	try {
		const response = await fetch(`https://api.spoonacular.com/users/connect?apiKey=${spoonacularKey}`, {
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
		const userData = await response.json();
		return userData;
	} catch (error) {
		console.error(error);
	}
}

createUser('andrea_kozlovkyy', 'Andrea', 'Kozlovskyy', 'andrea.kozlovkyy@ucu.edu.ua')
	.then(userData => {
		console.log(userData);
	});
