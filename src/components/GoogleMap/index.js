import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import './style.css';

const Marker = () => <img className='mapmarker' alt='' src={require('../../assets/ybrain-symbol@2x.png')} />;

class GoogleMap extends Component {
  static defaultProps = {
    center: { lat: 37.402673, lng: 127.102109 },
    zoom: 17
  };

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyBARX_wYDa97NPlJGPSewHXqLcagvNFBuI',
        }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <Marker
          lat={this.props.center.lat}
          lng={this.props.center.lng}
        />
      </GoogleMapReact>
    );
  }
}

export default GoogleMap;
