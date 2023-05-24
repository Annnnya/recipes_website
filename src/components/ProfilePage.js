import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./ProfilePage.css";
import "./Recommendation.css";
import {getRecipesFromWishList, getWishList} from "../utils";
import WishList from "./WishList";

class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: 'andrea-kozlovkyy1',
                spoonacularPassword: 'peachnectarwith81purplepotato',
                hash: '87718b3846a15bdaa0dbb6f5754dc7385120b278',
                avatar: "https://img.freepik.com/premium-photo/chef-prepares-vegetables-frying-pan-cooking-healthy-vegetarian-food-meal-dark-background_192985-2250.jpg",
                password: '',
                bio: ""
            },
            wishList: []
        };
    }

    componentDidMount() {
        const {username, hash} = this.state.user;

        getWishList(username, hash)
            .then(data => getRecipesFromWishList(data.items))
            .then(recipes => {
                this.setState({wishList: recipes});
            })
            .catch(error => {
                console.error("Error fetching wish list:", error);
            });
    }

    render() {
        const {user, wishList} = this.state;

        if (!wishList) {
            return (
                <div className="profile-page">
                    <Link to="/" className="back-button">
                        Back to Home
                    </Link>
                    <div className="user-info">
                        <img className="user-avatar" src={user.avatar} alt="User Avatar"/>
                        <div>
                            <h1>{user.username}</h1>
                            <p>{user.bio}</p>
                        </div>
                    </div>
                    <h2 className="section-heading">Saved Recipes</h2>
                    <div className="saved-recipes">
                        Loading...
                    </div>
                </div>
            );
        }

        return (
            <div className="profile-page">
                <Link to="/" className="back-button">
                    Back to Home
                </Link>
                <div className="user-info">
                    <img className="user-avatar" src={user.avatar} alt="User Avatar"/>
                    <div>
                        <h1>{user.username}</h1>
                        <p>{user.bio}</p>
                    </div>
                </div>
                <h2 className="section-heading">Saved Recipes</h2>
                <div className="saved-recipes">
                    {/*Wishlist is displayed here*/}
                    <div className="recommendation-section-boxes">
                        <WishList list={wishList}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage;
