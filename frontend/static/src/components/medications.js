import { Component } from 'react';
import { Button , Modal } from 'react-bootstrap';
import { FaPlus} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MedicationDetail from './medicationDetail';
import AddMedication from './addMedications';
import Cookies from 'js-cookie';


class Medications extends Component {
  constructor(props){
    super(props);
    this.state = {
      medications: [],
      show: false,
    }
    this.addMedication = this.addMedication.bind(this);
    this.editMedication = this.editMedication.bind(this);
    this.deleteMedication = this.deleteMedication.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.filterCurrent = this.filterCurrent.bind(this);
    this.filterPast = this.filterPast.bind(this);

  }


  // handleClose = () => this.setState({show: false});
  // handleShow = () => this.setState({show: true});

  handleModal(){
    this.setState({show: !this.state.show})
  }


async addMedication(medication){
  const medications = [medication, ...this.state.medications];
  this.setState({ medications });
  this.fetchData();
}

async editMedication(medication){
  let formData = new FormData();

  const keys = Object.keys(medication);
  keys.forEach(key => formData.append(key, medication[key]));
// for each key were appending the key and value of key (using square bracket notation to access value)

  const options = {
    method: 'PATCH',
    headers: {
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: formData,
  };
  const response = await fetch(`/api/v1/medications/${medication.id}/`, options);
  if(!response.ok) {
  throw new Error('Network response was not ok');
  }
  this.setState({response});
}

async deleteMedication(id){
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken')
    }
  }
  fetch(`/api/v1/medications/${id}`, options)
    .then(response => {
      const medications = [...this.state.medications];
      const index = medications.findIndex(medication => medication.id === id);
      medications.splice(index, 1);
      this.setState({ medications });
    })
  .catch((error) => {
    console.error('Error: ', error);
  });
}


componentDidMount(){
    this.fetchData();
  }

  fetchData(){
      fetch('/api/v1/medications/')
        .then(response => response.json())
        .then(data => this.setState({ medications : data }));
    }

filterCurrent() {
   fetch(`/api/v1/medications/category/?category=CUR`)
     .then(response => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then(data => this.setState({ medications: data })).catch(error => {
       console.error('There has been a problem with your fetch operation:', error);
     });
 }

 filterPast() {
    fetch(`/api/v1/medications/category/?category=PAS`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => this.setState({ medications: data })).catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }

//
  render(){
    const medications = this.state.medications.map(medication =>
      <MedicationDetail key={medication.id} medication={medication} deleteMedication={this.deleteMedication} editMedication={this.editMedication}/>
    )

    return(

      <div>
        <div className="addrecord-button-container">
          <h1>Medications</h1>
          <Button className="add-record-button-modal btn btn-dark" onClick={()=> (this.handleModal())}><FaPlus/></Button>
        </div>
        <Modal className="record-modal" show={this.state.show} onHide={()=> (this.handleModal())}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Medication</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddMedication handleModal={this.handleModal} addMedication={this.addMedication}/>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>

        <div className="appt-filter-container">
        <Button className="category-button btn btn-dark" onClick={()=> (this.fetchData())}>View All</Button>
        <Button className="category-button btn btn-dark" onClick={()=> (this.filterCurrent())}>Currently Taking</Button>
        <Button className="category-button btn btn-dark" onClick={()=> (this.filterPast())}>Previously Taken</Button>
        </div>
        <ul>{medications}</ul>
      </div>
    );
  }
}
export default Medications;




// CURRENT = 'CUR'
//   PAST = 'PAS'
//
//   CATEGORY_CHOICES = [
//       (CURRENT, 'Currently Taking'),
//       (PAST, 'No Longer Taking'),
//   ]
//
//   user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
//   med_date = models.DateField(auto_now=False, blank=True, null=True,)
//   category = models.CharField(max_length=3, choices=CATEGORY_CHOICES, null=True, default='CUR')
//   prescriber = models.CharField(max_length=255, blank=True)
//   dosage = models.TextField(blank=True)
//   reason = models.TextField(blank=True)
//   label_img = models.ImageField(null=True, blank=True, upload_to='medications/')
