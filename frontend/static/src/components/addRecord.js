import { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Cookies from 'js-cookie';

class AddRecord extends Component{
  constructor(props){
    super(props);
    this.state = {
      appt_date: '',
      category:  '',
      xrays: false,
      xray_type: '',
      appt_img: null,
    }
    //methods
  }
}
export default AddRecord;
