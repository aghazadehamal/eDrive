import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetcher() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLessonId, setSelectedLessonId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://edurive.onrender.com/v1/subject/lesson/5');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const selectLesson = (id) => {
    setSelectedLessonId(id);
  };

  const selectedLesson = data.find(lesson => lesson.id === selectedLessonId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 1 }}>
        <h2>Lessons</h2>
        <ul>
          {data.map(item => (
            <li key={item.id} onClick={() => selectLesson(item.id)} style={{ cursor: 'pointer' }}>
              Mövzu Adı: {item.subjectName}
            </li>
          ))}
        </ul>
      </div>
      <di style={{ flex: 2 }}>
        {selectedLesson && (
          <>
            <h2>Lesson Details</h2>
            <p>Video: {selectedLesson.videoResponse.title}</p>
            <video width="320" height="240" controls>
              <source src={selectedLesson.videoResponse.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>Ödənişli mi?: {selectedLesson.videoResponse.requiresPaid ? 'hə' : 'yox'}</p>
          </>
        )}
      </di>
    </div>
  );
}

export default DataFetcher;
