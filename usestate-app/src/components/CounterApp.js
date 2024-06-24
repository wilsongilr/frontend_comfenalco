import React, { useState } from 'react'

const CounterApp = () => {
    const [counter, setCounter] = useState(0);

    const incrmentarCounter = () => {
        setCounter(counter+1);
    }
  return (
    <div>
        <h1>Clicks: {counter}</h1>
        <button onClick={() => incrmentarCounter()}>Incrementar</button>
    </div>
  )
}

export default CounterApp