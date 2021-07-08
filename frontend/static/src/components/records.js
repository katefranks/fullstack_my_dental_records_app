import { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Cookies from 'js-cookie';
// import recordsNavBar from './recordsNavBar';

class Records extends Component {
  constructor(props){
    super(props);
    this.state = {
      records: [],
    }
    //methods
  }
  render(){
    return(
      
      <div>Record List</div>

    );
  }
}
export default Records;

      // <recordsNavBar/>
