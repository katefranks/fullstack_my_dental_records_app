import {Component} from 'react';

class Registration extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
  }
  handleInput(e){
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.handleRegistration(this.state);
  }

  toggleLogin(e){
    e.preventDefault();
    this.props.history.push('/login');
  }
//
render(){
  return(
<div className="login-form-div">
  <form className="form-login p-4 mb-3 login-form-container" onSubmit={this.handleSubmit}>
  <h2>New User? <br/> Register!</h2>
  <div className="form-group">
    <label for="InputUsername" className="form-label">Username</label>
    <br/>
    <input className="login-input" placeholder="username" name="username" type="text" value={this.state.username} onChange={this.handleInput}/>
  </div>
  <div className="form-group">
    <label for="InputUsername" className="form-label">Email</label>
    <br/>
    <input className="login-input" type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleInput}/>
  </div>
  <div className="form-group">
    <label for="InputUsername" className="form-label">Password</label>
    <br/>
    <input className="login-input" type="password" placeholder="password" name="password1" value={this.state.password} onChange={this.handleInput}/>
  </div>
  <div className="form-group">
    <label for="InputUsername" className="form-label">Password</label>
    <br/>
    <input className="login-input" type="password" placeholder="Re-enter Password" name="password2" value={this.state.password} onChange={this.handleInput}/>
  </div>
    <button className="btn btn-secondary" type="submit">Submit</button>
    <div className="divider login-divider">Have an Account?</div>
    <button type="button" onClick={this.toggleLogin} className="btn btn-secondary toggle-register" >Sign In</button>
    </form>
</div>
);
}
}
export default Registration;
//need to add back in functionality to toggle register/login.
// <button className="btn btn-primary toggle-register" onClick={() => this.props.handleNavigation('register')}>Create New Account</button>

  //
//   render(){
//     return(
//     <div>
//       <>
//       <form className="form-login" onSubmit={this.handleSubmit}>
//         <label className="login-label">New User? <br/> Register!</label>
//           <input className="login-input" placeholder="username" name="username" type="text" value={this.state.username} onChange={this.handleInput}/>
//         <label></label>
//           <input className="login-input" placeholder="email" name="email" type="email" value={this.state.email} onChange={this.handleInput}/>
//         <label></label>
//         <input className="login-input" placeholder="password" type="password" name="password1" value={this.state.password1} onChange={this.handleInput}/>
//         <label></label>
//         <input className="login-input" placeholder="re-type password" type="password" name="password2" value={this.state.password2} onChange={this.handleInput}/>
//         <button className="submit-button" type="submit">Submit</button>
//       </form>
//       </>
//     </div>
//     );
//   }
// }
// export default Registration;

  // <button className="toggle-register" onClick={() => this.props.handleNavigation('login') }>Current User Login</button>
