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
    this.toggleRegistration = this.toggleRegistration.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }
  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleLogin(this.state);
  }

  toggleRegistration(e){
    e.preventDefault();
    this.props.history.push("/registration");
  }

  demoLogin(e){
    this.setState({username: 'demo', email: 'demo@demo.com', password: 'safepass1', });
  }

render(){
  return(

    <div className="login-form-div">
      <form className="form-login p-4 mb-3 login-form-container" onSubmit={this.handleSubmit}>
      <button onClick={this.demoLogin} type="button"className="btn btn-primary btn-dark demo-login">Demo</button>
      <h2>Login</h2>
      <div className="form-group">
        <label for="username" className="form-label"></label>
        <br/>
        <input className="login-input" placeholder="username" name="username" type="text" value={this.state.username} onChange={this.handleInput}/>
      </div>
      <div className="form-group">
        <label for="email" className="form-label"></label>
        <br/>
        <input className="login-input" type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleInput}/>
      </div>
      <div className="form-group">
        <label for="password" className="form-label"></label>
        <br/>
        <input className="login-input" type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleInput}/>
      </div>
        <button className="btn btn-secondary" type="submit">Submit</button>
        <div className="divider login-divider">New here? Register!</div>
        <button onClick={this.toggleRegistration} type="button"className="btn btn-secondary toggle-register">Create New Account</button>
        </form>

    </div>

  );
}
}

export default Login;



//need to add back in functionality to toggle register/login.
// <button className="btn btn-primary toggle-register" onClick={() => this.props.handleNavigation('register')}>Create New Account</button>
