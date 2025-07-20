import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import Joi from 'joi';
import axios from 'axios';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SignUp() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorList, setErrorList] = useState([]);

  const navigate = useNavigate();

  function getUserData(event) {
    let myUser = { ...user };
    myUser[event.target.name] = event.target.value;
    setUser(myUser);
  }

  function validateRegisterForm() {
    const schema = Joi.object({
      name: Joi.string().pattern(/^[A-Z]/).min(3).max(10).required(),
      email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }).required(),
      password: Joi.string().pattern(/^[A-Z][a-zA-Z0-9]{5,10}$/).required()
    });
    return schema.validate(user, { abortEarly: false });
  }

  async function sendUserData() {
    try {
      const { data } = await axios.post(`http://localhost:5000/api/signup`, user);
      if (data.message === "User registered successfully") {
        navigate('/login');
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

    const validation = validateRegisterForm();
    if (validation.error) {
      setIsLoading(false);
      setErrorList(validation.error.details);
    } else {
      sendUserData();
    }
  }

  return (
    <>
      <h3>Sign Up</h3>
      <p className="text-muted">Create your account</p>

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

        <input onChange={getUserData} className="form-control py-2 mb-3" type="text" name="name" placeholder="Name" />
        <input onChange={getUserData} className="form-control py-2 mb-3" type="email" name="email" placeholder="Email Address" />
        <input onChange={getUserData} className="form-control py-2 mb-3" type="password" name="password" placeholder="Password" />

        <button type="submit" className="btn btn-info w-100 mb-3">
          {isLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : 'Sign Up'}
        </button>
      </form>

      <p>
        Already have an account?{" "}
        <Link to="/login" className="text-decoration-underline">Log In</Link>
      </p>
    </>
  );
}
