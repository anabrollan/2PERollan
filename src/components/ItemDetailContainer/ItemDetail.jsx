import { useParams } from "react-router-dom";
import { products } from "../../data/data.js"; 
import ItemCount from "../ItemCount/ItemCount.jsx";

function ItemDetail() {
  const { idProduct } = useParams();
  const product = products.find((item) => item.id === idProduct);

  const addItem = (count) => {
    const productCart = { ...product, quantity: count }
    console.log(`Se agregaron ${count} producto(s) al carrito`);  
  };

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <h1 className="card">{product.name}</h1>
      <img className="image" src={product.image} alt={product.name} />
      <p className="card">{product.description}</p>
      <p className="card">Precio: ${product.price}</p>
      <p className="card">Stock disponible: {product.stock}</p>
      <ItemCount stock={product.stock} addItem={addItem} />  {}
    </div>
  );
}

export default ItemDetail;
