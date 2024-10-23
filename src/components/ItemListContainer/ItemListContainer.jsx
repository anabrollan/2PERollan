import { getProducts } from "../../data/data.js"

const ItemListContainer = ( {saludo} ) => {

    getProducts ()
        .then((answer) => {
            console.log(answer)
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            console.log("fin")
        })


    return (
        <div>
            <h2>{saludo}</h2>
        </div>
    )
}

export default ItemListContainer