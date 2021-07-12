import React, { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import { Loader } from "@googlemaps/js-api-loader"

// class ApiTest extends Component{

// const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

//   componentDidMount(){
//
//     fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
//
//     .then(response => {
//       if (!response.ok){
//         throw new Error ('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => console.log('API test: ', { data })).catch(error => {
//       console.error('Problem with fetch request: ', error);
//     });
// }
//
// render(){
//   return(
//     <div>
//     Map
//     </div>
//   );
//   }
// }

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <Map google={this.props.google}
          onClick={this.onMapClicked}>
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)
