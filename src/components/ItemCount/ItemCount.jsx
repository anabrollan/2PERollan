import React, { useState } from 'react'

const ItemCount = ({ stock, addItem }) => {  
    const [count, setCount] = useState(1)

    const handleClickSubtract = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }

    const handleClickAdd = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <div>
            <button onClick={handleClickSubtract}>-</button>
            <button onClick={handleClickAdd}>+</button>
            <p>{count}</p>
            <button onClick={() => addItem(count)}>Agregar al carrito</button>{}
        </div>
    )
}

export default ItemCount