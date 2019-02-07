import React, { Component } from 'react'

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path_name: '',
      backBtn: true
    }
  }
  componentDidMount() {
    if (this.props.path === '/') {
      this.setState({
        path_name: 'Overview',
        backBtn: false
      })
    }
    else if (this.props.path === '/inspection') {
      this.setState({
        path_name: 'Inspection'
      })
    }
  }
  render() {
    return (
      <nav className="navbar fixed-top navbar-primary">
        <div className="d-flex flex-grow-1">
          <a className="ml-auto header-btn header-right-btn" href="/login">
            <img src="img/logout-icon.svg" alt="" />
            Logout
			      </a>
        </div>
      </nav>
    )
  }
}

export default Header
