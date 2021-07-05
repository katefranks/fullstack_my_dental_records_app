import {Component} from 'react';

class Homepage extends Component {

render(){
  return(
    <div>
    <h1>Welcome to the Homepage</h1>
    <button className="submit-button" onClick={this.props.handleLogout}>Logout</button>
    </div>
  )
}

}
export default Homepage;
