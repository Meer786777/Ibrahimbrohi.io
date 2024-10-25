import React, { useState } from 'react';
import './css/home.css';
import Icon1 from '../images/download.webp'; // Your initial image

function Header() {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

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
