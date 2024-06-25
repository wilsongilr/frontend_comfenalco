import React, { useRef, useState } from 'react'

const FocusApp = () => {
    const [text, setText] = useState('');
    const inputRef = useRef();

    const handleFocus = () => {
        console.log(inputRef.current.value);
        const input = inputRef.current;

    // Se recomienda no hacerlo    input.value = "Texto mutado";

        input.focus();

        // const input = document.getElementById("input");
        // console.log(input.value);
        // input.value = "Texto mutado";
        // input.focus();


    }

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                // id="input"
                value={text}
                onChange={(e) => setText(e.target.value)  }
            />
            <button onClick={handleFocus} >Focus</button>
        </div>
    )
}

export default FocusApp