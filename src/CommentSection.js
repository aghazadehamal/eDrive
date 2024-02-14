import React, { useState } from 'react';

function CommentSection() {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    console.log('Comment gönderildi: ', comment);
    // Burada yorumu bir API'ye göndermek için bir istek yapabilirsiniz.
    setComment(''); // Yorum gönderildikten sonra input alanını temizle
  };

  return (
    <div style={{ margin: '20px' }}>
      <input
        type="text"
        value={comment}
        onChange={handleCommentChange}
        style={{
          width: '100%',
          padding: '10px',
          margin: '10px 0',
          borderRadius: '4px',
          border: '1px solid #ddd'
        }}
        placeholder="Fikrinizi buraya yazın..."
      />
      <button
        onClick={handleCommentSubmit}
        style={{
          padding: '10px 20px',
          color: 'white',
          backgroundColor: '#007bff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
       Fikir bildir
      </button>
    </div>
  );
}

export default CommentSection;
