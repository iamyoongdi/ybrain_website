import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render';
import ImageGallery from 'react-image-gallery';
import './style.css';
import "./image-gallery.css";
import GoogleMapReact from 'google-map-react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const AnyReactComponent = () => <img className="mapmarker" src={require('../../assets/ybrain-symbol.png')}/>;

class Home extends Component {
  static defaultProps = {
    center: {lat: 37.402673, lng: 127.102109},
    zoom: 18
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
      <div>
        <ImageGallery
          items={images}
          slideInterval={2000}
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
                  <div className="socialmedia-container">
                    <div className="socialmedia">
                      <a href='http://www.facebook.com' target="_blank">
                        <img className="facebook" alt={'facebook'} src={require('../../assets/facebook-solid.svg')}/></a>
                      <a href='http://www.twitter.com' target="_blank">
                        <img className="twitter" alt={'twitter'} src={require('../../assets/twitter-solid.svg')}/></a>
                      <a href='http://www.naver.com' target="_blank">
                        <img className="naver-blog" alt={'naver-blog'} src={require('../../assets/naver-blog-solid.svg')}/></a>
                      <a href='http://www.linkedin.com' target="_blank">
                        <img className="linkedin" alt={'linkedin'} src={require('../../assets/linkedin-solid.svg')}/></a>
                    </div>
                  </div>
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
                <AnyReactComponent
                  lat={this.props.center.lat}
                  lng={this.props.center.lng}
                />
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
