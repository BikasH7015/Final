import React, { useState, useEffect } from 'react';
import './ExampageNavbar.css';
import logoImage from '../../assets/logo.png';
import Camera from './Camera';

const Navbar = () => {
  const [countdown, setCountdown] = useState(60 * 60); // 60 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(prevCountdown => prevCountdown - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [countdown]);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logoImage} alt="Logo" className="logo" />
        <div class="Section" >
        <div className="Questions-text">Questions: <span className="questions-count">60</span></div>
        <div className="Answered-text">Answered : <span className="answered-count">30</span></div>
        <div className="Mark-For-Review-text">Mark for Review: <span className="mark-for-review-count">07</span></div>
        <div className="Not-Visited-text">Not Visited: <span className="not-visited-count">12</span></div>
        </div>
        <div className="Sec-buttons">
          <button className="Section-button">Sec A</button>
          <button className="Section-button">Sec B</button>
          <button className="Section-button">Sec C</button>
          <button className="Section-button">Sec D</button>
        </div>
      </div>

      <div className="navbar-right">
        <button className="end-test-button">End Test</button>
        <div className="timer-countdown">{formatTime(countdown)}</div>

        {/* <Camera /> */}
      </div>
    </nav>
  );
};

export default Navbar;
