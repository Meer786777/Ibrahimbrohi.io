import React, { useState, useEffect } from 'react';
import './css/home.css';
import Icon1 from '../images/download.webp'; // Your initial image

function Header() {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  useEffect(() => {
    // Set interval to toggle hover every 7 seconds (7000 ms)
    const interval = setInterval(() => {
      setIsHovered(prevIsHovered => !prevIsHovered);
    }, 7000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <main className='main'>
      <h1 
        className='name' 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <>Hi, <img className='homeimgv' src={Icon1} alt="" /></>
        ) : (
          "Ibrahim Brohi"
        )}
      </h1>
    </main>
  );
}

export default Header;
