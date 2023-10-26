import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import userSchema from '../validation/UserLoginValidation';
import postRequest from './loginData';

const LoginInputs = ({
  submitUrl,
}) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const loginHandler = async (e) => {
    try {
      e.preventDefault();
      const formData = {
        email: state.email,
        password: state.password,
      };

      await userSchema.validate(formData, { abortEarly: false });
      if (!submitUrl) return;
      const response = await postRequest(submitUrl, formData);
      localStorage.setItem('token', response.data.token);

      setMessage('');

      navigate('/home');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setMessage(error.inner.length ? error.inner[0].message : 'Validation error');
      } else {
        // eslint-disable-next-line no-lonely-if
        if (error.response.data.status !== 500) {
          setMessage(error.response.data.message);
        } else {
          setMessage('Something went wrong contact support');
        }
      }
    }
  };

  const handleInputChange = (e) => {
    setMessage('');

    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      {message && (
        <div className="errorMessage">
          {message}
        </div>
      )}
      <div className="form-input">
        <div className="form-group">
          <label htmlFor="email">
            Email
            {' '}
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password
            {' '}
            <a href="SignUp.html">Forgot Password ?</a>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>

        <button type="button" onClick={loginHandler}>Continue</button>

      </div>
    </div>
  );
};

LoginInputs.propTypes = {
  submitUrl: PropTypes.string.isRequired,
};

export default LoginInputs;
