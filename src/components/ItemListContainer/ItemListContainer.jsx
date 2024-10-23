import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import '../ItemListContainer/ItemListContainer.css'
import { useParams } from "react-router-dom"
import ItemList from "./ItemList.jsx"

const ItemListContainer = ( {saludo} ) => {
    const [products, setProducts] = useState([])
    const { idCategory } = useParams()

    useEffect( ()=> {
        getProducts ()
        .then((data) => {
            if(idCategory){
                const filterProducts = data.filter( (product)=> product.category === idCategory )
                setProducts(filterProducts)
            }else{
                setProducts(data)
            }
            
            
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            console.log("fin")
        })}, [idCategory])

    return (
        <div className="item-list-container">
            <h2>{saludo}</h2>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer