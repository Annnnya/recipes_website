import React from "react";
import { Link } from "react-router-dom";

import "./profile.css";

const recipes = [
  {
    id: 1,
    name: "Pasta",
    image:
      "https://img.freepik.com/premium-photo/spaghetti-in-a-dish-on-a-white-background_45583-1180.jpg",
  },
  {
    id: 2,
    name: "Pizza",
    image:
      "https://img.freepik.com/premium-photo/spaghetti-in-a-dish-on-a-white-background_45583-1180.jpg",
  },
  {
    id: 3,
    name: "Burger",
    image:
      "https://img.freepik.com/premium-photo/spaghetti-in-a-dish-on-a-white-background_45583-1180.jpg",
  },
  {
    id: 4,
    name: "Taco",
    image:
      "https://img.freepik.com/premium-photo/spaghetti-in-a-dish-on-a-white-background_45583-1180.jpg",
  },
  {
    id: 5,
    name: "Sushi",
    image:
      "https://img.freepik.com/premium-photo/spaghetti-in-a-dish-on-a-white-background_45583-1180.jpg",
  },
  {
    id: 6,
    name: "Salad",
    image:
      "https://img.freepik.com/premium-photo/spaghetti-in-a-dish-on-a-white-background_45583-1180.jpg",
  },
  {
    id: 7,
    name: "Steak",
    image:
      "https://img.freepik.com/premium-photo/spaghetti-in-a-dish-on-a-white-background_45583-1180.jpg",
  },
  {
    id: 8,
    name: "Ramen",
    image:
      "https://img.freepik.com/premium-photo/spaghetti-in-a-dish-on-a-white-background_45583-1180.jpg",
  },
  {
    id: 9,
    name: "Curry",
    image:
      "https://img.freepik.com/premium-photo/spaghetti-in-a-dish-on-a-white-background_45583-1180.jpg",
  },
];

const user = {
    username: "Andrea Kozlovskyy",
    avatar: "https://img.freepik.com/premium-photo/chef-prepares-vegetables-frying-pan-cooking-healthy-vegetarian-food-meal-dark-background_192985-2250.jpg",
    bio: ""
};

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="user-info">
        <img className="user-avatar" src={user.avatar} alt="User Avatar" />
        <div>
          <h1>{user.username}</h1>
          <p>{user.bio}</p>
        </div>
      </div>
      <h2 className="section-heading">Saved Recipes</h2>
      <div className="saved-recipes">
        {recipes.map((recipe, index) => {
          return (
            <div key={index} className="recipe-card">
              <h3>{recipe.name}</h3>
              <img src={recipe.image} alt={recipe.name} />
            </div>
          );
        })}
      </div>
      <Link to="/" className="back-button">
        &lt; Back to Home
      </Link>
    </div>
  );
};

export default ProfilePage;
