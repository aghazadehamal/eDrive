import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import ModalTwo from "./ModalTwo/ModalTwo";

function Videos() {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoList, setVideoList] = useState([]);

  // Önceden belirlenmiş thumbnail URL'lerini içeren bir dizi.
  const thumbnails = [
    "esasanlayislarthree.jpeg", // Bu URL'ler gerçek thumbnail adresleriniz olmalı.
    "esasanlayislartwo.jpeg",
    "esasanlayislar.jpeg",
  ];

  useEffect(() => {
    fetch("https://edurive.onrender.com/v1/lesson/")
      .then((response) => response.json())
      .then((data) => {
        const videos = [];
        let videoCount = 0; // Kullanılan video sayısını takip etmek için bir sayaç.
        for (let lesson of data) {
          for (let subject of lesson.subjectResponse) {
            if (subject.videoResponse && videoCount < 3) {
              videos.push({
                url: subject.videoResponse.url,
                description: subject.videoResponse.title,
                thumbnail: thumbnails[videoCount], // İlgili thumbnail'ı dizi içinden seçiyoruz.
              });
              videoCount++; // Video sayısını artırıyoruz.
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
          key={index} // URL yerine index kullanıyoruz çünkü URL'ler benzersiz olmayabilir.
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
