import React from "react";
import ReactPlayer from "react-player";
import "./VideoCard.css";

const VideoCard = ({ url, thumbnail, onVideoSelect, isSelected }) => {
  return (
    <div>
  <div className="uniqueVideoCard" onClick={() => onVideoSelect(url)}>
      {!isSelected && (
        <>
          <img
            src={"videoimage.jpeg"}
            alt="Thumbnail"
            className="video-thumbnail"
          />
          <div className="video-overlay">
            <img
              src={process.env.PUBLIC_URL + "/iconVideo.svg"}
              alt="Play"
              className="play-icon"
            />
            
          </div>
          
        </>
      )}
      {isSelected && (
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

    <div className="loginVideoText">Giriş videosu</div>

    </div>
  
  );
};

export default VideoCard;
