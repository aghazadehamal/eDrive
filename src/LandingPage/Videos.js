import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import VideoCard from './VideoCard';
import ModalTwo from './ModalTwo';

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

  return (
    <div className="uniqueVideoCards">
      
      {isModalOpen && (
        <ModalTwo isOpen={isModalOpen} onClose={closeModal}>
          <ReactPlayer className="aaa" url={selectedVideoUrl} playing={true} controls={true} />
        </ModalTwo>
      )}

  
      <div className="videoCardWrapper" onClick={() => openModal('/v1.MOV')}>
        <VideoCard url="/v1.MOV" />
        <p>Giriş videosu</p>
      </div>

      <div className="videoCardWrapper" onClick={() => openModal('/v1.MOV')}>
        <VideoCard url="/v1.MOV" />
        <p>Giriş videosu</p>
      </div>

      <div className="videoCardWrapper" onClick={() => openModal('/v1.MOV')}>
        <VideoCard url="/v1.MOV" />
        <p>Giriş videosu</p>
      </div>
  
    </div>
  );
}

export default Videos;
