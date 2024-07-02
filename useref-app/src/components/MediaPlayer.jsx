// import React from 'react'

import { useState } from "react";
import { useRef } from "react"



const MediaPlayer = () => {
    const videoRef = useRef();

    const [isplay, setisPlay] = useState(false);

    const handlePlay = () => {
        const video = videoRef.current;

        isplay ? video.pause() : video.play();

        setisPlay(!isplay);
    }




    return (
        <div>
            <video width="400" ref={videoRef} onClick={handlePlay}>
                <source src="videos/video1.mp4"  type="video/mp4" />
            </video>
            <button onClick={handlePlay}>
                {isplay ? 'Pause' : 'Play' }
            </button>

        </div>
    )
}

export default MediaPlayer