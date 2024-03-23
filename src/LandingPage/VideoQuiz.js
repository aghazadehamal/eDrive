import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function VideoQuiz() {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://edurive.onrender.com/v1/lesson/');
        if (!response.ok) {
          throw new Error('Data could not be fetched!');
        } else {
          const data = await response.json();
          // Verileri döngüye alıp, aradığımız videoyu buluyoruz.
          const foundVideo = data.find(lesson => 
            lesson.subjectResponse.some(subject => 
              subject.videoResponse.id === 10
            )
          )?.subjectResponse.find(subject => subject.videoResponse.id === 10)?.videoResponse;

          if (foundVideo) {
            setVideo(foundVideo);
          } else {
            console.log('Video with id=10 not found');
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Link to="/lessonData">
          <img
            src="/edurive.svg"
            alt="Novademy Logo"
            style={{ maxWidth: "250px", marginTop: "50px" }}
          />
        </Link>
      {video ? (
        <div style={{marginTop: "50px"}} >
         
          <video style={{borderRadius: "22px"}} src={video.url} controls />
          <p>{video.requiresPaid ? 'This content requires payment.' : 'This content is free.'}</p>
        </div>
      ) : (
        <p className="loadingText">Video yüklənir...</p>

      )}
    </div>
  );
}

export default VideoQuiz;
