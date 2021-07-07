import { Component } from 'react';
import Records from './records';
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
            <NavLink to='/records' className="mr-2">Records</NavLink>
            <NavLink to='/addRecord' className="mr-2">Add Record</NavLink>
            <button className="btn" onClick={() => this.props.handleLogout()}>Logout</button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation;
