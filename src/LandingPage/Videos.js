import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import ModalTwo from "./ModalTwo/ModalTwo";

function Videos() {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoList, setVideoList] = useState([]);


  const thumbnails = [
    "esasanlayislarthree.jpeg", 
    "esasanlayislartwo.jpeg",
    "esasanlayislar.jpeg",
  ];

  useEffect(() => {
    fetch("https://edurive.onrender.com/v1/lesson/")
      .then((response) => response.json())
      .then((data) => {
        const videos = [];
        const durations = ["14:09", "14:14", "14:55"];
        let videoCount = 0; 
        for (let lesson of data) {
          for (let subject of lesson.subjectResponse) {
            if (subject.videoResponse && videoCount < 3) {
              videos.push({
                url: subject.videoResponse.url,
                description: subject.videoResponse.title,
                thumbnail: thumbnails[videoCount], 
                duration: durations[videoCount],
              });
              videoCount++; 
            }
          }
        }
        setVideoList(videos);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const openModal = (url) => {
    setSelectedVideoUrl(url);
    setIsModalOpen(true);
    document.body.classList.add("no-scroll");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideoUrl("");
    document.body.classList.remove("no-scroll");
  };

  return (
    <div className={`uniqueVideoCards ${isModalOpen ? "disable-pointer" : ""}`}>
      {isModalOpen && (
        <ModalTwo isOpen={isModalOpen} onClose={closeModal}>
          <video
            className="videoWithHeight"
            src={selectedVideoUrl}
            controls
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
            autoPlay
          >
            Your browser does not support the video tag.
          </video>
        </ModalTwo>
      )}

      {videoList.map((video, index) => (
        <VideoCard
          key={index} 
          url={video.url}
          thumbnail={video.thumbnail}
          duration={video.duration}
          onVideoSelect={openModal}
          isSelected={selectedVideoUrl === video.url}
        />
      ))}
    </div>
  );
}

export default Videos;
