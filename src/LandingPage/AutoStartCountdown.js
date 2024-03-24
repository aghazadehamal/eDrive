import React, { useState, useEffect } from 'react';

function AutoStartCountdown() {
  const [timeLeft, setTimeLeft] = useState(3 * 60); 

  useEffect(() => {

    if (timeLeft === 0) return;

   
    const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);

    
    return () => clearTimeout(timerId);
  }, [timeLeft]);

  return (
    <div>
      <button className="modal-button" disabled>
        {timeLeft > 0 
          ? `${Math.floor(timeLeft / 60)}:${('0' + (timeLeft % 60)).slice(-2)}` 
          : "Yenidən cəhd edin"
        }
      </button>
    </div>
  );
}

export default AutoStartCountdown;
