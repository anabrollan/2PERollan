import React from 'react'

const Item = ({ product }) => {
  return (
    <div className="card">
    <img className="image" src={product.image} alt="" />
    <h2>{product.name}</h2>
    <p>Precio: ${product.price}</p>
</div>
  )
}

export default Item