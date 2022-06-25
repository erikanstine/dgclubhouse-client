import React, { useContext, useRef } from 'react';
import './login.css';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@material-ui/core';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
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
              placeholder='Email'
              type='email'
              className='loginInput'
              ref={email}
              required
            />
            <input
              placeholder='Password'
              type='password'
              className='loginInput'
              ref={password}
              minLength='6'
              required
            />
            <button className='loginButton' type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress size="20px" style={{'color': 'white'}} />
              ) : (
                'Log In'
              )}
            </button>
            <span className='loginForgot'>Forgot Password?</span>
            <button className='loginRegister'>Create a New Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
