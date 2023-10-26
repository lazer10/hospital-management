import React from 'react';
import metronicLogo from '../../assets/img/Metronic.png';
import LoginInputs from '../../components/loginInputs';
import AdminLoginFooter from '../../components/adminLoginFooter';
import FooterImgs from '../../components/FooterImgs';
import GoogleOption from '../../components/googleOption';
import FacebookOption from '../../components/facebookOption';
import AppleOption from '../../components/appleOption';

const AdminLogin = () => (
  <div className="home-page">
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

          <LoginInputs submitUrl="https://hospital-management-api-2xuo.onrender.com/api/admin/login" />

          <div className="separator">
            <p>OR</p>
          </div>
          <div className="others">
            <div className="other-options">
              <GoogleOption />
              <FacebookOption />
              <AppleOption />
            </div>
          </div>
        </form>
      </div>

    </div>
    <AdminLoginFooter />
    <footer>
      <FooterImgs />
    </footer>
  </div>
);

export default AdminLogin;
