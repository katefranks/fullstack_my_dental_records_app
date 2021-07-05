import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Login from './Login';
import Registration from './Registration';
import Homepage from './Homepage';
import FindCare from './FindCare';
import ApiTest from './api_test';

// const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;


class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        selection: 'login'
      }
      this.handleLogin = this.handleLogin.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
      this.handleRegistration = this.handleRegistration.bind(this);
      this.handleNavigation = this.handleNavigation.bind(this);
  }
  handleNavigation(selection){
    this.setState({ selection });
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
      this.setState( { selection : 'homepage' });
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
    this.setState( { selection : 'homepage' });
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
  this.setState({ selection: 'login' });
  }

}

render(){
  return(
    <div className="main-container">
        <h1>My Dental Records</h1>
        <Login handleLogin={this.handleLogin} handleNavigation={this.handleNavigation} />
        <Registration handleRegistration={this.handleRegistration} handleNavigation={this.handleNavigation}/>
        <Homepage selection={this.state.selection} handleNavigation={this.handleNavigation} handleLogin={this.handleLogin} handleLogout={this.handleLogout} />
        <FindCare handleNavigation={this.handleNavigation}/>
        <ApiTest />
    </div>
  );
}
}

export default App;

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
