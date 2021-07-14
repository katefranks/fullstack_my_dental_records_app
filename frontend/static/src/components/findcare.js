import React, { Component } from 'react';
import './App.css';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
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
    this.createMarker = this.createMarker.bind(this);
    this.fetchPlaces = this.fetchPlaces.bind(this);
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
            results[i].geometry = place.geometry;


            // const {formatted_phone_number, geometry} = place;
            // results[i] = {...results[i], formatted_phone_number, geometry};

            // const placeDetails = place;
            // // console.log('name: ', placeDetails.name, 'number: ', placeDetails.formatted_phone_number);
            // console.log('Name: ',place.name, 'Address: ',place.formatted_address, 'number: ', placeDetails.formatted_phone_number);
          }
        })

      }
    }
    console.log(results);
    this.setState({ locations: results });
  });
};

//map over results property on state, and for each one create a marker. ch

// createMarker(mapProps, map, results) {
//   const { google } = mapProps;
//   for (let i = 0; i < place.length; i++) {
//   //   const marker = new google.maps.Marker({
//   //     position: place[i].position,
//   //
//   //     map: map,
//   //   });
//   // }
// }


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
        <Marker
          position={{
            lat: this.state.userLat,
            lng: this.state.userLng,
          }}
        />
        </Map>
      </div>

    )
  }
}


export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)



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
