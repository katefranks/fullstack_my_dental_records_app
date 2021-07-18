import {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Button , Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Records from './records';
import AddRecord from './addRecord';
import FindCare from './findcare';

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
      <nav className="homepage-container" >
        <NavLink  to='/profile' className="homepage-link  btn btn-dark btn-circle btn-xl">Profile</NavLink>
        <NavLink  to='/records' className="homepage-link  btn btn-dark btn-circle btn-xl">Records</NavLink>
        <NavLink to='/addRecord' className="homepage-link  btn btn-dark btn-circle btn-xl">Add<br/>Record</NavLink>
        <NavLink  to='/medications' className="homepage-link  btn btn-dark btn-circle btn-xl">Medications</NavLink>
        <NavLink to='/addMedication' className="homepage-link  btn btn-dark btn-circle btn-xl">Add<br/>Medication</NavLink>
        <NavLink  to='/findcare' className="homepage-link  btn btn-dark btn-circle btn-xl">Find<br/>Care</NavLink>
        <button type="button" className="btn btn-dark btn-circle btn-xl" onClick={() => this.props.handleLogout()}>Logout</button>

      </nav>
    </div>
  )
}

}
export default Homepage;

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
