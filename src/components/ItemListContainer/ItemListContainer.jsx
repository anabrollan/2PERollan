import { useState, useEffect } from "react";
import '../ItemListContainer/ItemListContainer.css';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";
import ItemList from "./ItemList.jsx";

const ItemListContainer = ({ saludo }) => {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    const getProducts = () => {
        const productsRef = collection(db, "products");
        getDocs(productsRef)
            .then((dataDb) => {
                const productsArray = dataDb.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setProducts(productsArray);
            })
            .catch((error) => console.error("No se ha encontrado el producto", error));
    };

    const getProductsByCategory = () => {
        const productsRef = collection(db, "products");
        const queryCategories = query(productsRef, where("category", "==", idCategory));
        getDocs(queryCategories)
            .then((dataDb) => {
                const productsDb = dataDb.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                setProducts(productsDb);
            })
            .catch((error) => console.error("No se ha encontrado el producto", error));
    };

    useEffect(() => {
        if (idCategory) {
            getProductsByCategory();
        } else {
            getProducts();
        }
    }, [idCategory]);

    return (
        <div className="item-list-container">
            <h2>{saludo}</h2>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
