import './App.css';
import "../index.css";
import "../index.js";
import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaTooth } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
import PrivateRoute from './privateRoute';
import Navbar from './navbar';
import Login from './login';
import Registration from './registration';
import Homepage from './homepage';
import About from './about';
import Profile from './profile';
import Records from './records';
import AddRecord from './addRecord';
import FindCare from './findcare';
import Medications from './medications';
import AddMedication from './addMedications';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAuthenticated: !!Cookies.get('Authorization') ? true : false
    };
      this.handleLogin = this.handleLogin.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
      this.handleRegistration = this.handleRegistration.bind(this);
  }

  async handleLogin(user){
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken')
      },
      body: JSON.stringify(user),
    };
    const handleError = (error) => console.warn(error);
    const response = await fetch('/rest-auth/login/', options).catch(handleError);

    if(response.ok){
      const data = await response.json().catch(handleError);
      Cookies.set('Authorization', `Token ${data.key}`);
      this.setState({isAuthenticated: true});
      this.props.history.push('/');
    } else {
      alert('Network issue: Please Try Again!')
    }
  }

async handleRegistration(user){
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    },
    body: JSON.stringify(user),
  };
  const handleError = (error) => console.warn(error);
  const response = await fetch('/rest-auth/registration/', options).catch(handleError);

  if(response.ok){
    const data = await response.json().catch(handleError);

    Cookies.set('Authorization', `Token ${data.key}`);
    this.setState({isAuthenticated: true});
    this.props.history.push('/');
  } else {
    alert('Network issue: Please Verify that Passwords Match & Try Again.');
  }
}

async handleLogout(){

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
  };

  const handleError = (err) => console.warn(err);
  const response = await fetch('/rest-auth/logout/', options).catch(handleError);

  if(response.ok){
    Cookies.remove('Authorization');
    this.setState({isAuthenticated: false});
  }

}



render(){
  return(
    <>
    <div className="content-container">
      <header className="bg-dark" id="main-header">
        <Navbar handleLogout={this.handleLogout} />
        <a href="/" id="header-title">My Dental Records</a>
      </header>
        <Switch>
            <Route
              path='/login'
              render={(props) => (
                <Login {...props} handleLogin={this.handleLogin} isAuthed={true} />
              )}
            />
            <Route
              path='/registration'
              render={(props) => (
                <Registration {...props} handleRegistration={this.handleRegistration} />
              )}
            />
            <Route
              path='/about'
              render={(props) => (
                <About handleLogout={this.handleLogout}/>
              )}
            />

          <PrivateRoute isAuthenticated={this.state.isAuthenticated} handleLogout={this.handleLogout} path="/findcare">
             <FindCare />
          </PrivateRoute>

          <PrivateRoute isAuthenticated={this.state.isAuthenticated} exact path="/">
             <Homepage addRecord={this.addRecord} records={this.records} handleLogout={this.handleLogout}/>
          </PrivateRoute>
          <PrivateRoute isAuthenticated={this.state.isAuthenticated} path="/profile">
             <Profile />
          </PrivateRoute>

          <PrivateRoute isAuthenticated={this.state.isAuthenticated} handleLogout={this.handleLogout} path="/records">
             <Records />
          </PrivateRoute>
          <PrivateRoute isAuthenticated={this.state.isAuthenticated} handleLogout={this.handleLogout} path="/addRecord">
            <div className="add-record-route">
              <div className="addrecord-form-container">
                <div className="login-form-div addrecord-component-container">
                   <AddRecord />
                 </div>
              </div>
            </div>
          </PrivateRoute>

          <PrivateRoute isAuthenticated={this.state.isAuthenticated} handleLogout={this.handleLogout} path="/medications">
             <Medications />
          </PrivateRoute>

          <PrivateRoute isAuthenticated={this.state.isAuthenticated} handleLogout={this.handleLogout} path="/addMedication">
            <div className="add-record-route">
              <div className="addrecord-form-container">
                <div className="login-form-div addrecord-component-container">
                   <AddMedication />
                </div>
              </div>
             </div>
          </PrivateRoute>

        </Switch>
      </div>
        <footer id="footer" className="main-footer bg-dark footer--pin">
          {!!Cookies.get('Authorization')? <NavLink to='/' className=""><h1 id="footer-text"><FaTooth /></h1></NavLink>
          :<NavLink to='/about' className="mr-2 bg-dark dropdown-item text-white"><h1 id="footer-text"><FaTooth /></h1></NavLink>
          }
        </footer>
      </>
  );
}
}

export default withRouter(App);

// <h2 className="" id="header-title">My Dental Records</h2>

// <a  href="http://www.kateloves2code.com" target="_blank"><h1 id="footer-text"><FaTooth /></h1></a>
// <h1 id="footer-text"><FaTooth /></h1>
// <Route
//   path='/findcare'
//   render={(props) => (
//     <FindCare />
//   )}
// />

// <a  href="http://www.kateloves2code.com" target="_blank"><h1 id="footer-text"><FaTooth /></h1></a>

// <FaTooth />
// <footer className="main-footer bg-dark ">
//   <a  href="http://www.kateloves2code.com" target="_blank">
//   <h1 id="footer-text"><FaTooth /></h1>
//   </a>
// </footer>

//
//
//   <Navbar handleLogout={this.handleLogout} />
//
// </header>
