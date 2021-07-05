import {Component} from 'react';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleLogin(this.state);
  }
//

render(){
  return(

    <div>
      <form className="form-login p-4 mb-3 login-form-container" onSubmit={this.handleSubmit}>
      <h2>Login</h2>
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
        <input className="login-input" type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleInput}/>
      </div>
        <button className="btn btn-primary" type="submit">Submit</button>
        <div className="divider">New here? Register!</div>
        <button className="btn btn-primary toggle-register" onClick={() => this.props.handleNavigation('register')}>Create New Account</button>
        </form>
    </div>

  );
}
}

export default Login;
//
// <button className="toggle-register" onClick={() => this.props.handleNavigation('register')}>Create New Account</button>
