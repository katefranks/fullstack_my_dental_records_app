import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import "../index.css";
import "../index.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//App Components:
import PrivateRoute from './privateRoute';
import Navbar from './navbar';
import Login from './login';
import Registration from './registration';
import Homepage from './homepage';
import Profile from './profile';
import Records from './records';
import AddRecord from './addRecord';
import FindCare from './findcare';
import ApiTest from './api_test';
import Medications from './medications';
import AddMedication from './addMedications';
//
import GoogleMap from './findcare';
import { FaTooth } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { fasTooth } from "@fortawesome/free-solid-svg-icons";
// library.add(fab,  fasTooth );
//
// const element = <FontAwesomeIcon icon={fasTooth} />

// const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;


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
      alert('Incorrect Username of Password, Please Try Again!')
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
    throw new Error('Network response was not ok');
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
        <h2 className="" id="header-title">My Dental Records</h2>
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
          <a  href="http://www.kateloves2code.com" target="_blank">
          <h1 id="footer-text"><FaTooth /></h1>
          </a>
        </footer>
      </>

  );
}
}

export default withRouter(App);

// <h1 id="footer-text"><FaTooth /></h1>

// <Route
//   path='/findcare'
//   render={(props) => (
//     <FindCare />
//   )}
// />



// <FaTooth />
// <footer className="main-footer bg-dark ">
//   <a  href="http://www.kateloves2code.com" target="_blank">
//   <h1 id="footer-text"><FaTooth /></h1>
//   </a>
// </footer>
