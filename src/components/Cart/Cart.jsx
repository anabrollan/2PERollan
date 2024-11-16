import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './Cart.css';

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

  if(cart.length === 0){
    return(
      <div>
        <h2>Tu carrito está vacío</h2>
        <button><Link to="/">Volver al inicio</Link></button>
      </div>
    )

  }

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
      <button onClick={deleteCart}>Vaciar carrito</button>
      <Link to="/checkout" className="button-link">Terminar mi compra</Link>
    </div>
  )
}

export default Cart