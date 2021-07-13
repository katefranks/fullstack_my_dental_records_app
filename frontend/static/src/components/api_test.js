import React, { Component } from 'react';
import './App.css';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
// import { Loader } from "@googlemaps/js-api-loader"

class ApiTest extends Component{

// const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  componentDidMount(){

    // fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=411+University+Ridge,+Greenville,+SC&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)

    fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=34.852619,-82.394012&radius=1500&type=dentist&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)

    // fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-34.8526,82.3940&radius=1500&type=dentist&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)

    .then(response => {
      // if (!response.ok){
      //   throw new Error ('Network response was not ok');
      // }
      return response.json();
    })
    .then(data => console.log('API test: ', { data })).catch(error => {
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
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(ApiTest)
