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
    this.editRecord = this.editRecord.bind(this);
    // this.deleteRecord = this.deleteRecord.bind(this);
  }
// w/in records component write 2 methods- 1 to update and 1 to delete. Will pass these methods down to the profile detail through props.

async editRecord(record){
  let formData = new FormData();

  formData.append('appt_date', record.appt_date);
  formData.append('category', record.category);
  formData.append('xrays', record.xrays);
  formData.append('xray_type', record.xray_type);
  formData.append('services', record.services);
  formData.append('recommendations', record.recommendations);
  formData.append('appt_img', record.appt_img);
  // if (this.state.appt_img instanceof File){
  //   formData.append('appt_img', record.appt_img);
  // }
  //

  const options = {
    method: 'PATCH',
    headers: {
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: formData,
  };
  const response = await fetch(`/api/v1/records/${record.id}/`, options);
  if(!response.ok) {

  }
  // this.setState({isEditing: false})
}


componentDidMount(){
    fetch('/api/v1/records/')
      .then(response => response.json())
      .then(data => this.setState({ records : data }));
  }

  render(){
    const records = this.state.records.map(record =>
      <RecordDetail key={record.id} record={record} editRecord={this.editRecord}/>
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
