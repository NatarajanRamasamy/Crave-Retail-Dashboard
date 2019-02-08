import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { isEmail, isEmpty } from 'validator';
import {
  REQUIRED,
  INVALID
} from '../_constants/form.constants';
import { userActions } from '../_actions';

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      showForm: true,
      errors: {
        username: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitResetPassword = this.handleSubmitResetPassword.bind(this);
  }

  // component Did Mount 
  componentDidMount() {
    document.title = "Crave Retail | ResetPassword"
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

  // submit reset password email
  handleSubmitResetPassword(e) {
    e.preventDefault();
    const { username } = this.state;
    const { dispatch } = this.props;
    this.setState({
      errors: {
        username: this.validate('username', username),
      },
    });
    if (username) {
      // dispatch(userActions.resetPassword(username));
      this.setState({
        showForm: false
      })
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

      default:
        return '';
    }
  }

  render() {
    const { username } = this.state;
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
                <h1>Reset Password</h1>
              </div>
              <div className="login-form-body d-flex flex-grow-1 align-items-center">
                {(this.state.showForm ?
                  <form className="flex-grow-1" action="" onSubmit={this.handleSubmitResetPassword}>
                    <div className="form-group">
                      <label className="mb-3">Enter your email address and we will send you a link
                      to a page where you can reset your password.</label>
                      <input type="email" className={this.state.errors.username ? "form-control input-error" : "form-control"} id="email" placeholder="Enter your email" value={username} name="username" onChange={this.handleChange} />
                      <div className="error-block">{this.state.errors.username}</div>
                    </div>
                    <div className="form-group d-flex align-items-md-center justify-content-center login-actions flex-column flex-md-row">
                      {(this.state.errors.username) ? <button type="button" className="btn btn-primary login-btn " >Send E-Mail</button> : <button type="submit" className="btn btn-primary login-btn " >Send E-Mail</button>}
                    </div>
                    <div className="form-group d-flex align-items-md-center justify-content-center login-actions flex-column flex-md-row">
                      <Link to='/login' className="link-primary link-underline mb-2 mb-md-0">
                        Back to Login
                    </Link>
                    </div>
                  </form> :
                  <form className="flex-grow-1 text-center" action="">
                    <div className="form-group">
                      <label className="mb-3">Check your email for a temporary password.</label>
                    </div>
                    <div className="form-group d-flex align-items-md-center justify-content-center login-actions flex-column flex-md-row">
                      <Link to='/login' className="btn btn-primary login-btn">Back to Login Screen</Link>
                    </div>
                  </form>)}
              </div>
            </div>
          </div>
          <div className="login-copyright-sm d-md-none">
            Copyright © 2019
          </div>
        </div>
      </div>
    )
  }
}

ResetPassword.displayName = 'ResetPassword';

ResetPassword.propTypes = {
  userActions: PropTypes.func,
};

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedLoginPage = connect(mapStateToProps)(ResetPassword);
export { connectedLoginPage as ResetPassword }; 