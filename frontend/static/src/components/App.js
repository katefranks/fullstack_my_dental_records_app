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
// import FindCare from './findcare';
import ApiTest from './api_test';
//
import GoogleMap from './findcare';

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
        <Navbar handleLogout={this.handleLogout} />

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
              path='/findcare'
              render={(props) => (
                <GoogleMap />
              )}
            />

          <Route
            path ='/api_test'
            render={(props) => (<ApiTest />)}
          />

          <PrivateRoute isAuthenticated={this.state.isAuthenticated} exact path="/">
             <Homepage addRecord={this.addRecord} records={this.records} />
          </PrivateRoute>
          <PrivateRoute isAuthenticated={this.state.isAuthenticated} path="/profile">
             <Profile />
          </PrivateRoute>
          <PrivateRoute isAuthenticated={this.state.isAuthenticated} handleLogout={this.handleLogout} path="/records">
             <Records />
          </PrivateRoute>
          <PrivateRoute isAuthenticated={this.state.isAuthenticated} handleLogout={this.handleLogout} path="/addRecord">
             <AddRecord />
          </PrivateRoute>

        </Switch>
      </>

  );
}
}

export default withRouter(App);

// <PrivateRoute isAuthenticated={this.state.isAuthenticated} handleLogout={this.handleLogout} path="/api_test">
//    <ApiTest />
// </PrivateRoute>


  // <PrivateRoute isAuthenticated={this.state.isAuthenticated} />
//
// Prior to React router:
// render(){
//   return(
//     <div className="main-container">
//         <h1>My Dental Records</h1>
//         <Login handleLogin={this.handleLogin} handleNavigation={this.handleNavigation} />
//         <Registration handleRegistration={this.handleRegistration} handleNavigation={this.handleNavigation}/>
//         <Homepage selection={this.state.selection} handleNavigation={this.handleNavigation} handleLogin={this.handleLogin} handleLogout={this.handleLogout} />
//         <FindCare handleNavigation={this.handleNavigation}/>
//         <ApiTest />
//     </div>
//   );
// }
// }

// export default App;



//
// export default GoogleApiWrapper({
//   apiKey: (API_KEY)
// })(App)


//REACT ROUTER:
// render (){
//   return (
//      <Router>
//        <div>
//          <nav>
//            <ul>
//              <li>
//                <Link to="/articles">Articles</Link>
//              </li>
//              <li>
//                <Link to="/profile">Profile</Link>
//              </li>
//              <li>
//                <Link to="/login">Login</Link>
//              </li>
//            </ul>
//          </nav>
//
//          <Switch>
//            <Route path="/profile">
//              <Profile />
//            </Route>
//            <Route path="/articles">
//              <Articles />
//            </Route>
//            <Route path="/login">
//              <Login handleLogin={this.handleLogin} handleNavigation={this.handleNavigation} />
//            </Route>
//          </Switch>
//        </div>
//      </Router>
//    );
//   }
//
// }
// export default App;
