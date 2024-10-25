import React, { useState, useEffect } from 'react';
import './css/body.css';
import Img1 from '../images/blockbuster.jpg';
import Img2 from '../images/m2.jpeg';
import Img3 from '../images/m3.jpg';

function ImgCard() {
    const images = [Img1, Img2, Img3]; // Array of images
    const [currentIndex, setCurrentIndex] = useState(0); // Index of the current image
    const [isFading, setIsFading] = useState(false); // Control fade effect

    // Function to switch to a specific image
    const handleImageChange = (index: number) => {
        setIsFading(true); // Start fading out
        setTimeout(() => {
            setCurrentIndex(index); // Switch to the selected image
            setIsFading(false); // Fade back in
        }, 1000); // Match the fade-out duration in CSS
    };

    // Function to automatically switch to the next image every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleImageChange((currentIndex + 1) % images.length); // Go to the next image
        }, 5000);

        return () => clearInterval(interval); // Clean up on component unmount
    }, [currentIndex, images.length]);

    return (
        <>
            <div className="img-parent">
                <img
                    className={`img-parent1 ${isFading ? 'fade' : ''}`} // Add the fade class
                    src={images[currentIndex]} // Display the current image
                    alt="Slideshow"
                />
                <div className='box-parent'>
                    {/* Render buttons for each image */}
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`box ${currentIndex === index ? 'active' : ''}`} // Add active class for styling
                            onClick={() => handleImageChange(index)} // Change image on box click
                        ></div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ImgCard;
