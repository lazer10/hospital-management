import React from 'react';
import facebook from '../assets/img/icons8-facebook-48.png';

const FacebookOption = () => (
  <div>
    <div className="option-img">
      <div className="logo-image">
        <img src={facebook} alt="Facebook" />
      </div>
      <a href="Contact Us.html">Continue with Facebook</a>
    </div>
  </div>
);

export default FacebookOption;
