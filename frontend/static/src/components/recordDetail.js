import { Component } from 'react';
import './App.css';
import { FaEdit , FaTrash, FaRegSave} from 'react-icons/fa';

class RecordDetail extends Component {
  //set on state key/values of record
  constructor(props){
    super(props);
    this.state = {
      ...this.props.record,
      //unpacking all of the keys/values from record
      isEditing: false,
      selected: false,
    }
    // values being passed down are default values, rather than setting the vlaues to an empty string.
    // passing the record down through props
    this.handleInput = this.handleInput.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.saveRecord = this.saveRecord.bind(this);
  }

saveRecord(e){
  e.preventDefault();
  // const record = {...this.props.record};
  // record = this.state.record;
  const record = {...this.state};

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
    <form className="form-login p-4 mb-3 login-form-container recordDetail-form-container">

        <div className="form-group">
          <label for="appt_date" className="form-label record-form-label">Appointment Date:</label>
          <br/>
          <input className="record-input record-input-date" name="appt_date" type="date" value={this.state.appt_date} onChange={this.handleInput} disabled={!this.state?.isEditing}/>
        </div>
        <div className="form-group">
          <label for="category" className="form-label record-form-label">Appointment Type</label>
          <br/>
        <select onChange={this.handleInput} value={this.state.category} name="category" id="category" disabled={!this.state?.isEditing}>
          <option value="CLE">Cleaning</option>
          <option value="RES">Restorative</option>
        </select>
        </div>

        {this.state.isEditing?
        <div className="form-group">
          <input id="xrays" name="xrays" type="checkbox" checked={this.state.xrays} onChange={this.handleCheckbox} disabled={!this.state?.isEditing}/>
          <br />
          <label for="xrays" className="form-label record-form-label">X Rays</label>
        </div>
        : null
        }
        {!this.state.isEditing && this.state.xrays &&
        (<div className="form-group">
          <label for="category" className="form-label record-form-label">Xray Type:</label>
          <br/>
          <input className="record-input" type="text" placeholder="BWX FMX Pano PA" name="xray_type" value={this.state.xray_type} onChange={this.handleInput} disabled={!this.state?.isEditing} />
        </div>)
        }

        {this.state.isEditing &&
          <div className="form-group">
            <label for="category" className="form-label record-form-label">Xray Type:</label>
            <br/>
            <input className="record-input" type="text" placeholder="BWX FMX Pano PA" name="xray_type" value={this.state.xray_type} onChange={this.handleInput} />
          </div>
        }

        {((!this.state.isEditing && this.state.services) || this.state.isEditing )
        ?(<div className="form-group">
          <label for="services" className="form-label record-form-label">Services Completed:</label>
          <br/>
          <input className="record-input" type="text" name="services" placeholder="Services Completed?" value={this.state.services} onChange={this.handleInput} disabled={!this.state?.isEditing}/>
        </div>)
        : null
        }

        {((!this.state.isEditing && this.state.provider_name) || this.state.isEditing )
        ?(<div className="form-group">
          <label for="provider_name" className="form-label record-form-label">Provider's Name:</label>
          <br/>
          <input className="record-input" type="text" name="provider_name" placeholder="Name of Provider" value={this.state.provider_name} onChange={this.handleInput} disabled={!this.state?.isEditing}/>
        </div>)
        : null
        }

        {((!this.state.isEditing && this.state.recommendations) || this.state.isEditing )
        ? (<div className="form-group">
          <label for="recommendations" className="form-label record-form-label">Recommendations:</label>
          <br/>
          <input className="record-input" type="text" placeholder="Recommendations?" name="recommendations" value={this.state.recommendations} onChange={this.handleInput} disabled={!this.state?.isEditing}/>
        </div>)
        : null
      }

        <div className="form-group">
          {this.state.isEditing ?
          (<>
          <label for="appt_img" className="form-label record-form-label">Upload xrays or photos:</label>
          <br/>
          <input style={{width: "220px"}} type="file" name="appt_img" onChange={this.handleImage} disabled={!this.state?.isEditing}/>
          </>)
          : null
          }
          {this.state.appt_img
                ? <img className="appt-img" src={this.state.preview || this.state.appt_img} alt=""/>
                : null
              }
        </div>
        <div className="record-button-container">
        {!this.state.isEditing
          ? <button type="button" className="btn btn-outline-dark record-detail-button" onClick={() => this.setState({isEditing: true})}><FaEdit /></button>
          : <button className="btn btn-outline-dark record-detail-button" type="button" onClick={this.saveRecord}><FaRegSave /></button>
        }
        <button type="button" className="btn btn-outline-dark record-detail-button"  onClick={() => this.props.deleteRecord(this.props.record.id)}><FaTrash/></button>
        </div>

      </form>
  </div>
  </>
  )
}
}
export default RecordDetail;

// For adding modal to view xrays larger:
// <button type="button" className="btn btn-outline-dark record-detail-button" onClick={()=> (this.selectRecord())}>
//   {!this.state.selected
//    ?<FaSearchPlus/>
//    :<FaRegWindowClose/>
//   }
// </button>
