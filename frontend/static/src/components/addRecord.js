import { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Cookies from 'js-cookie';

class AddRecord extends Component{
  constructor(props){
    super(props);
    this.state = {
      appt_date: '',
      category:  '',
      xrays: false,
      xray_type: '',
      services: '',
      recommendations: '',
      appt_img: null,
      preview: '',
      isEditing: false,
      id: null,
    }
    //methods
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
            <input className="login-input" type="text" placeholder="Cleaning / Restorative" name="category" value={this.state.category} onChange={this.handleInput} disabled={!this.state?.isEditing}/>
          </div>

          <div className="form-group">
            <label for="xrays" className="form-label">Xrays:</label>
            <br/>
            <input className="login-input" type="text" placeholder="True / False" name="xrays" value={this.state.xrays} onChange={this.handleInput} disabled={!this.state?.isEditing}/>
          </div>

          <div className="form-group">
            <label for="category" className="form-label">Xray Type:</label>
            <br/>
            <input className="login-input" type="text" placeholder="BWX FMX Pano PA" name="xray_type" value={this.state.xray_type} onChange={this.handleInput} disabled={!this.state?.isEditing}/>
          </div>

          <div className="form-group">
            <label for="services" className="form-label">Services Completed:</label>
            <br/>
            <input className="login-input" type="text" placeholder="Services Completed?" value={this.state.services} onChange={this.handleInput} disabled={!this.state?.isEditing}/>
          </div>

          <div className="form-group">
            <label for="recommendations" className="form-label">Recommendations:</label>
            <br/>
            <input className="login-input" type="text" placeholder="Recommendations?" value={this.state.recommendations} onChange={this.handleInput} disabled={!this.state?.isEditing}/>
          </div>

          <div className="form-group">
            <label for="appt_img" className="form-label">Upload xrays or photos:</label>
            <br/>
            <input style={{width: "220px"}} type="file" name="appt_img" onChange={this.handleImage} disabled={!this.state?.isEditing}/>
            {this.state.appt_img
                  ? <img className="appt_img" src={this.state.preview || this.state.appt_img} alt=""/>
                  : null
                }
          </div>
          {!this.state.isEditing
            ? <button type="button" className="btn btn-primary" onClick={() => this.setState({isEditing: true})}>Edit</button>
            : <button className="btn btn-primary" type="button" onClick={this.handleSubmit}>Save</button>
          }
        </form>
    </div>


      </>
    )
  }
}
export default AddRecord;

// user
// appt_date
// category -choices
// xrays - boolean
// xray_type
// provider_name
// services
// recommendations
// appt_img



//
