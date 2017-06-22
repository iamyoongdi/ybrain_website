import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class GoogleMap extends Component {
  static defaultProps = {
    center: {lat: 37.402673, lng: 127.102109},
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
      </GoogleMapReact>
    );
  }
}

export default GoogleMap;
