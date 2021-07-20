import { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Cookies from 'js-cookie';
import { FaEdit , FaTrash, FaRegSave, FaSearchPlus, FaRegWindowClose} from 'react-icons/fa';


class MedicationDetail extends Component {
  //set on state key/values of Medication
  constructor(props){
    super(props);
    this.state = {
      ...this.props.medication,
      isEditing: false,
      selected: false,
//unpacking all of the keys/values from medication
    }

    // values being passed down are default values, rather than setting the vlaues to an empty string.
    // passing the medication down through props
    this.handleInput = this.handleInput.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.saveMedication = this.saveMedication.bind(this);
    this.selectMed = this.selectMed.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

saveMedication(e){
  e.preventDefault();

  const medication = this.state;

  if (!(medication.label_img instanceof File)){
    //"if it's NOT an instance of a file, remove it"
    delete medication.label_img;
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
  this.setState({label_img : file, });

  let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({
        preview: reader.result,
      });
    }
  reader.readAsDataURL(file);
}

selectMed(){
  this.setState({selected: !this.state.selected})
}

render(){

  return(
  <>
  <div className="record-form-div">
    <form className="form-login p-4 mb-3 login-form-container recordDetail-form-container">
      <button type="button" className="btn btn-outline-dark record-detail-button" onClick={()=> (this.selectMed())}>
        {!this.state.selected
         ?<FaSearchPlus/>
         :<FaRegWindowClose/>
        }
      </button>
        <div className="form-group">
          <label for="med_name" className="form-label record-form-label">Medication Name:</label>
          <br/>
          <input className="record-input" type="text" name="med_name" placeholder="ex. Allegra" value={this.state.med_name} onChange={this.handleInput} disabled={!this.state?.isEditing}/>
        </div>
        <div className="form-group">
          <label for="med_date" className="form-label record-form-label">Date Prescribed:</label>
          <br/>
          <input className="record-input record-input-date" name="med_date" type="date" value={this.state.med_date} onChange={this.handleInput} disabled={!this.state?.isEditing}/>
        </div>
        <div className="form-group">
          <label for="category" className="form-label record-form-label">Currenty Taking?</label>
          <br/>
        <select onChange={this.handleInput} value={this.state.category} name="category" id="category" disabled={!this.state?.isEditing}>
          <option value="CUR">Currently Taking</option>
          <option value="PAS">Not Currently Taking</option>
        </select>
        </div>

    {((!this.state.isEditing && this.state.dosage) || this.state.isEditing )
        ?(<div className="form-group">
          <label for="dosage" className="form-label record-form-label">Dosage:</label>
          <br/>
          <input className="record-input" type="text" name="dosage" placeholder="ex. 25mg" value={this.state.dosage} onChange={this.handleInput} disabled={!this.state?.isEditing}/>
        </div>)
        :null
      }

    {((!this.state.isEditing && this.state.prescriber) || this.state.isEditing )
        ?(<div className="form-group">
          <label for="prescriber" className="form-label record-form-label">Prescriber:</label>
          <br/>
          <input className="login-input" type="text" name="prescriber" placeholder="Who Prescribed It?" value={this.state.prescriber} onChange={this.handleInput} disabled={!this.state?.isEditing}/>
        </div>)
        : null
      }
      {((!this.state.isEditing && this.state.prescriber) || this.state.isEditing )
        ?(<div className="form-group">
          <label for="reason" className="form-label record-form-label">Reason for Taking:</label>
          <br/>
          <input className="login-input" type="text" placeholder="ex. Asthma" name="reason" value={this.state.reason} onChange={this.handleInput} disabled={!this.state?.isEditing}/>
        </div>)
        : null
      }
        <div className="form-group">
          {this.state.isEditing ?
          (<>
          <label for="label_img" className="form-label record-form-label">Bottle Label Picture:</label>
          <br/>
          <input style={{width: "220px"}} type="file" name="label_img" onChange={this.handleImage} disabled={!this.state?.isEditing}/>
          </>)
          : null
          }
          {this.state.label_img
                ? <img className="appt-img" src={this.state.preview || this.state.label_img} alt=""/>
                : null
              }
        </div>
        <div className="record-button-container">
        {!this.state.isEditing
          ? <button type="button" className="btn btn-outline-dark record-detail-button" onClick={() => this.setState({isEditing: true})}><FaEdit /></button>
          : <button className="btn btn-outline-dark record-detail-button" type="button" onClick={this.saveMedication}><FaRegSave /></button>
        }
        <button type="button" className="btn btn-outline-dark record-detail-button"  onClick={() => this.props.deleteMedication(this.props.medication.id)}><FaTrash/></button>
        </div>
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
