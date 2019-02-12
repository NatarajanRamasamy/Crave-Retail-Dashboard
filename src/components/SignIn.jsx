import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { isEmail, isEmpty, isLength } from 'validator';
import { BeatLoader } from 'react-spinners';
import {
  REQUIRED,
  INVALID,
  LENGTH_REQUIRED,
  PASSWORD_LENGTH,
  ONLY_NUMBER_CHARACTER,
} from '../_constants/form.constants';
import { userActions } from '../_actions';

class SignIn extends Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());

    this.state = {
      username: '',
      password: '',
      errors: {
        username: '',
        password: '',
      },
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
  }

  // component Did Mount 
  componentDidMount() {
    document.title = "Crave Retail | Login"
  }

  // onchange input fields
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      errors: {
        [name]: this.validate(name, value),
      },
    });
  }

  // submit login form
  handleSubmitLogin(e) {
    e.preventDefault();
    const { username, password } = this.state;
    const { dispatch } = this.props;
    this.setState({
      errors: {
        username: this.validate('username', username),
        password: this.validate('password', password),
      },
      loading: true
    });
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  // validations for input fields
  validate = (name, value) => {
    switch (name) {
      case 'username':
        if (isEmpty(value)) {
          return REQUIRED('Email');
        }
        if (!isEmail(value)) {
          return INVALID('Email');
        }
        return '';

      case 'password':
        if (isEmpty(value)) {
          return REQUIRED('Password');
        }
        if (!/\d/.test(value)) {
          return ONLY_NUMBER_CHARACTER;
        }
        if (!isLength(value, PASSWORD_LENGTH, PASSWORD_LENGTH)) {
          return LENGTH_REQUIRED('Password', { min: PASSWORD_LENGTH, max: PASSWORD_LENGTH });
        }
        return '';

      default:
        return '';
    }
  }

  render() {
    const { username, password } = this.state;
    let alert = this.props.alert;
    let errorMsg = '';
    if (alert.message === "Unauthorized") {
      errorMsg = "Please enter a valid UserName/Password"
    }
    else {
      errorMsg = '';
    }

    return (
      <div>
        <div className="container-fill bg-light login-page align-items-center justify-content-center">
          <div className="login-container d-flex flex-column flex-md-row">
            <div className="login-brand-con d-flex flex-column">
              <div className="d-flex flex-grow-1 align-items-center justify-content-center">
                <img src="/img/logo.png" className="brand-icon" alt="" />
              </div>
              <div className="login-footer align-items-center justify-content-center d-none d-md-flex">
                Copyright © 2019
              </div>
            </div>
            <div className="login-form-con d-flex flex-column">
              <div className="login-form-header d-flex align-items-center">
                <h1>Login</h1>
              </div>
              <div className="login-form-body d-flex flex-grow-1 align-items-center">
                <form className="flex-grow-1" action="" onSubmit={this.handleSubmitLogin} >
                  {errorMsg && <div className="login-error-list">
                    {errorMsg}
                  </div>}
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className={this.state.errors.username ? "form-control input-error" : "form-control"} id="email" placeholder="Enter your email Id" value={username} name="username" onChange={this.handleChange} />
                    <div className="error-block">{this.state.errors.username}</div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Password</label>
                    <input type="password" className={this.state.errors.password ? "form-control input-error" : "form-control"} id="pwd" placeholder="Enter your password" name="password" value={password} onChange={this.handleChange} autoComplete="off" />
                    <div className="error-block">{this.state.errors.password}</div>
                  </div>
                  <div className="form-group d-flex align-items-md-center justify-content-between login-actions flex-column flex-md-row">
                    <Link to='/password-reset' className="link-primary link-underline mb-2 mb-md-0">
                      Forgot your Password ?
                    </Link>
                    {(this.state.errors.username || this.state.errors.password) ? <button type="button" className="btn btn-primary login-btn">Login</button> :
                      (this.state.loading && this.props.authentication.loader) ? <button className="btn btn-primary login-btn" type="button">
                        {/* loader */}
                        <BeatLoader
                          sizeUnit={"px"}
                          size={11}
                          color={'#7f869c'}
                          loading={true}
                        />
                      </button> :
                        <button type="submit" className="btn btn-primary login-btn">Login</button>}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="login-copyright-sm d-md-none">
            Copyright © 2019
          </div>
        </div>
      </div >
    )
  }
}

SignIn.displayName = 'SignIn';

SignIn.propTypes = {
  userActions: PropTypes.func,
};

function mapStateToProps(state) {
  const { alert, authentication } = state;
  return {
    alert,
    authentication
  };
}

const connectedLoginPage = connect(mapStateToProps)(SignIn);
export { connectedLoginPage as SignIn }; 
