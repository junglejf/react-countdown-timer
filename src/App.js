import React, { Component } from 'react';

import './App.css';
import Countdown from './components/Countdown';
import YoutubeEmbed from './components/YoutubeEmbed';
import myVideo from './acabou.mp4';
import myImage from './images/surpresa.png';
import ReactPlayer from 'react-player'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ligado: 0,
    }
  }
  handleMode = (status) => this.setState({ ligado: status });

  acabou = () => (
  <div className='acabou'>
    <ReactPlayer playing url={ myVideo }
                height='300px'
                width='500px'
                controls='true'
            /> 
    <img src={ myImage } className='acabouImg' alt='acabou'/>
  </div>
  );

  render() {
    const { ligado } = this.state;
    return (
      <body className='main'>
        <Countdown handleMode={ this.handleMode } ligado = { ligado }/>
       {ligado === 1 && <YoutubeEmbed embedId="rNLHC406Y6s?autoplay=1" ></YoutubeEmbed>}
       {ligado === 3 &&  this.acabou()}

      </body>
    );
  }
}

export default App;
