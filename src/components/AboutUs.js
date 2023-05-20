import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id = "AboutUs" className="about-us-container">
      <h2 className="about-us-title">About Us</h2>
      <div className="about-us-content">
        <div className="about-us-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor quis augue vel ultrices. In luctus, ex in pellentesque vehicula, sapien metus consequat tellus, vitae iaculis quam lorem nec est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed fermentum massa id est vestibulum bibendum. Nullam pharetra augue quis ante accumsan, eget eleifend eros bibendum. Nam dapibus id est id facilisis. Fusce mollis, metus nec aliquam scelerisque, lacus augue posuere metus, sit amet rhoncus nulla quam nec augue. Aliquam hendrerit ultrices odio, vel bibendum velit consectetur eu. Etiam tincidunt tortor nisi, vitae aliquet elit tristique in. Ut imperdiet tellus id nulla mollis, ut consequat libero rutrum. Nulla ut dui vel nisi iaculis posuere in ut mauris.</p>
        </div>
        <div className="about-us-photo"></div>
      </div>
    </section>
  );
};

export default AboutUs;
