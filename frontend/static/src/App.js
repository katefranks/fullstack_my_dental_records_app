import React, { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import GoogleMap from './GoogleMap';
import ApiTest from './api_test';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
console.log(process.env.REACT_APP_GOOGLE_API_KEY);

class App extends Component {
render(){
  return(
    <div className="main-container">
        <h1>My Dental Records</h1>
        <GoogleMap />
        <ApiTest />
    </div>
  );
}
}


export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(App)
