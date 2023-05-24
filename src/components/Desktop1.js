import "./Desktop1.css";
import React from "react";
import {GoogleLogin} from "@react-oauth/google";


const Desktop1 = () => {

    return (
        <div className="desktop-1">
            <input
                className="enter-your-email"
                type="text"
                placeholder="Enter your email"
            />
            <div className="dont-have-an">Don’t have an account?</div>
            <input
                className="enter-your-password"
                type="text"
                placeholder="Enter your password"
            />
            <img className="desktop-1-child" alt="" src="/line-1.svg"/>
            <img className="desktop-1-item" alt="" src="/line-2.svg"/>
            <div className="desktop-1-inner"/>
            <div className="rectangle-div"/>
            <a className="sign-in">Sign in</a>
            <a className="sign-up">Sign up</a>
            <img className="rectangle-icon" alt="" src="/rectangle-2@2x.png"/>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}

                onError={() => {
                    console.log('Login Failed');
                }}

            />
            {/* <div className="g-signin2" data-onsuccess="onSignIn" />
    */}

        </div>
    );
};

export default Desktop1;