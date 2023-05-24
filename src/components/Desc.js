import React, {useState} from 'react';
import './Desc.css';

const Desc = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    // const createUser(username=username, firstName = username, lastName = username, email = email) = () => {

    // };

    return (
        <div className="create-acc">
            <div className="create-acc-child"/>

            <input
                className="enter-your-email"
                type="text"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
            />
            <input
                className="enter-your-password"
                type="text"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
            />
            <img className="create-acc-inner" alt="" src="/line-3.svg"/>
            <img className="line-icon" alt="" src="/line-2_copy.svg"/>

            <img className="rectangle-icon" alt="" src="/rectangle-2@2x.png"/>
            {/* <button className="group-button" >
        <div className="rectangle-parent">
          <div className="group-child" />
          <div className="join-our-family">Sign In!</div>
        </div>
      </button> */}
            <button className="group-button">
                <div className="rectangle-parent">
                    <div className="group-child"/>
                    <div className="join-our-family">Sign up!</div>
                </div>
            </button>


            {/* <button className="group-button1">
        <div className="rectangle-parent">
          <div className="group-child" />
          <div className="join-our-family" >Sign in!</div>
        </div>
      </button> */}
        </div>
    );
};

export default Desc;
