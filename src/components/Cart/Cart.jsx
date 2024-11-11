import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
  const { cart, totalPrice, deleteProductById } = useContext(CartContext)
  return (
    <div>
      <h2>Productos en tu carrito</h2>
      {
        cart.map((productCart)=> (
          <div key={productCart.id}>
            <img className="image" src={productCart.image} />
            <p>{productCart.name}</p>
            <p>Cantidad: {productCart.quantity}</p>
            <p>Precio unitario: {productCart.price}$</p>
            <p>Subtotal: {productCart.quantity * productCart.price}$</p>
            <button onClick={ () => deleteProductById(productCart.id) }>Eliminar producto</button>
          </div>
        ))
      }

      <p>Total: {totalPrice()}$</p>
    </div>
  )
}

export default Cart