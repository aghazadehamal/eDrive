import React from "react";
import "./VideoCard.css";

const VideoCard = ({ url, thumbnail, duration, onVideoSelect, isSelected, description }) => {
  return (
    <div>
      <div className="uniqueVideoCard" onClick={() => onVideoSelect(url)}>
        {!isSelected && (
          <>
            <img
            src={thumbnail} 
            alt="Video Thumbnail"
            className="video-thumbnail"
          />
            <div className="video-overlay">
              <img
                src={process.env.PUBLIC_URL + "/playicontwo.svg"}
                alt="playicontwo"
                className="play-icon"
              />
            </div>
            <span className="uniqueVideoCard-span">{duration}</span> 
          </>
        )}
        {isSelected && (
          <video 
            className="videoWithHeight"
            controls
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
            width="100%"
            height="100%"
          >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className="loginVideoText">{description}</div> {/* Burada description propunu istifadə edirik */}
    </div>
  );
};

export default VideoCard;
