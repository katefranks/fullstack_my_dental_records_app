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

// componentDidMount(){
//   fetch('/api/v1/records/')
//     .then(response => {
//       if(!response.ok){
//         throw new Error('Network response was not ok');
//       } return response.JSON();
//       // console.log(response);
//     })
//     .then(data => this.setState({ records : data }))
//     // .then(data => this.setState({ ...data }))
//     .catch(error => {
//       console.log('There has been a problem with your fetch operation: ', error);
//     });
// }
componentDidMount(){
    fetch('/api/v1/records/')
      .then(response => response.json())
      .then(data => this.setState({ records : data }));
  }

  render(){
    const records = this.state.records.map(record =>
      <li className="li-record" key={record.id}>
        <p style={{color: "blue"}}>{record.appt_date}</p>
        <p>{record.category}</p>
        <p>{record.xrays}</p>
        <p>{record.xray_type}</p>
        <p>{record.services}</p>
        <p>{record.recommendations}</p>
      </li>
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
