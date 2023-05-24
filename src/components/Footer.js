import React from 'react';
import './Footer.css'; // import the CSS file

const Footer = () => {
    return (
        <footer>
            <div class="footer-container">
                <h2 className="contact-us-footer">Contact us</h2>
                <div className="mail-footer">
                    <img src="mail-icon.svg" alt="Mail icon" width="30" height="30"/>
                    <span className="mail-name">kitchenchronicles@gmail.com</span>
                </div>
                <div className="footer-text">
                    <p class="rights-footer">2023 Kitchen Chronicles. All rights reserved.</p>
                    <div className="soc-media">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <img src="facebook-icon.svg" alt="Facebook icon" className="soc-icon"/>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <img src="instagram-icon.svg" alt="Instagram icon" className="soc-icon"/>
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                            <img src="twitter-icon.svg" alt="Twitter icon" className="soc-icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;