import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }) => {

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
      origin: window.location.origin,
    },
  };


  let youtubePlayer;


  const onReady = (event) => {

    youtubePlayer = event.target;
  };

  const onEnd = (event) => {

  };


  const toggleVideo = () => {
    const playerState = youtubePlayer.getPlayerState();

    if (playerState === 1) {

      youtubePlayer.pauseVideo();
    } else {

      youtubePlayer.playVideo();
    }
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} onReady={onReady} onEnd={onEnd} />
      <button onClick={toggleVideo} style={{ display: "none" }}>Toggle Video</button>
    </div>
  );
};

export default YouTubePlayer;
