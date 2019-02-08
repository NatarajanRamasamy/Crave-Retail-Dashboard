import React from 'react';
import '../assets/css/vendors/bootstrap/bootstrap.css';
import '../assets/scss/main.scss';
import { Router, Route } from 'react-router-dom';
import { PrivateRoute } from '../_components';
import { history } from '../_helpers';
import { SignIn } from './SignIn';
import { Dashboard } from './Dashboard';
import { UserManagment } from './UserManagment';
import { ResetPassword } from './ResetPassword';

class App extends React.Component {

  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/login" component={SignIn} />
            <Route path="/user" component={UserManagment} />
            <Route path="/password-reset" component={ResetPassword} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
