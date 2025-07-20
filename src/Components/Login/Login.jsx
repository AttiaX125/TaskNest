import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import Joi from 'joi';
import axios from 'axios';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Login({saveUserData}) {
  const [user, setUser] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorList, setErrorList] = useState([]);
  const navigate = useNavigate();

  function getUserData(event) {
    let myUser = { ...user };
    myUser[event.target.name] = event.target.value;
    setUser(myUser);
  }

  function validateLoginForm() {
    const schema = Joi.object({
      email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
      password: Joi.string().pattern(/^[A-Z][a-zA-Z0-9]{5,10}$/).required()
    });
    return schema.validate(user, { abortEarly: false });
  }

  async function sendUserData() {
    try {
      const { data } = await axios.post(`http://localhost:5000/api/signin`, user);
      if (data.message === "Login successful") {
        localStorage.setItem('userToken', data.token);
        console.log('Token saved to localStorage:', data.token);
console.log('Current localStorage:', localStorage.getItem('userToken'));
        saveUserData();
        navigate('/');
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Unexpected error");
    } finally {
      setIsLoading(false);
    }
  }

  function submitForm(e) {
    e.preventDefault();
    setIsLoading(true);

    const validation = validateLoginForm();
    if (validation.error) {
      setIsLoading(false);
      setErrorList(validation.error.details);
    } else {
      sendUserData();
    }
  }

  return (
    <>
      <h3>Login</h3>
      <p className="text-muted">Log in with your account</p>

      <form onSubmit={submitForm}>
        {errorList.map((error, index) => (
          <div key={index} className="alert alert-danger py-1">
            {error.context.label === 'password' ? 'Password is invalid' : error.message}
          </div>
        ))}
        {errorMessage && (
          <div className="alert alert-danger py-1">
            {errorMessage}
          </div>
        )}

        <input onChange={getUserData} className="form-control py-2 mb-3" type="email" name="email" placeholder="Email Address" />
        <input onChange={getUserData} className="form-control py-2 mb-3" type="password" name="password" placeholder="Password" />

        <button type="submit" className="btn btn-info w-100 mb-3">
          {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Login'}
        </button>
      </form>

      <Link to="/signup" className="text-decoration-underline">Don't have an account?</Link>
    </>
  );
}
