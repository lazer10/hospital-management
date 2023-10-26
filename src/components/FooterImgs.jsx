import React from 'react';
import cartLogo from '../assets/img/cartLogo.png';
import dark from '../assets/img/20-dark.png';

const FooterImgs = () => (
  <div>
    <div className="footer-img">
      <div className="logo-img">
        <img src={cartLogo} alt="Metronic" />
      </div>
      <div className="logo-img">
        <img src={dark} alt="Metronic" />
      </div>
    </div>
  </div>
);

export default FooterImgs;
