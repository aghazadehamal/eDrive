import React, { useState } from "react";

function CommentSection() {
  const [comment, setComment] = useState("");
  const [list, setList] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    console.log("Comment gönderildi: ", comment);
    setComment("");
    setList([...list, comment]);
  };

  const handleDeleteComment = (indexToDelete) => {
    setList(list.filter((_, index) => index !== indexToDelete));
  };

  const handleDeleteAllComments = () => {
    setList([]);
  };

  return (
    <div style={{ margin: "20px" }}>
      {list.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <p>{item}</p>
          <button
            onClick={() => handleDeleteComment(index)}
            style={{
              padding: "5px 10px",
              marginRight: "10px",
              color: "white",
              backgroundColor: "red",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Sil
          </button>
        </div>
      ))}
      <input
        type="text"
        value={comment}
        onChange={handleCommentChange}
        style={{
          width: "100%",
          padding: "10px",
          margin: "10px 0",
          borderRadius: "4px",
          border: "1px solid #ddd",
        }}
        placeholder="Fikrinizi buraya yazın..."
      />
      <button
        onClick={handleCommentSubmit}
        style={{
          padding: "10px 20px",
          color: "white",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        Fikir bildir
      </button>
      <button
        onClick={handleDeleteAllComments}
        style={{
          padding: "10px 20px",
          color: "white",
          backgroundColor: "red",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Hamısımı Sil
      </button>
    </div>
  );
}

export default CommentSection;
