import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id = "AboutUs" className="about-us-container">
      <h2 className="about-us-title">About Us</h2>
      <div className="about-us-content">
        <div className="about-us-description">
          <p>Each recipe in "Kitchen Chronicles" is thoughtfully crafted, providing detailed step-by-step instructions, ingredient lists, and cooking tips to ensure your success in the kitchen.
            From appetizers and main courses to desserts and beverages, you'll discover an abundance of culinary inspiration to satisfy your taste buds and impress your loved ones.
            Whether you're looking for quick weekday meals, special occasion dishes, or creative twists on traditional recipes, "Kitchen Chronicles" is your go-to resource for all things culinary.
            Join us on this gastronomic adventure, explore new flavors, and create cherished memories in your own kitchen. Let "Kitchen Chronicles" be your guide to unlock the secrets of
            delectable dishes and unleash your inner chef.</p>
        </div>
        <div className="about-us-photo"></div>
      </div>
    </section>
  );
};

export default AboutUs;
