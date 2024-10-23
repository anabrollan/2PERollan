import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import '../ItemListContainer/ItemListContainer.css'
import ItemList from "./ItemList.jsx"

const ItemListContainer = ( {saludo} ) => {
    const [products, setProducts] = useState([])

    useEffect( ()=> {getProducts ()
        .then((data) => {
            setProducts(data)
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            console.log("fin")
        })}, [])

    return (
        <div className="item-list-container">
            <h2>{saludo}</h2>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer