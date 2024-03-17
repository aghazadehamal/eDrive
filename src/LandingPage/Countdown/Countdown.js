import React, { useState, useEffect } from "react";
import "./Countdown.css";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        gün: Math.floor(difference / (1000 * 60 * 60 * 24)),
        saat: Math.floor((difference / (1000 * 60 * 60)) % 24),
        dəq: Math.floor((difference / 1000 / 60) % 60),
        san: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup timeout
    return () => clearTimeout(timer);
  });

  const timeComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timeComponents.push(
     
      <div className="countdown-component" key={interval}>
      
        <span className="time">{timeLeft[interval]}</span>
        <span className="time-label">{interval}</span>
      </div>
    );
  });

  return (
    <div className="countdown-container">
      {timeComponents.length ? timeComponents : <span>Zaman doldu!</span>}
    </div>
  );
};

export default Countdown;
