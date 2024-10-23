import { useParams } from "react-router-dom";
import { products } from "../../data/data.js" 

function ItemDetail() {
  const { idProduct } = useParams();
  const product = products.find((item) => item.id === idProduct);

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
    </div>
  );
}

export default ItemDetail;
