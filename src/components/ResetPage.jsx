import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ResetPage extends Component {
  componentDidMount() {
    document.title = "Crave Retail | ResetPassword"
  }
  render() {
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
                <form className="flex-grow-1 text-center" action="">
                  <div className="form-group">
                    <label className="mb-3">Check your email for a temporary password.</label>
                  </div>
                  <div className="form-group d-flex align-items-md-center justify-content-center login-actions flex-column flex-md-row">
                    <Link to='/login' className="btn btn-primary login-btn">Back to Login Screen</Link>
                  </div>
                </form>
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

export default ResetPage
