import React, { useState } from 'react';
import './CreateAcc.css';

const CreateAcc = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <div className="create-acc">
      <div className="create-acc-child" />
      <input
        className="enter-your-username"
        type="text"
        placeholder="Enter your username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <img className="create-acc-item" alt="" src="/line-3.svg" />
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
      <img className="create-acc-inner" alt="" src="/line-3.svg" />
      <img className="line-icon" alt="" src="/line-2_copy.svg" />
      <input
        className="repeat-your-password"
        type="text"
        placeholder="Repeat your password"
        name="repeatPassword"
        value={formData.repeatPassword}
        onChange={handleInputChange}
      />
      <img className="create-acc-child1" alt="" src="/line-2_copy.svg" />
      <img className="rectangle-icon" alt="" src="/family.png" />
      <p className="create-account">Create Account</p>
      <button className="group-button">
        <div className="rectangle-parent">
          <div className="group-child" />
          <div className="join-our-family" >Join our family!</div>
        </div>
      </button>
    </div>
  );
};

export default CreateAcc;
