import { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import RecordDetail from './recordDetail'
import Cookies from 'js-cookie';
// import recordsNavBar from './recordsNavBar';

//get modal to open and close- react bootstrap modal

class Records extends Component {
  constructor(props){
    super(props);
    this.state = {
      records: [],
    }
    this.editRecord = this.editRecord.bind(this);
    this.deleteRecord = this.deleteRecord.bind(this);
  }
// Passing these methods down to the profile detail through props.

async editRecord(record){
  let formData = new FormData();

  const keys = Object.keys(record);
  keys.forEach(key => formData.append(key, record[key]));
// for each key were appending the key and value of key (using square bracket notation to access value)

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
}

async deleteRecord(id){
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }
  }
  fetch(`/api/v1/records/${id}`, options)
    .then(response => {
      const records = [...this.state.records];
      const index = records.findIndex(record => record.id === id);
      records.splice(index, 1);
      this.setState({ records });
    })
  .catch((error) => {
    console.error('Error: ', error);
  });
}


componentDidMount(){
    fetch('/api/v1/records/')
      .then(response => response.json())
      .then(data => this.setState({ records : data }));
  }

  render(){
    const records = this.state.records.map(record =>
      <RecordDetail key={record.id} record={record} deleteRecord={this.deleteRecord} editRecord={this.editRecord}/>
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


// Fetch records of logged in user
// get those to display
// allow them to edit and delete records
// list out user records. edit them and delete them
// query the records the belong to the logged in user. Return records.obj.all
