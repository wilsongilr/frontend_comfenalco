import React, { useEffect, useState } from 'react'

const ResizeApp = () => {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);

    const isMobile = windowWidth < 768;

    useEffect(() => {
        const handleResize = () => setwindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div>
            <h1>Size screen: {windowWidth}</h1>

            { isMobile &&
            <h2>Show only mobile device</h2>
            }
        </div>
    )
}

export default ResizeApp