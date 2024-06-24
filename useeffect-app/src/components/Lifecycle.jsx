import React, { useEffect, useState } from 'react'


console.log('Pre-Render');

const Lifecycle = () => {

    console.log('Logic Render');

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    useEffect(() => {
        console.log('useEffect []');
    }, [])


    useEffect(() => {
        console.log('useEfect no dependency');
    })


    useEffect(() => {
        console.log('useEfect counter1');
    }, [counter1])


    useEffect(() => {
        console.log('useEfect counter2');
    }, [counter2])


    useEffect(() => {
        console.log('useEfect [counter1, counter2]');
    }, [counter1, counter2])






    return (
        <div>
            { console.log('Return Render')}
            <h1>Clicks c1: {counter1}</h1>
            <h1>Clicks c2: {counter2}</h1>

            <button onClick={() => setCounter1(counter1 + 1)}>Increment C1</button>
            <button onClick={() => setCounter2(counter2 + 1)}>Increment C2</button>

        </div>
    )
}

export default Lifecycle