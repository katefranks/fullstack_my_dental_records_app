import React, { Component } from 'react';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import { Loader } from "@googlemaps/js-api-loader"

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    // mapCenter: {
    //   lat: 34.8526,
    //   lng: 82.3940,
    // },
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
