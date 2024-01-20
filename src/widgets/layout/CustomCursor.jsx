import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const getCursorSize = () => {
    return isHovering ? 'large' : 'normal';
  };

  return (
    <div
      className={`custom-cursor ${getCursorSize()}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
        });
      })}
    </div>
  );
};

export default CustomCursor;
