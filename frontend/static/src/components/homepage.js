import {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button , Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Records from './records';
import AddRecord from './addRecord';
import FindCare from './findcare';
import { FaTooth } from 'react-icons/fa';

class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = {

      show: false,
    }
    this.handleModal = this.handleModal.bind(this);
  }
  handleModal(){
    this.setState({show: !this.state.show})
  }

render(){
  return(
    <div>
    <h1 id="homepage-h1">Welcome!</h1>
    <div className="homepage-container">
    <nav className="homepage-buttons" >
        <Nav.Link  href='/profile' className="homepage-link  btn btn-dark btn-circle btn-xl">Profile</Nav.Link>
        <Nav.Link  href='/records' className="homepage-link  btn btn-dark btn-circle btn-xl">Records</Nav.Link>
        <Nav.Link href='/addRecord' className="homepage-link  btn btn-dark btn-circle btn-xl">Add<br/>Record</Nav.Link>
        <Nav.Link  href='/medications' className="homepage-link  btn btn-dark btn-circle btn-xl">Medications</Nav.Link>
        <Nav.Link href='/addMedication' className="homepage-link  btn btn-dark btn-circle btn-xl">Add<br/>Medication</Nav.Link>
        <Nav.Link  href='/findcare' className="homepage-link  btn btn-dark btn-circle btn-xl">Find<br/>Care</Nav.Link>
        <button type="button" className="homepage-link btn btn-dark btn-circle btn-xl" onClick={() => this.props.handleLogout()}>Logout</button>

      </nav>
      </div>
    </div>
  )
}

}
export default Homepage;

// <FaTooth />
// <h1 id="homepage-h1">Welcome!</h1>



// <div className="addrecord-button-container">
// <Button onClick={()=> (this.handleModal())}>Add New Record</Button>
// </div>
//   <Modal show={this.state.show} onHide={()=> (this.handleModal())}>
//     <Modal.Header closeButton>
//       <Modal.Title>Add New Record</Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//       <AddRecord handleModal={this.handleModal} addRecord={this.state.addRecord}/>
//     </Modal.Body>
//     <Modal.Footer></Modal.Footer>
//   </Modal>
