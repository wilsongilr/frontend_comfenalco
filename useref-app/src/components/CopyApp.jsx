import { useRef, useState } from 'react'

const CopyApp = () => {
    const [text, setText] = useState("Hola");
    const [iscopied, setisCopied] = useState(false);
    const inputRef = useRef();

    const handleCopy = () => {
        const input = inputRef.current;
        // console.log(input);
        input.select();

        navigator.clipboard.writeText(input.value);
        setisCopied(true);
        setTimeout(() => setisCopied(false), 2000);

    }

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleCopy}>
                Copy
            </button>
            {
                iscopied &&
                <h1>Is Copied</h1>
            }
        </div>
    )
}

export default CopyApp