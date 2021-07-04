import React, { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import GoogleMap from './GoogleMap';

class App extends Component {
render(){
  return(
    <div className="main-container">
        <GoogleMap />
    </div>
  );
}
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyBG242E6D2eH_Ai2RYwAiTMg2Y83P3iyXU')
})(App)
