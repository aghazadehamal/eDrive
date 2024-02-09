import React from 'react';
import Plyr from 'plyr-react';


function VideoPlayer() {
  const videoSrc = {
    type: 'video',
    sources: [
      {
        src: 'Riyaziyyat intro.mp4', 
        type: 'video/mp4', 
      },
    ],
  };

  return (
    <Plyr
      source={videoSrc}
      options={{
      
        speed: { selected: 1, options: [0.5, 1, 1.5, 2] }, 
        quality: {
          default: 576, 
          options: [4320, 2880, 1440, 1080, 720, 576, 480, 360, 240], 
        },
      }}
    />
  );
}

export default VideoPlayer;
