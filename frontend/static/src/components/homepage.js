import {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


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
