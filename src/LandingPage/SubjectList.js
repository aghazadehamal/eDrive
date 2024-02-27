// SubjectList.js
import React, { useState } from 'react';

function SubjectList({ data }) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 1, paddingRight: '20px' }}>
        <h2>Mövzular</h2>
        <ul>
          {data.map(item => (
            <li key={item.id} style={{ cursor: 'pointer' }} onClick={() => {
                console.log("Seçilen öğe: ", item);
                setSelectedItem(item);
              }}
              >
              <p>Mövzu Adı: {item.subjectName}</p>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 2 }}>
        {selectedItem && (
          <>
            <h2>Detaylar</h2>
            <p>Video : {selectedItem.videoResponse.title}</p>
            <video key={selectedItem.videoResponse.url} width="320" height="240" controls>
  <source src={selectedItem.videoResponse.url} type="video/mp4" />
  Problem var
</video>

            <p>Ödənişli mi?: {selectedItem.videoResponse.requiresPaid ? 'hə' : 'yox'}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default SubjectList;
