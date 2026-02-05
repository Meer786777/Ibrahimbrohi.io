import React, { useRef, useState, useEffect } from 'react';
import './css/body.css';
<<<<<<< HEAD
import Video1 from '../images/video2.mp4';
=======
import Video1 from '../images/video1.mp4';
>>>>>>> 1ad5905 (Initial commit)
import V1 from '../images/icons8-no-audio-50.png';  // Mute icon
import V2 from '../images/icons8-speaker-50.png';   // Unmute icon

function Video() {
    const videoRef = useRef<HTMLVideoElement | null>(null); // Reference to the video element
    const [isMuted, setIsMuted] = useState(true); // Start as muted

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted; // Toggle the muted state
            setIsMuted(!isMuted); // Update the state
        }
    };

    // Function to play the video if the tab is visible
    const handleVisibilityChange = () => {
        if (document.visibilityState === 'visible' && videoRef.current) {
            videoRef.current.play().catch(error => console.log("Error playing video: ", error));
        }
    };

    // Use effect to play the  vvideo automatically when the component mounts
    useEffect(() => {
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Try to play the video when component mounts
        if (videoRef.current) {
            videoRef.current.muted = true; // Make sure the video starts muted
            videoRef.current.play().catch(error => console.log("Error playing video: ", error));
        }

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []); // Empty dependency array means this runs once when the component mounts

    return (
        <>
            <div className='videopar'>
                <video
                    className='vid1'
                    loop
                    ref={videoRef} // Attach the ref to the video element
                    src={Video1}
                    muted // Mute the video initially to allow autoplay
                />
                <div className="secdiv">
                    <img
                        className='volumebtn'
                        src={isMuted ? V1 : V2} // Display mute or unmute icon based on state
                        alt={isMuted ? 'Unmute' : 'Mute'}
                        onClick={toggleMute} // Toggle mute on click
                    />
                </div>
            </div>
        </>
    );
}

export default Video;
