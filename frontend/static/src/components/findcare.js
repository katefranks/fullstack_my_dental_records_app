import React, { Component } from 'react';
import './App.css';
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import PlacesAutocomplete, {geocodeByAddress,  getLatLng,} from 'react-places-autocomplete';
// import { Loader } from "@googlemaps/js-api-loader"

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      address: '',
      userLat: '',
      userLng: '',
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
        // lat: 34.852619,
        // lng: -82.394012,
      }
    }
    this.getCoordinates = this.getCoordinates.bind(this);
    this.fetchPlaces = this.fetchPlaces.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  };

  componentDidMount() {
    this.getCoordinates();
  }
  getCoordinates = () => {
    let a;
    let b;

    navigator.geolocation.getCurrentPosition(position => {
      a = position.coords.latitude;
      b = position.coords.longitude;
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      this.setState({
        userLat: a,
        userLng: b
      });
    });
  };

  fetchPlaces(mapProps, map) {
    const { google } = mapProps;
    const service = new google.maps.places.PlacesService(map);

    const currentLocation = new google.maps.LatLng(this.userLat,this.userLng);

    const request = {
      location: currentLocation,
      radius: '500',
      query: 'dentist'
    };

  service.textSearch(request, (results, status) => {
  // service.nearbySearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        const placeId = results[i].place_id;
        // console.log('Name: ',place.name, 'Address: ',place.formatted_address,);
        // console.log(place);
        const request = {
          placeId,
          fields: ['name', 'rating', 'formatted_phone_number', 'geometry']
        };

        service.getDetails(request, (place, status) => {
          // you still have access results[i]
          // target results[i] and add the phone_number

          if (status === google.maps.places.PlacesServiceStatus.OK) {
            results[i].formatted_phone_number = place.formatted_phone_number;
            results[i].geometry.location = place.geometry.location;
            // alternative syntax for above:
            // const {formatted_phone_number, geometry} = place;
            // results[i] = {...results[i], formatted_phone_number, geometry};
          }
        })
      }
    }
    console.log('geometry: ', results[0].geometry.location);
    console.log(results);
    this.setState({ locations: results });
  });
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

  handleChange = address => {
      this.setState({ address });
    };

    handleSelect = address => {
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
          console.log('Success', latLng)
          this.setState({ address });
          this.setState({ mapCenter: latLng });
        })
        .catch(error => console.error('Error', error));
    };

  render() {
    //
    // <Marker
    //   position={{
    //     lat: this.state.userLat,
    //     lng: this.state.userLng,
    //   }}
    // />

    const markers = this.state.locations.map((place) => (
          <Marker key={place.place_id} onClick={this.onMarkerClick}
            name = {place.name}
            address = {place.formatted_address}
            position= {
              place.geometry.location
            }
          />
      ))


    return (
      <div id="googleMap">

        <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
        <Map
          style={{width: "500px", height: "500px", border: "solid black 5px"}}
          onReady={this.fetchPlaces}
          google={this.props.google}
          initialCenter={{
            lat: this.state.userLat,
            lng: this.state.userLng,
          }}
          center={{
            lat: this.state.userLat,
            lng: this.state.userLng,
          }}
        >

        {markers}

        <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
        </InfoWindow>

        </Map>

      </div>

    )
  }
}


export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)

// get one infowindow to show
// may need to allow each marker to manage whether or not it's showing


// <ul>{locations}</ul>

// <Marker
//   position={{
//     lat: this.state.userLat,
//     lng: this.state.userLng,
//   }}
// />


// <li className="form-login p-4 mb-3 login-form-container" key="location.place_id">
//   <p>{location.name}</p>
//   <p>{location.formatted_phone_number}</p>
//   <p>{location.formatted_address}</p>
// </li>
//

// const locations = this.state.locations.map((place, i) =>
// <Marker key={i} position={{lat: place.geometry.location.lat(), lng: place.geometry.location.lng()}}/>
// )

// const markers = this.state.locations.geometry.locations.map((location) =>
// <Marker onClick={this.onMarkerClick} name = {this.state.location.name}
//     position = {
//       lat: location.geometry.location.lat,
//       lng: location.geometry.location.lng
//     } />
// );

// initialCenter={{
//   lat: this.state.mapCenter.lat,
//   lng: this.state.mapCenter.lng,
// }}

// center={{
//   lat: this.state.mapCenter.lat,
//   lng: this.state.mapCenter.lng,
// }}

// <Marker
//   position={{
//     lat: this.state.mapCenter.lat,
//     lng: this.state.mapCenter.lng,
//   }}
// />
