import axios from 'axios';
import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordConfirm.current.value !== password.current.value) {
        passwordConfirm.current.setCustomValidity("Passwords don't match!");
    } else {
        const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value
        }
        try {
            const response = await axios.post("/auth/register", user);
            navigate("/login");
        } catch (err) {
            console.log(err)
        }
    }

  };

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>DG Clubhouse</h3>
          <span className='loginDesc'>
            Connect with fellow disc golfers on DG Clubhouse.
          </span>
        </div>
        <div className='loginRight'>
          <form className='loginBox' onSubmit={handleClick}>
            <input
              placeholder='Username'
              ref={username}
              className='loginInput'
              required
            />
            <input
              placeholder='Email'
              ref={email}
              className='loginInput'
              type="email"
              required
            />
            <input
              placeholder='Password'
              ref={password}
              className='loginInput'
              type="password"
              required
            />
            <input
              placeholder='Password Again'
              ref={passwordConfirm}
              className='loginInput'
              type="password"
              required
            />
            <button className='loginButton' type="submit">Sign Up</button>
            <Link to="/login">
            <button className='loginRegister'>Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
