import React, { Component } from 'react';
import '../assets/App.css';

class StreamPlayer extends Component {
  render() {
    const CHANNEL='twitch';
    return (
      <div className="player">
      <iframe
        src="http://player.twitch.tv/?channel=twitch"
        height="480"
        width="855"
        frameborder="0"
        scrolling="no"
        allowfullscreen="true">
      </iframe>
      </div>
    );
  }
}

export default StreamPlayer;
