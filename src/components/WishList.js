import React from 'react';
import RecommendedDish from "./RecommendedDish";

function WishList(props) {
    const wishList = props.list;

    if (!Array.isArray(wishList)) {
        return <div>Loading...</div>;
    }

    return wishList.map((dish, index) => {
        if (!dish) {
            return <div>Loading...</div>;
        }
        let notEnough = 5;
        if (dish.extendedIngredients.length - 5 < 0) {
            notEnough = dish.extendedIngredients.length;
        }
        const ingredients = dish.extendedIngredients.slice(0, notEnough).map(ingredient => ingredient.name);

        return (
            <RecommendedDish
                imgurl={dish.image}
                ingredients={ingredients} // Pass the extracted ingredients here
                id={dish.id}
                title={dish.title}
                key={index} // Add a unique key for each rendered component
            />
        );
    });
}

export default WishList;
