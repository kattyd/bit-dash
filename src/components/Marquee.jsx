import React from 'react';
import './Marquee.css';

const Marquee = () => {
  const text = "₿ THE GO TO BLOCKCHAIN EXPLORER ₿ THE GO TO BLOCKCHAIN EXPLORER ₿ THE GO TO BLOCKCHAIN EXPLORER ₿ THE GO TO BLOCKCHAIN EXPLORER ₿ THE GO TO BLOCKCHAIN EXPLORER ₿ THE GO TO BLOCKCHAIN EXPLORER";
  
  return (
    <div className="marquee-wrapper">
      <div className="marquee-content font-sans-heavy">
        {/* We use two identical blocks side-by-side */}
        <div className="marquee-text">{text}</div>
        <div className="marquee-text">{text}</div>
      </div>
    </div>
  );
};

export default Marquee;