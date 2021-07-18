import { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { Button , Modal } from 'react-bootstrap';
import { FaPlus} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RecordDetail from './recordDetail';
import AddRecord from './addRecord';
import Cookies from 'js-cookie';
import Homepage from './homepage';
// import recordsNavBar from './recordsNavBar';

//get modal to open and close- react bootstrap modal

class Records extends Component {
  constructor(props){
    super(props);
    this.state = {
      records: [],
      show: false,
    }
    this.addRecord = this.addRecord.bind(this);
    this.editRecord = this.editRecord.bind(this);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.filterCleaning = this.filterCleaning.bind(this);
    this.filterRestorative = this.filterRestorative.bind(this);
    this.filterXrays = this.filterXrays.bind(this);
  }


  // handleClose = () => this.setState({show: false});
  // handleShow = () => this.setState({show: true});

  handleModal(){
    this.setState({show: !this.state.show})
  }

async addRecord(record){
  const records = [...this.state.records, record];
  this.setState({ records });
}

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
  throw new Error('Network response was not ok');
  }
  this.setState({response});
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
    this.fetchData();
  }

  fetchData(){
      fetch('/api/v1/records/')
        .then(response => response.json())
        .then(data => this.setState({ records : data }));
    }

filterCleaning() {
   fetch(`/api/v1/records/category/?category=CLE`)
     .then(response => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then(data => this.setState({ records: data })).catch(error => {
       console.error('There has been a problem with your fetch operation:', error);
     });
 }

 filterRestorative() {
    fetch(`/api/v1/records/category/?category=RES`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => this.setState({ records: data })).catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }

  filterXrays() {
    fetch(`/api/v1/records/xrays/?xrays=True`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => this.setState({ records: data })).catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
  }
//
  render(){
    const records = this.state.records.map(record =>
      <RecordDetail key={record.id} record={record} deleteRecord={this.deleteRecord} editRecord={this.editRecord}/>
    )

    return(

      <div >
        <div className="addrecord-button-container">
          <h1>Records</h1>
          <Button className="category-button btn btn-dark" alt="Add Record" onClick={()=> (this.handleModal())}><FaPlus/></Button>
        </div>
          <Modal show={this.state.show} onHide={()=> (this.handleModal())}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Record</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AddRecord handleModal={this.handleModal} addRecord={this.addRecord}/>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>

        <div className="appt-filter-container">
        <Button className="category-button btn btn-dark" onClick={()=> (this.fetchData())}>View All</Button>
        <Button className="category-button btn btn-dark" onClick={()=> (this.filterCleaning())}>Cleaning Appts</Button>
        <Button className="category-button btn btn-dark" onClick={()=> (this.filterRestorative())}>Restorative Appts</Button>
        <Button className="category-button btn btn-dark" onClick={()=> (this.filterXrays())}>Xrays</Button>
        </div>
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
