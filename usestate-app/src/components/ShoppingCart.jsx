import React, { useState } from 'react'

const initialCart = [
    { id: 1, title: "Product", description: "Desc" },
    { id: 2, title: "Product #2", description: "Desc #2" }
]

const ShoppingCart = () => {

    const [cart, setCart] = useState(initialCart);


    const deleteProduct = (productId) => {
        const changedCart = cart.filter(product => product.id !== productId);
        setCart(changedCart);
    }

    const addProduct = (newProduct) => {
        newProduct.id = Date.now();
        const changedCart = [
            newProduct,
            ...cart
        ];
        setCart(changedCart);
    }

    const updateProduct = (editProduct) => {

        const changedCart = cart.map(product => (
            product.id === editProduct.id
                ? editProduct
                : product
        ))
        setCart(changedCart);
    }

    return (
        <div>
            {/* <button onClick={() => deleteProduct(2)}>
                DELETE
            </button> */}

            <button onClick={() => addProduct({ title: "Product #3", description: "Desc #3" })}>
                ADD
            </button>

            {/* <button onClick={() => updateProduct({id: 1, title: "Product #4", description: "Desc #4"})}>
                EDIT
            </button> */}

            {cart.map(product => (
                <div key={product.id}>
                    <h1>{product.id} {product.title}</h1>
                    <h3>{product.description}</h3>
                    <button onClick={() => deleteProduct(product.id)}>
                        DELETE
                    </button>
                    <button onClick={() => updateProduct({ id: product.id, title: "Product #4", description: "Desc #4" })}>
                        EDIT
                    </button>

                </div>
            ))}

            <div>
                <h1>Imprimir Arreglo</h1>
                <pre>
                    {JSON.stringify(cart, null, 2)}
                </pre>

            </div>

        </div>
    )
}

export default ShoppingCart