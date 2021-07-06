import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navigation extends Component {
  render() {
    return(
      <Navbar bg="light" expand="lg" className="navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto align-items-baseline">
            <NavLink to='/' className="mr-2">Home</NavLink>
            <NavLink to='/login' className="mr-2">Login</NavLink>
            <NavLink to='/registration' className="mr-2">Register</NavLink>
            <button className="btn" onClick={() => this.props.handleLogout()}>Logout</button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation;
