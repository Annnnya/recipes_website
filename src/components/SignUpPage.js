import React from 'react';
import { Link } from 'react-router-dom';
import './SignUpPage.css';

const SignUpPage = () => {
    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <button type="submit" className="round-button">Sign Up</button>
            </form>
            <div className="signin-link">
                <p>Already have an account? <Link to="/signin">Sign In</Link></p>
            </div>
        </div>
    );
};

export default SignUpPage;
