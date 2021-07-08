import React from 'react';
import Cookies from 'js-cookie';
import Registration from './Registration';
import Login from './Login';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selection: !! Cookies.get('Authorization') ? 'messages' : 'login'
    };
  this.handleLogin = this.handleLogin.bind(this);
  this.handleLogout = this.handleLogout.bind(this);
  this.handleNavigation = this.handleNavigation.bind(this);
  this.handleRegistration = this.handleRegistration.bind(this);
}

handleNavigation(selection){
  this.setState({ selection });
}
//for logout add button and set selection to 'logout'
async handleLogin(user){

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    },
    body: JSON.stringify(user),
  };

  const handleError = (err) => console.warn(err);
  const response = await fetch('/rest-auth/login/', options).catch(handleError);

if(response.ok){
  const data = await response.json().catch(handleError);
  Cookies.set('Authorization', `Token ${data.key}`);
  this.setState({ selection : 'messages' });
} else {
  alert('Incorrect Username or Password, Please Try Again!')
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

  const handleError = (err) => console.warn(err);
  const response = await fetch('/rest-auth/registration/', options).catch(handleError);

  if(response.ok){
  const data = await response.json().catch(handleError);

  Cookies.set('Authorization', `Token ${data.key}`);
  this.setState({ selection : 'messages' });
} else {
  //throw error
}
}

//for logout add button and set selection to 'logout'
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
    let html;

    if(this.state.selection === 'register') {
      html = <Registration handleRegistration={this.handleRegistration} handleNavigation={this.handleNavigation}/>;
    } else if (this.state.selection === 'login') {
      html = <Login handleLogin={this.handleLogin} handleNavigation={this.handleNavigation}/>;
    } else {
      html = <MessageList handleLogout={this.handleLogout} />
    }

    return(
      <>
        <div className="chat-app-container">
          <header className="chat-app-header">
            <p id="header-text">¿Qué tal?</p>
          </header>
          {html}
        </div>
      </>
    )
  }
}
export default App;


// return(
//   <>
//     <div className="signin-view">
//       <button className="logout-button" onClick={this.handleLogout}>Logout</button>
//     </div>
//     <div className="chat-app-container">
//       <header className="chat-app-header">
//         <p id="header-text">¿Qué tal?</p>
//       </header>
//       {html}
//     </div>
//   </>
// )
// }
// }
// export default App;
