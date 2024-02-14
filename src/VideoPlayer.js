import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const [url, setUrl] = useState('v1.MOV'); 

  const handleQualityChange = (quality) => {
    const urls = {
      '720p': 'path/to/video-720p.mp4',
      '1080p': 'path/to/video-1080p.mp4',
      '4k': 'path/to/video-4k.mp4',
    };
    setUrl(urls[quality]); 
  };

  return (
    <div>
      <ReactPlayer url={url} controls config={{ file: { attributes: { controlsList: 'nodownload' }}}}/>
      <select onChange={(e) => handleQualityChange(e.target.value)}>
        <option value="720p">720p</option>
        <option value="1080p">1080p</option>
        <option value="4k">4K</option>
      </select>
    </div>
  );
};

export default VideoPlayer;
