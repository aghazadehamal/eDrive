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
            <i >
            <BsPlayCircleFill />




            </i>
       

          </div>
        </>
      )}
      {playVideo && (
        <ReactPlayer url={url} playing={true} controls={true} width="100%" height="100%" />
      )}
    </div>
  );
};

export default VideoCard;
