import React, { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import { Loader } from "@googlemaps/js-api-loader"

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},

    mapCenter: {
      lat: 34.852619,
      lng: -82.394010,
    },
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
        initialCenter={{
          lat: this.state.mapCenter.lat,
          lng: this.state.mapCenter.lng,
        }}
      >
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />


      </Map>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)
