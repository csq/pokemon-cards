import React, { useRef } from 'react';
import './style.css';

const HorizontalScroll = ({ children }) => {
  const containerRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault();
    containerRef.current.scrollLeft += e.deltaY;
  };

  return (
    <div
      ref={containerRef}
      className="horizontal-scroll"
      onWheel={handleWheel}
    >
      {children}
    </div>
  );
}

export default HorizontalScroll;
