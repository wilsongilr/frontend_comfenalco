import React, { useState } from 'react'

const ErrorApp = () => {

  const [error, setError] = useState("");
  return (
    <div>

      <button onClick={() => setError('Error al cargar la api')}>ERROR</button>
      <button onClick={() => setError('Otro Error al cargar la api')}>ANOTHER ERROR</button>
      <button onClick={() => setError('')}>PROCESO EXITOSO</button>

      {error &&
        <h1>Error APP: {error}</h1>
      }

    </div>
  )
}

export default ErrorApp