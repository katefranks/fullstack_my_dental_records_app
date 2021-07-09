import { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Cookies from 'js-cookie';


class RecordDetail extends Component {
  //set on state key/values of record
  constructor(props){
    super(props);
    this.state = {
      ...this.props.record,
      isEditing: false,
//unpacking all of the keys/values from record
    }

    // values being passed down are default values, rather than setting the vlaues to an empty string.
    // passing the record down through props
    this.handleInput = this.handleInput.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.saveRecord = this.saveRecord.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

saveRecord(e){
  e.preventDefault();
  // const record = {...this.props.record};
  // record = this.state.record;
  const record = this.state;

  if (!(record.appt_img instanceof File)){
    //"if it's NOT an instance of a file, remove it"
    delete record.appt_img;
    //deleting property if not an instance of a file. 
  }

  delete record.isEditing;
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
  this.props.editRecord(record);

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
          <label for="appt_date" className="form-label">Appointment Date:</label>
          <br/>
          <input className="login-input" placeholder="MM/DD/YYYY" name="appt_date" type="text" value={this.state.appt_date} onChange={this.handleInput} disabled={!this.state?.isEditing}/>
        </div>
        <div className="form-group">
          <label for="category" className="form-label">Appointment Category</label>
          <br/>
        <select onChange={this.handleInput} value={this.state.category} name="category" id="category" disabled={!this.state?.isEditing}>
          <option value="CLE">Cleaning</option>
          <option value="RES">Restorative</option>
        </select>
        </div>
        <div className="form-group">
          <input id="xrays" name="xrays" type="checkbox" checked={this.state.xrays} onChange={this.handleCheckbox} disabled={!this.state?.isEditing}/>
          <br />
          <label for="xrays" className="form-label">X Rays</label>
        </div>
        <div className="form-group">
          <label for="category" className="form-label">Xray Type:</label>
          <br/>
          <input className="login-input" type="text" placeholder="BWX FMX Pano PA" name="xray_type" value={this.state.xray_type} onChange={this.handleInput} disabled={!this.state?.isEditing}/>
        </div>

        <div className="form-group">
          <label for="services" className="form-label">Services Completed:</label>
          <br/>
          <input className="login-input" type="text" name="services" placeholder="Services Completed?" value={this.state.services} onChange={this.handleInput} disabled={!this.state?.isEditing}/>
        </div>

        <div className="form-group">
          <label for="recommendations" className="form-label">Recommendations:</label>
          <br/>
          <input className="login-input" type="text" placeholder="Recommendations?" name="recommendations" value={this.state.recommendations} onChange={this.handleInput} disabled={!this.state?.isEditing}/>
        </div>

        <div className="form-group">
          <label for="appt_img" className="form-label">Upload xrays or photos:</label>
          <br/>
          <input style={{width: "220px"}} type="file" name="appt_img" onChange={this.handleImage} disabled={!this.state?.isEditing}/>
          {this.state.appt_img
                ? <img className="appt-img" src={this.state.preview || this.state.appt_img} alt=""/>
                : null
              }
        </div>
        {!this.state.isEditing
          ? <button type="button" className="btn btn-primary" onClick={() => this.setState({isEditing: true})}>Edit</button>
          : <button className="btn btn-primary" type="button" onClick={this.saveRecord}>Save</button>
        }
        <button type="button" className="btn btn-primary"  onClick={() => this.props.deleteRecord(this.props.record.id)}>Delete</button>
      </form>
  </div>
  </>
  )
}
}
export default RecordDetail;

// <button type="button" className="btn btn-primary"  onClick={() => this.props.deleteRecord(this.props.record.id)}>Delete</button>

//
//   render() {
//     const record = this.props.record;
//     return(
//       <li className="li-record">
//         <p style={{color: "blue"}}>{record.appt_date}</p>
//         <p>{record.category}</p>
//         <p>{record.xrays}</p>
//         <p>{record.xray_type}</p>
//         <p>{record.services}</p>
//         <p>{record.recommendations}</p>
//       </li>
//     );
//   }
// }
// export default RecordDetail;
