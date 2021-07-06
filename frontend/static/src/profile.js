import { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Cookies from 'js-cookie';

class Profile extends Component{
  constructor(props){
    super(props);
    this.state = {
      display_name: '',
      dob: '',
      toothbrush_replaced: '',
      ins_card: null,
      preview: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

componentDidMount(){
  fetch('/api/v1/users/profiles/user/')
    .then(response => {
      if (!response.ok){
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => this.setState({ data }))
    .catch(error => {
      console.error('There has been a problem with your fetch operation: ', error);
    });
}

handleInput(e){
  this.setState({ [e.target.name]: e.target.value});
}

handleImage(e){
  let file = e.target.files[0];
  this.setState({ [e.target.name]: file, });

  let reader = new FileReader();
  reader.onloadend = () => {
    this.setState({
      preview: reader.result,
    });
  }
  reader.readAsDataURL(file);
}

async handleSubmit(e){
  e.preventDefault();
  let formData = new FormData();
  formData.append('ins_card', this.state.ins_card);
  //possibly remove:
  formData.append('display_name', this.state.display_name);
  formData.append('dob', this.state.dob);
  formData.append('toothbrush_replaced', this.state.toothbrush_replaced);
  

  const options = {
    method: 'POST',
    headers: {
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: formData,
  }
  const response = await fetch('/api/v1/users/profiles/', options);
  this.setState({response});
}

render(){
  return(
    // <div>Profile</div>
    //
    <div className="profile-form-div">
      <form className="form-login p-4 mb-3 login-form-container profile-form-container" onSubmit={this.handleSubmit}>
      <h2>Create a Profile</h2>

      <div className="form-group">
        <label for="display_name" className="form-label">Full Name:</label>
        <br/>
        <input className="login-input" placeholder="FIRST MIDDLE LAST" name="display_name" type="text" value={this.state.display_name} onChange={this.handleInput}/>
      </div>

      <div className="form-group">
        <label for="dob" className="form-label">Date of Birth:</label>
        <br/>
        <input className="login-input" type="text" placeholder="MM/DD/YYYY" name="dob" value={this.state.dob} onChange={this.handleInput}/>
      </div>

      <div className="form-group">
        <label for="toothbrush_replaced" className="form-label">Toothbrush Replaced On:</label>
        <br/>
        <input className="login-input" type="text" placeholder="MM/DD/YYYY" name="toothbrush_replaced" value={this.state.toothbrush_replaced} onChange={this.handleInput}/>
      </div>

      <div className="form-group">
        <label for="ins_card" className="form-label">Dental Insurance Card:</label>
        <br/>
        <input style={{width: "220px"}} type="file" name="ins_card" onChange={this.handleImage}/>
        {this.state.ins_card
              ? <img style={{width: "220px"}} className="ins-card-preview" src={this.state.preview} alt=""/>
              : null
            }
      </div>

        <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    </div>
    //
  )

}
}
export default Profile;

//Profile model from django (referene):
// user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True,)
// display_name = models.CharField(max_length=255)
// dob = models.CharField(max_length=255)
// toothbrush_replaced = models.CharField(max_length=255)
// ins_card = models.ImageField(upload_to='profiles/')
