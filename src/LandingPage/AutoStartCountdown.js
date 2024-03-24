import React, { useState, useEffect } from 'react';

function AutoStartCountdown() {
  const [timeLeft, setTimeLeft] = useState(3 * 60); // Başlangıçta 3 dakika

  useEffect(() => {
    // Eğer zaman kalmadıysa (0), zamanlayıcıyı durdur
    if (timeLeft === 0) return;

    // Her saniye timeLeft'i güncelle
    const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);

    // Komponent temizlendiğinde zamanlayıcıyı iptal et
    return () => clearTimeout(timerId);
  }, [timeLeft]);

  return (
    <div>
      <button className="modal-button" disabled>
        {`${Math.floor(timeLeft / 60)}:${('0' + (timeLeft % 60)).slice(-2)}`}
      </button>
    </div>
  );
}

export default AutoStartCountdown;
