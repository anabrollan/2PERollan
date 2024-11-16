import { useState, useEffect, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link, useParams } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db"
import "./ItemDetail.css"

function ItemDetail() {
  const { idProduct } = useParams()
  const [product, setProduct] = useState(null)
  const { addProductInCart } = useContext(CartContext)

  useEffect(() => {
    const getProductById = async () => {
      const docRef = doc(db, "products", idProduct)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() })
      } else {
        console.log("Producto no encontrado")
      }
    }

    getProductById()
  }, [idProduct])

  const addItem = (count) => {
    if (product) {
      const productCart = { ...product, quantity: count }
      addProductInCart(productCart)
    }
  }

  if (!product) {
    return <h2>Producto no encontrado</h2>
  }

  return (
    <div>
      <h1 className="card">{product.name}</h1>
      <img className="image" src={product.image} alt={product.name} />
      <p className="card">{product.description}</p>
      <p className="card">Precio: ${product.price}</p>
      <p className="card">Stock disponible: {product.stock}</p>
      <ItemCount stock={product.stock} addItem={addItem} />
    </div>
  )
}

export default ItemDetail