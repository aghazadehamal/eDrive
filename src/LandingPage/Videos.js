import React, { useState } from "react";
import VideoCard from "./VideoCard";
import ModalTwo from "./ModalTwo/ModalTwo";
import ReactPlayer from "react-player";

function Videos() {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const videoList = [
    {
      url: "/v1.MOV",
      description: "Giriş Videosu 1",
      thumbnail: "thumb1.jpeg",
    },
    {
      url: "/v2.MOV",
      description: "Giriş Videosu 2",
      thumbnail: "thumb2.jpeg",
    },
    {
      url: "/v3.MOV",
      description: "Giriş Videosu 3",
      thumbnail: "thumb3.jpeg",
    },
  ];

  return (
    <div className={`uniqueVideoCards ${isModalOpen ? "disable-pointer" : ""}`}>
      {isModalOpen && (
        <ModalTwo isOpen={isModalOpen} onClose={closeModal}>
          <ReactPlayer
            className="react-player"
            url={selectedVideoUrl}
            playing={true}
            controls={true}
            download={false}
          />
        </ModalTwo>
      )}

      {videoList.map((video) => (
        <VideoCard
          key={video.url}
          url={video.url}
          thumbnail={video.thumbnail}
          onVideoSelect={openModal}
          isSelected={selectedVideoUrl === video.url}
        />
      ))}
    </div>
  );
}

export default Videos;
