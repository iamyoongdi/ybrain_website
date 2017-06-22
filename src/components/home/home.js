import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import './home.css';
import "./image-gallery.css";
import GoogleMapReact from 'google-map-react';

class Home extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      region:'',
      email:'',
      org:'',
      subject:'',
      content:''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

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
          onImageLoad={this.handleImageLoad}
        />
        <div className="contact">
          <div className="contact-container">
            <div className="contact-left">
              <p className="contact-title">Follow Us</p>
              <p className="contact-content">SNS icons here</p>
              <p className="contact-title">General Inquiry</p>
              <p className="contact-content">inquiries@ybrain.com</p>
              <p className="contact-title">Location</p>
              <p className="contact-content">#802 8th Fl., Pangyo Digital Center C-dong, 242, Pangyo-ro,<br/>Bungdang-gu, Seongnam-si, Gyeonggi-do, 13487, Korea<br/><br/>경기도 성남시 분당구 판교로 242 판교디지털센터 C동 802호</p>
              <div className="map">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: 'AIzaSyBARX_wYDa97NPlJGPSewHXqLcagvNFBuI',
                  }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                >
                </GoogleMapReact>
              </div>
            </div>
            <div className="contact-right">
              <p className="contact-title">&nbsp;&nbsp;&nbsp;Contact Us</p>
              <form onSubmit={this.handleSubmit}>
                <input className="contact-input half first" placeholder="이름" name='name' type="text" value={this.state.name} onChange={this.handleInputChange}/>
                <input className="contact-input half"  placeholder="국가"name='region'type="text" value={this.state.region} onChange={this.handleInputChange}/>
                <input className="contact-input half first" placeholder="ybrain@email.com" name='email'type="text" value={this.state.email} onChange={this.handleInputChange}/>
                <input className="contact-input half" placeholder="소속기관" name='org'type="text" value={this.state.org} onChange={this.handleInputChange}/>
                <input className="contact-input" placeholder="제목" name='subject'type="text" value={this.state.subject} onChange={this.handleInputChange}/>
                <textarea className="contact-input" placeholder="메세지를 남겨주세요" name='content'type="text" value={this.state.content} onChange={this.handleInputChange}/>
                <input className="contact-submit"type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default Home;
