import React, { Component } from 'react';
import './App.css';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {geocodeByAddress,  getLatLng,} from 'react-places-autocomplete';
// import { Loader } from "@googlemaps/js-api-loader"

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      userLat: '',
      userLng: '',
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
        lat: 34.852619,
        lng: -82.394012,
        // lat: 'userLat',
        // lng: 'userLng',
      }
    }
    this.getCoordinates = this.getCoordinates.bind(this);
  };

  // componentDidMount() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.watchPosition(function(position) {
  //       console.log("Latitude is :", position.coords.latitude);
  //       console.log("Longitude is :", position.coords.longitude);
  //     });
  //   }
  // }

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


  // var greenville = new google.maps.LatLng(34.852619,-82.394012);
  var currentLocation = new google.maps.LatLng(this.userLat,this.userLng);

  var request = {
    location: currentLocation,
    radius: '500',
    query: 'dentist'
  };

  service.textSearch(request, function(results, status){
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        const place = results[i];
        // console.log('Name: ',place.name, 'Address: ',place.formatted_address,);
        // console.log(place);
        var request = {
          placeId: `${place.place_id}`,
          fields: ['name', 'rating', 'formatted_phone_number', 'geometry']
        };
        service.getDetails(request, function (place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            const placeDetails = place;
            // console.log('name: ', placeDetails.name, 'number: ', placeDetails.formatted_phone_number);
            console.log('Name: ',place.name, 'Address: ',place.formatted_address, 'number: ', placeDetails.formatted_phone_number);
          }

        });

      }
    }
  });
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
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
        >
        <Marker
          position={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
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

//within map component    on ready property
// on ready= fetch places.    Look in npm
// google maps react library from doc to fire off  on ready- by default will be passed map object
// (mapprops, map)

// text search
//current location -nav geo location
