import { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import RecordDetail from './recordDetail'
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
// w/in records component write 2 methods- 1 to update and 1 to delete. Will pass these methods down to the profile detail through props.

componentDidMount(){
    fetch('/api/v1/records/')
      .then(response => response.json())
      .then(data => this.setState({ records : data }));
  }

  render(){
    const records = this.state.records.map(record =>
      <RecordDetail key={record.id} record={record} />
    )
    return(

      <div>
        <h1>Records</h1>
        <ul>{records}</ul>
      </div>

    );
  }
}
export default Records;

// appt_date: '',
// category:  'CLE',
// xrays: false,
// xray_type: '',
// services: '',
// recommendations: '',
// appt_img: null,
// preview: '',
// isEditing: false,
// id: null,

      // <recordsNavBar/>

// Fetch records of logged in user
// get those to display
// allow them to edit and delete records
// list out user records. edit them and delete them
// query the records the belong to the logged in user. Return records.obj.all
