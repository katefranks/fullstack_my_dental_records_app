import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Cookies from 'js-cookie';


class Navigation extends Component {
  render() {
    return(
      <Navbar  expand="" className="navbar navbar-dark bg-dark" id="main-navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-dark" />


        <Navbar.Collapse id="basic-navbar-nav" className="bg-dark">
          <Nav className="mr-auto align-items-baseline">
            {!!Cookies.get('Authorization') && <NavLink to='/' className="mr-2 bg-dark dropdown-item text-white">Home</NavLink> }
            {!!Cookies.get('Authorization') && <NavLink to='/profile' className="mr-2 bg-dark dropdown-item text-white">Profile</NavLink> }
            {!!Cookies.get('Authorization') && <NavLink to='/records' className="mr-2 bg-dark dropdown-item text-white">Records</NavLink> }
            {!!Cookies.get('Authorization') && <NavLink to='/medications' className="mr-2 bg-dark dropdown-item text-white">Medications</NavLink> }
             <NavLink to='/findcare' className="mr-2 bg-dark dropdown-item text-white">FindCare</NavLink>
            {!Cookies.get('Authorization') && <NavLink to='/login' className="mr-2 bg-dark dropdown-item text-white">Login</NavLink> }
            {!Cookies.get('Authorization') && <NavLink to='/registration' className="mr-2 bg-dark dropdown-item text-white">Register</NavLink>}
            {!!Cookies.get('Authorization') && <button className="mr-2 bg-dark dropdown-item text-white" onClick={() => this.props.handleLogout()}>Logout</button>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Navigation;

// <Navbar bg="light" expand="lg" className="navbar" id="main-navbar">

// {!Cookies.get('Authorization') && <NavLink to='/findcare' className="mr-2">Find Care</NavLink> }
