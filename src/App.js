import React, { Component } from '../node_modules/react';
import ImageGallery from 'react-image-gallery';
import logo from './logo.svg';
import './App.css';
import "./image-gallery.css";

class App extends Component {
  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }
  render() {
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ImageGallery
        items={images}
        slideInterval={4000}
        showThumbnails={false}
        showBullets={true}
        showFullscreenButton={false}
        showPlayButton={false}
        onImageLoad={this.handleImageLoad}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
