import { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Cookies from 'js-cookie';
import { FaEdit , FaTrash, FaRegSave} from 'react-icons/fa';


class MedicationDetail extends Component {
  //set on state key/values of Medication
  constructor(props){
    super(props);
    this.state = {
      ...this.props.medication,
      isEditing: false,
//unpacking all of the keys/values from medication
    }

    // values being passed down are default values, rather than setting the vlaues to an empty string.
    // passing the medication down through props
    this.handleInput = this.handleInput.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.saveMedication = this.saveMedication.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

saveMedication(e){
  e.preventDefault();

  const medication = this.state;

  if (!(medication.appt_img instanceof File)){
    //"if it's NOT an instance of a file, remove it"
    delete medication.appt_img;
    //deleting property if not an instance of a file.
  }

  delete medication.isEditing;
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
  this.props.editMedication(medication);

  this.setState({isEditing : false});

}

handleInput(e){
  // Computed property names
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
  this.setState( {[e.target.name]: e.target.value});
}

handleCheckbox(e) {
  this.setState({[e.target.name]: e.target.checked})
}

handleImage(e) {
  let file = e.target.files[0];
  this.setState({appt_img : file, });

  let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        preview: reader.result,
      });
    }
  reader.readAsDataURL(file);
}

render(){

  return(
  <>
  <div className="record-form-div">
    <form className="form-login p-4 mb-3 login-form-container profile-form-container">
        <div className="form-group">
          <label for="med_date" className="form-label">Date Prescribed:</label>
          <br/>
          <input className="login-input" name="med_date" type="date" value={this.state.med_date} onChange={this.handleInput} disabled={!this.state?.isEditing}/>
        </div>

        <div className="form-group">
          <label for="category" className="form-label">Currenty Taking?</label>
          <br/>
        <select onChange={this.handleInput} name="category" id="category" disabled={!this.state?.isEditing}>
          <option value="CUR">Currently Taking</option>
          <option value="PAS">No Longer Taking</option>
        </select>
        </div>

        <div className="form-group">
          <label for="dosage" className="form-label">Dosage:</label>
          <br/>
          <input className="login-input" type="text" name="dosage" placeholder="Dosage (if known)" value={this.state.dosage} onChange={this.handleInput} disabled={!this.state?.isEditing}/>
        </div>
        <div className="form-group">
          <label for="prescriber" className="form-label">Prescriber:</label>
          <br/>
          <input className="login-input" type="text" name="prescriber" placeholder="Who Prescribed It?" value={this.state.prescriber} onChange={this.handleInput} />
        </div>

        <div className="form-group">
          <label for="reason" className="form-label">Reason for Taking:</label>
          <br/>
          <input className="login-input" type="text" placeholder="ex. Asthma" name="reason" value={this.state.reason} onChange={this.handleInput} />
        </div>


        <div className="form-group">
          {this.state.isEditing ?
          (<>
          <label for="label_img" className="form-label">Bottle Label Picture:</label>
          <br/>
          <input style={{width: "220px"}} type="file" name="appt_img" onChange={this.handleImage} disabled={!this.state?.isEditing}/>
          </>)
          : null
          }
          {this.state.label_img
                ? <img className="appt-img" src={this.state.preview || this.state.label_img} alt=""/>
                : null
              }
        </div>
        {!this.state.isEditing
          ? <button type="button" className="btn btn-secondary record-detail-button" onClick={() => this.setState({isEditing: true})}><FaEdit /></button>
          : <button className="btn btn-secondary record-detail-button" type="button" onClick={this.saveMedication}><FaRegSave /></button>
        }
        <button type="button" className="btn btn-secondary record-detail-button"  onClick={() => this.props.deleteMedication(this.props.medication.id)}><FaTrash/></button>

      </form>
  </div>
  </>
  )
}
}
export default MedicationDetail;


// {((!this.state.isEditing && this.state.services) || this.state.isEditing )
// ?(<div className="form-group">
//   <label for="services" className="form-label">Services Completed:</label>
//   <br/>
//   <input className="login-input" type="text" name="services" placeholder="Services Completed?" value={this.state.services} onChange={this.handleInput} disabled={!this.state?.isEditing}/>
// </div>)
// : null
// }
