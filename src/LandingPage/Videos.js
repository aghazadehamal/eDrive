import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import VideoCard from './VideoCard';
import ModalTwo from './ModalTwo/ModalTwo';


function Videos() {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (url) => {
    setSelectedVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const videoList = [
    { url: '/v1.MOV', description: 'Giriş Videosu 1' },
    { url: '/v2.MOV', description: 'Giriş Videosu 2' },
    { url: '/v3.MOV', description: 'Giriş Videosu 3' },
  ];

  return (
    <div className="uniqueVideoCards">
      {isModalOpen && (
        <ModalTwo isOpen={isModalOpen} onClose={closeModal}>
          <ReactPlayer className="react-player" url={selectedVideoUrl} playing={true} controls={true} />
        </ModalTwo>
      )}

      {videoList.map((video, index) => (
        <div key={index} className="videoCardWrapper" onClick={() => openModal(video.url)}>
          <VideoCard url={video.url} />
          <p>{video.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Videos;