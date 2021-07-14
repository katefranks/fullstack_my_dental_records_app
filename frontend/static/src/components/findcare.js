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

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
        lat: 34.852619,
        lng: -82.394012,
      }
    }
    // this.initialize = this.initialize.bind(this);
  };

  fetchPlaces(mapProps, map) {
  const { google } = mapProps;
  // const service = new google.maps.places.PlacesService(map);

  const service = new google.maps.places.PlacesService(map);


  var greenville = new google.maps.LatLng(34.852619,-82.394012);

  var request = {
    location: greenville,
    radius: '500',
    query: 'dentist'
  };

// Prior to adding place details
service.textSearch(request, function(results, status){
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      // console.log('Name: ',place.name, 'Address: ',place.formatted_address,);
      console.log(place);
      var request = {
        placeId: `${place.place_id}`,
        fields: ['name', 'rating', 'formatted_phone_number', 'geometry']
      };
      service.getDetails(request, function (place, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    console.log(place);
  }
});
    }
  }
});

// service.textSearch(request, function(results, status){
//   if (status === google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       const place = results[i];
//       // console.log('name: ',place.name, 'formatted_address: ',place.formatted_address,);
//       console.log(place);
//       const
//     }
//   }
// });

//
// service.getDetails(request, function(results, status){
//   if (status === google.maps.places.PlacesServiceStatus.OK){
//     for (var i = 0; i < results.length; i++) {
//       var place = results[i];
//       console.log(place);
//     }
//   }
// })

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


//within map component    on ready property
// on ready= fetch places.    Look in npm
// google maps react library from doc to fire off  on ready- by default will be passed map object
// (mapprops, map)

// text search
//current location -nav geo location
