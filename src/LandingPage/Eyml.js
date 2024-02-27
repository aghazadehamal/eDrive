import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SubjectList from './SubjectList';

function Eyml() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://edurive.onrender.com/v1/subject/lesson/')
      .then(response => {
        setData(response.data); // API'den gelen veriyi setData ile güncelleyin
      })
      .catch(error => console.error("API'den veri çekilirken hata oluştu:", error));
  }, []);

  return (
    <div className="App">
      <SubjectList data={data} /> 
    </div>
  );
}

export default Eyml;
