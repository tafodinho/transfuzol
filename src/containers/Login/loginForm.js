/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import renderField from './renderField';
import validate from './validate';
import TransfuzolLogo from '../../assets/images/transfuzol.png'

let LoginForm = (props) => {
  const {
    handleSubmit, response: {
      loading, errorMessage,
    },
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-area form login-form">
        <div className="header-image">
          <img src={TransfuzolLogo} />
          {/* <h1 className="logo">TransfuZol</h1> */}
        </div>
        <div className="">
          {errorMessage && <span className={errorMessage === 'loading...' ? 'clean' : 'error'}>{errorMessage}</span>}
          {/* {sessionExpired && <span className="error">session Expired login to continue</span>} */}
          <div className="form-row">
            <Field
              name="email"
              type="text"
              component={renderField}
              placeholder="Enter email"
              autoFocus
            />
          </div>
          <div className="form-row">
            <Field
              name="password"
              type="password"
              component={renderField}
              placeholder="Enter Password"
            />
          </div>
          <div className="remember-me-section">
            <div className="remember-me">
              <input type="checkbox" />
              <p>Remember Me</p>
            </div>
            <p>Forget Password?</p>
          </div>
          <div className="form-row submit-buttons">
            {/* <Link to="/signup"><button type="button" className="signup-button left">SignUp</button></Link> */}
            <button type="submit" className="signup-button" disabled={loading}>Login</button>
          </div>
        </div>
      </div>
      <div className="right-login-section">
        {/* <img src={lifeMixTracks} className="lifemix-tracks" />
        <img src={lifeMixMan} className="lifemix-man" /> */}
      </div>
    </form>
  );
};

export default LoginForm = reduxForm({
  form: 'login', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(LoginForm);
