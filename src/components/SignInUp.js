import React from 'react';
import './SignInUp.css';

const SignInUp = () => {
    return (
        <div className="create-acc">
            <div className="centralized-text">
                <br/> <br/>
                <h1>Do you have an account?</h1>
                <div className="button-container">
                    <a href="/auth">Yes! Sign in!</a>
                    <a href="/acc">No! Create!</a>
                </div>
            </div>
        </div>
    );
};

export default SignInUp;
