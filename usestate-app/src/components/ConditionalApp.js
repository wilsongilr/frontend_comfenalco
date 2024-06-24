import React, { useState } from 'react'

const ConditionalApp = () => {

    const [condition, setCondition] = useState(true);
    return (
        <div>
            <button onClick={() => setCondition(!condition)}>Toggle</button>
            {/* {
                condition
                    ? <h1>Show message is true</h1>
                    : <h1>Another message is false</h1>
            } */}

            {/* {
                condition &&
                <h1>Show message is true</h1>
            } */}

            {/* imprimir valor de un bollean in react */}
            <h1>State value is: {condition.toString()}</h1>


        </div>
    )
}

export default ConditionalApp