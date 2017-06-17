import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import './home.css';
import "./image-gallery.css";

class Home extends Component {
  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }
  render() {
    const images = [
      {
        original: require('../../assets/landing_1.png'),
      },
      {
        original: require('../../assets/landing_2.png'),
      },
      {
        original: require('../../assets/landing_3.png'),
      }
    ]
    return (
      <div className="container">
          <ImageGallery
            items={images}
            slideInterval={3000}
            showThumbnails={false}
            showBullets={true}
            showFullscreenButton={false}
            showPlayButton={false}
            onImageLoad={this.handleImageLoad}/>
    </div>
    );
  }
}

export default Home;
