import React from 'react';
import googleLogo from '../assets/img/icons8-google-48.png';

function GoogleOption() {
  return (
    <div>
      <div className="option-img">
        <div className="logo-image">
          <img src={googleLogo} alt="Google" />
        </div>
        <a href="Contact Us.html">Continue with Google</a>
      </div>
    </div>
  );
}

export default GoogleOption;
