import React, { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Loader } from "@googlemaps/js-api-loader"

class ApiTest extends Component{

  componentDidMount(){
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyBG242E6D2eH_Ai2RYwAiTMg2Y83P3iyXU')

    .then(response => {
      if (!response.ok){
        throw new Error ('Network response was not ok');
      }
      return response.json();
    })
    .then(data => console.log( { data })).catch(error => {
      console.error('Problem with fetch request: ', error);
    });
}

render(){
  return(
    <div>
    Map
    </div>
  );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBG242E6D2eH_Ai2RYwAiTMg2Y83P3iyXU')
})(ApiTest)
