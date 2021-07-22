import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaTooth, FaHome } from 'react-icons/fa';


class Navigation extends Component {


  render() {
    return(
      <>

      <Navbar collapseOnSelect expand="" bg="dark" variant="dark">


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {!!Cookies.get('Authorization') &&<Nav.Link href='/'>Home</Nav.Link>}
            {!!Cookies.get('Authorization') &&<Nav.Link href='/profile'>Profile</Nav.Link>}
            {!!Cookies.get('Authorization') &&<Nav.Link href='/records'>Records</Nav.Link>}
            {!!Cookies.get('Authorization') &&<Nav.Link href='/findcare'>FindCare</Nav.Link>}
            {!!Cookies.get('Authorization') &&<Nav.Link href='/medications'>Medications</Nav.Link>}

            {!Cookies.get('Authorization') &&<Nav.Link href='/login'>Login</Nav.Link>}
            {!Cookies.get('Authorization') &&<Nav.Link href='/registration'>Register</Nav.Link>}

            <Nav.Link href='/about'>Contact Us</Nav.Link>

            {!!Cookies.get('Authorization') &&<Nav.Link onClick={() => this.props.handleLogout()}>Logout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>

      </Navbar>





      </>
    )
  }
}

export default Navigation;

// <Navbar.Brand href="/">My Dental Records</Navbar.Brand>

//
// <Navbar  expand="" className="navbar navbar-dark bg-dark" id="main-navbar">
//
//   <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-dark" />
//   <Navbar.Collapse id="basic-navbar-nav" className="bg-dark">
//     <Nav className="mr-auto align-items-baseline">
//       {!!Cookies.get('Authorization') && <NavLink to='/' className="mr-2 bg-dark dropdown-item text-white">Home</NavLink> }
//       {!!Cookies.get('Authorization') && <NavLink to='/profile' className="mr-2 bg-dark dropdown-item text-white">Profile</NavLink> }
//       {!!Cookies.get('Authorization') && <NavLink to='/records' className="mr-2 bg-dark dropdown-item text-white">Records</NavLink> }
//       {!!Cookies.get('Authorization') && <NavLink to='/findcare' className="mr-2 bg-dark dropdown-item text-white">FindCare</NavLink> }
//       {!!Cookies.get('Authorization') && <NavLink to='/medications' className="mr-2 bg-dark dropdown-item text-white">Medications</NavLink> }
//
//       {!Cookies.get('Authorization') && <NavLink to='/login' className="mr-2 bg-dark dropdown-item text-white">Login</NavLink> }
//       {!Cookies.get('Authorization') && <NavLink to='/registration' className="mr-2 bg-dark dropdown-item text-white">Register</NavLink>}
//       <NavLink to='/about' className="mr-2 bg-dark dropdown-item text-white">Contact Us</NavLink>
//       {!!Cookies.get('Authorization') && <button className="mr-2 bg-dark dropdown-item text-white" onClick={() => this.props.handleLogout()}>Logout</button>}
//
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
//
