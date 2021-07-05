import React, { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Loader } from "@googlemaps/js-api-loader"

class FindCare extends Component {
render(){
  return(
    <div className="map-container">
        <h2>Find Care:</h2>
        <Map className="map" google={this.props.google} zoom={14}>

            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>

            </InfoWindow>
          </Map>
    </div>
  );
}
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBG242E6D2eH_Ai2RYwAiTMg2Y83P3iyXU')
})(FindCare)
