import React from 'react';
import Plyr from 'plyr-react';


function VideoPlayer() {
  const videoSrc = {
    type: 'video',
    sources: [
      {
        src: 'Riyaziyyat intro.mp4', // Buraya video kaynağınızın URL'sini girin
        type: 'video/mp4', // Video tipini belirtin
      },
    ],
  };

  return (
    <Plyr
      source={videoSrc}
      options={{
        // Burada Plyr yapılandırma seçeneklerini belirleyebilirsiniz
        speed: { selected: 1, options: [0.5, 1, 1.5, 2] }, // Oynatma hızı seçenekleri
        quality: {
          default: 576, // Varsayılan kalite seviyesi
          options: [4320, 2880, 1440, 1080, 720, 576, 480, 360, 240], // Kalite seçenekleri
        },
      }}
    />
  );
}

export default VideoPlayer;
