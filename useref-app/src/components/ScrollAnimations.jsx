import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react"

const ScrollAnimations = () => {
const [background, setBakground] = useState('Blue');
const divRef = useRef();


useEffect(() =>{
  const handleScroll = () => {
    const div = divRef.current;
   const { y } = div.getBoundingClientRect();

   const backgroundColor = y <= 0 ? 'orange' : 'blue';
   setBakground(backgroundColor);
  }
window.addEventListener('scroll',handleScroll);

return () => {
  window.removeEventListener('scroll',handleScroll);
}

},[]);

  return (
    <div>
      <div ref={divRef} style={ {height: "180vh", background: background}}>
        <h1>Scroll to change background color</h1>
      </div>

    </div>
  )
}
export default ScrollAnimations