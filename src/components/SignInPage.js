import React from 'react';
import { Link } from 'react-router-dom';
import './SignInPage.css';

const SignInPage = () => {
    return (
        <div className="signin-container">
            <h2>Sign In</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <button type="submit" className="round-button">Sign In</button>
            </form>
            <div className="signup-link">
                <p>Don't have an account yet? <Link to="/signup">Sign Up</Link></p>
            </div>
        </div>
    );
};

export default SignInPage;
