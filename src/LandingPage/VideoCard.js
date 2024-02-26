import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './VideoCard.css'; // VideoCard CSS dosyası
import { BsPlayCircleFill } from "react-icons/bs";



const VideoCard = ({ url, thumbnail }) => {
  const [playVideo, setPlayVideo] = useState(false);

  const handlePlayVideo = () => {
    setPlayVideo(true);
  };

  return (
    <div className="uniqueVideoCard" onClick={handlePlayVideo}>
      {!playVideo && (
        <>
          <img src={"videoimage.jpeg"} alt="Thumbnail" className="video-thumbnail" />
          <div className="video-overlay">
            <img src={process.env.PUBLIC_URL + '/icons/iconVideo.svg'} alt="Play" className="play-icon" />
          </div>
        </>
      )}
      {playVideo && (
      <ReactPlayer 
  className="react-player"
  url={url} 
  playing={false} 
  controls={false} 
  width="100%" 
  height="100%" 
/>

      )}
    </div>
  );
};


export default VideoCard;
