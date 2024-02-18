import React from 'react';
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router';

const VideoPlayer = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const urlLink = searchParams.get('watch');   // get value from the url 
  

  return (
    <div >
      <ReactPlayer         // react library
        url={urlLink}      // pass the video url
        controls
        playbackRate={1.0}
        style={{ marginBottom: '20px',backgroundColor : "#ffe4c4" }}
      />

    </div>
  );
}

export default VideoPlayer;

