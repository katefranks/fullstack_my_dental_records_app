import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Map, Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react';
import PlacesAutocomplete, {geocodeByAddress,  getLatLng,} from 'react-places-autocomplete';
import { FaMapMarkerAlt, FaGlobeAmericas, FaPhoneAlt } from 'react-icons/fa';


const style = {
 maxWidth: "700px",
 // height: "85%",
  height: "100%",
 overflowX: "hidden",
 overflowY: "hidden",
};

const containerStyle = {
 maxWidth: "700px",
 // height: "85%"
 height: "100%"
};

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
    // this.mapRef = React.createRef();
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
//prior to calling setState, need to check if there's something to set there.

  fetchPlaces(mapProps, map) {
    console.log('lat', this.userLat, 'lng', this.userLng);
    const { google } = mapProps;
    const service = new google.maps.places.PlacesService(map);

    const currentLocation = new google.maps.LatLng(this.state.userLat, this.state.userLng);

    const request = {
      location: currentLocation,
      radius: '500',
      query: 'dentist'
    };

  service.textSearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      this.setState({
          locations: results
        });

    }
    // console.log('geometry: ', results[0].geometry.location);
    console.log(results);
    this.setState({ locations: results, map: map });
  });
};


  onMarkerClick(props, marker, e){
    const{google, map, id} = props;
    const service = new google.maps.places.PlacesService(map);
    service.getDetails({
      placeId: id
      }, (place, status) => {
      this.setState({
        selectedPlace: {...props, phoneNumber: place.formatted_phone_number, website: place.website},
        activeMarker: marker,
        showingInfoWindow: true
      });
});
}


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
    console.log('this', this)
    console.log('address1', address);
    geocodeByAddress(address)

      .then(results => getLatLng(results[0]))

      .then(latLng => {
        console.log('Success', latLng);
        console.log('address2', address);
        // setting autocomplete coordinates to be coordinates on state- will be used for place query.
        this.setState({ userLat: latLng.lat, userLng: latLng.lng });
        this.setState({address});
        // passing map props & map to fetch places (when called w/in autocomplete function)
        this.fetchPlaces(this.props, this.state.map);
        console.log('fetchplaces', this.fetchPlaces);
      })
      .catch(error => console.error('Error', error));
  };


  render() {
    const locationsList = this.state.locations.map((place) =>
    <li key={place.place_id} className="form-login p-4 mb-3 login-form-container"  >
      <p>{place.name}</p>
      <p>{place.formatted_phone_number}</p>
      <p>{place.formatted_address}</p>
    </li>
  )

    const markers = this.state.locations.map((place) => (
          <Marker key={place.place_id} onClick={this.onMarkerClick}
            icon = "https://img.icons8.com/offices/30/000000/tooth.png"
            name = {place.name}
            phoneNumber = {place.formatted_phone_number}
            address = {place.formatted_address}
            position= {place.geometry.location}
            website={place.website}
            id={place.place_id}
          />
      ))


    return (
      <div className="" id="findcare-container">

      <div className=""  id="main-map-container">
      <div id="googleMap" >
        <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div id="automcomplete-container">
            <input
              {...getInputProps({
                placeholder: 'Search a location, find a dentist!',
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
                  <div {...getSuggestionItemProps(suggestion, {className, style,})}>
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <div id="map-container-center">
        <Map
          ref={this.mapRef}
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
          style={style} containerStyle={containerStyle}
        >
        <Marker

          position={{
            lat: this.state.userLat,
            lng: this.state.userLng,
          }}
        />

        {markers}

        <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div className="infowindow-marker">
                <h2 id="infowindow-h2" style={{textAlign: "center"}}>{this.state.selectedPlace.name}</h2>
                <a className="infowindow-a" href={`tel:+${this.state.selectedPlace.phoneNumber}`}><FaPhoneAlt/> {this.state.selectedPlace.phoneNumber}</a>
                <br/>
                {this.state.selectedPlace.website &&
                <a className="infowindow-a" href={this.state.selectedPlace.website} target="_blank"><FaGlobeAmericas/>  {this.state.selectedPlace.website}<br/></a>
                }
                <a className="infowindow-a" href={`https://maps.google.com/?q=${this.state.selectedPlace.address}`} target="_blank"><FaMapMarkerAlt/> {this.state.selectedPlace.address}</a>
              </div>
        </InfoWindow>

        </Map>
        </div>
      </div>
      </div>
</div>
    )
  }
}


export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)

// https://www.google.com/maps/dir//
// <a href={`https://www.google.com/maps/dir//?q=${this.state.selectedPlace.address}`}><FaMapMarkerAlt/> {this.state.selectedPlace.address}</a>

// https://maps.google.com/?q=1200 Pennsylvania Ave SE, Washington, District of Columbia, 20003

// <a href={`https://maps.google.com/?q=${this.state.selectedPlace.address}`}><FaMapMarkerAlt/> {this.state.selectedPlace.address}</a>

// <p><FaMapMarkerAlt/> {this.state.selectedPlace.address}</p>

// icons
// https://img.icons8.com/offices/30/000000/tooth.png
// https://img.icons8.com/fluent/48/000000/tooth.png

// <a href={this.state.selectedPlace.website} target="_blank"><FaGlobeAmericas/>  {this.state.selectedPlace.website}</a>
