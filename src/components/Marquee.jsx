import React from 'react';
import './Marquee.css';

const Marquee = () => {
  const text = "✦ BUILDING FOR THE WEB ✦ TELLING DIGITAL STORIES ✦ WRITING CODE ✦ CRAFTING EXPERIENCES ";
  
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