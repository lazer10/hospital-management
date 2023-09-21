import React from 'react';

function loginInputs() {
  return (
    <div>
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
    </div>
  );
}

export default loginInputs;
