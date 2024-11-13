import { useState, useEffect } from "react";
import { getProducts } from "../../data/data";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({})


    useEffect( ()=> {
        
    }, [idProduct] )

    return (
        <ItemDetail product={product} />
    )
}
  
  export default ItemDetailContainer
  