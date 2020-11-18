/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-grid-layout/css/styles.css';
// import 'react-resizable/css/styles.css';
import LoginForm from './loginForm';
import { login, logout } from '../../reducers/login/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const {
      formData: { login: { values: { email, password } } }, location, loginRequest, history,
    } = this.props;
    console.log("called")
    loginRequest({ email: email, password }).then((res) => {
      const { from } = location.state || { from: { pathname: '/' } };
      if (res && res.status === 200) {
        history.replace(from);
      } else {
        logout();
      }
    });
    return false;
  }

  render() {
    const { loginResponse } = this.props;
    return (
      <div>
        <LoginForm onSubmit={this.handleSubmit} response={loginResponse} />
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  formData: state.form,
  loginResponse: state.loginReducer,
});

const mapDispatchToProps = {
  loginRequest: login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
