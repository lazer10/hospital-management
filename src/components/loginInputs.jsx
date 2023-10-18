import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import userSchema from '../validation/UserLoginValidation';

const LoginInputs = () => {
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

      const response = await axios.post('http://localhost:3000/api/admin/login', formData);
      localStorage.setItem('token', response.data.token);

      setMessage('');

      navigate('/home');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setMessage('Invalid input. Please check your data.');
      } else {
        setMessage('Invalid login');
      }
    }
  };
  return (
    <div>
      <div>
        {message}
      </div>
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
            onChange={(e) => setState({ ...state, email: e.target.value })}
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
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
        </div>
        <input type="submit" value="Continue" onClick={loginHandler} />

      </div>
    </div>
  );
};

export default LoginInputs;
