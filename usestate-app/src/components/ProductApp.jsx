import React, { useState } from 'react'


const initialProduct = {
    title: "Titulo",
    description: "Descripción"
}


const ProductApp = () => {

    const [product, setProduct]= useState(initialProduct);
const updateProduct = (property, value) => {
    setProduct({
...product,
[property]: value


    })
}

  return (
    <div>
<button onClick={() => updateProduct("description", "Otro descrip2")}>
    Update
</button>

        <h1>{product.title}</h1>
        <h1>{product.description}</h1>

{/* imprimir json en pantalla */}

<pre>
    {JSON.stringify(product, null,2)}
</pre>


    </div>
  )
}

export default ProductApp