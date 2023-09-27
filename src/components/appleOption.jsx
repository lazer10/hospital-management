import React from 'react';
import apple from '../assets/img/icons8-apple-50.png';

function AppleOption() {
  return (
    <div>
      <div className="option-img">
        <div className="logo-image">
          <img src={apple} alt="Apple" />
        </div>
        <a href="Contact-Us.html">Continue with Apple</a>
      </div>
    </div>
  );
}

export default AppleOption;
