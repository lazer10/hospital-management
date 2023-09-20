import React from 'react';
import metronicLogo from '../../assets/img/Metronic.png';
import cartLogo from '../../assets/img/cartLogo.png';
import dark from '../../assets/img/20-dark.png';
import googleLogo from '../../assets/img/icons8-google-48.png';
import facebook from '../../assets/img/icons8-facebook-48.png';
import apple from '../../assets/img/icons8-apple-50.png';

const AdminLogin = () => (
  <div className="Home-page">
    <div className="background-cover">
      <div className="logo-container">
        <div className="logo">
          <div className="logo-img">
            <img src={metronicLogo} alt="Metronic" />
          </div>
          <h1 id="logo-txt">Metronic</h1>
        </div>
      </div>
    </div>
    <div className="home-signup">
      <div className="form-title">
        <div className="signin-title">
          <h2>Sign in to Metronic</h2>
          <h3>
            New Here?
            <a href="SignUp.html">Create an Account link</a>
          </h3>
        </div>
        <div className="user-guide">
          <div className="credetials">
            <p>
              Use account
              {' '}
              <b>admin123@gmail.com</b>
              {' '}
              and password
              <br />
              {' '}
              <b>admin</b>
              {' '}
              to continue.
            </p>
          </div>
        </div>
        <form>
          <div className="form-input">
            <div className="form-group">
              <label htmlFor="email">
                Email
                {' '}
                {' '}
              </label>
              <input type="text" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Password
                {' '}
                <a href="SignUp.html">Forgot Password ?</a>
              </label>
              <input type="password" id="password" name="password" />
            </div>
            <input type="submit" value="Continue" />

          </div>
          <div className="separator">
            <p>OR</p>
          </div>
          <div className="others">
            <div className="other-options">
              <div className="ggl">
                <div className="logo-image">
                  <img src={googleLogo} alt="Google" />
                </div>
                <a href="Contact Us.html">Continue with Google</a>
              </div>
              <div className="ggl">
                <div className="logo-image">
                  <img src={facebook} alt="Google" />
                </div>
                <a href="Contact Us.html">Continue with Facebook</a>
              </div>
              <div className="ggl">
                <div className="logo-image">
                  <img src={apple} alt="Google" />
                </div>
                <a href="Contact Us.html">Continue with Apple</a>
              </div>
            </div>
          </div>
        </form>
      </div>

    </div>
    <div className="about-us">
      <a href="About.html">About</a>
      <a href="Contact.html">Contact</a>
      <a href="Contact Us.html">Contact Us</a>
    </div>
    <footer>
      <div className="footers">
        <div className="logo-img">
          <img src={cartLogo} alt="Metronic" />
        </div>
        <div className="logo-img">
          <img src={dark} alt="Metronic" />
        </div>
      </div>
    </footer>
  </div>
);

export default AdminLogin;
