import React, { useState } from 'react';
import './Pagination.css';

const Pagination = ({ total, itemsPerPage, onPageChange }) => { 
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(total / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => {
      const nextPage = prev < totalPages ? prev + 1 : prev;
      onPageChange(nextPage); 
      return nextPage;
    });
  };

  const prevPage = () => {
    setCurrentPage((prev) => {
      const prevPage = prev > 1 ? prev - 1 : prev;
      onPageChange(prevPage);
      return prevPage;
    });
  };

  return (
    <div className="pagination-container">
      <span className="pagination-text">Dərs {currentPage}/{totalPages}</span>
      <div className="pagination-buttons">
        <button onClick={prevPage} disabled={currentPage === 1} className="pagination-button">
          <img src={`${process.env.PUBLIC_URL}/sol.svg`} alt="sol" />
        </button>
        <button onClick={nextPage} disabled={currentPage === totalPages} className="pagination-button">
          <img src={`${process.env.PUBLIC_URL}/sag.svg`} alt="sag" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
