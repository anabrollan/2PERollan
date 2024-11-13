import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const products = [
    {
        name: "Libreta anillada Crayones",
        description: "Libreta anillada, forrada en tela 100% algodón con diseño de crayones. 120 hojas de papel bondt blanco de 80 gramos, ideal como croquera.",
        stock: 6,
        price: 8000,
        image: "/img/anilladacrayones.webp",
        category: "anilladas",
    },
    {
        name: "Libreta anillada Letras",
        description: "Libreta anillada, forrada en tela 100% algodón con diseño de letras. 120 hojas de papel bondt blanco de 80 gramos, ideal como croquera.",
        stock: 4,
        price: 8000,
        image: "/img/anilladaletras.webp",
        category: "anilladas",
    },
    {
        name: "Libreta belga Frida Kahlo",
        description: "Libreta cosida a mano en encuadernación belga, con tapas forradas en tela 100% algodón estampado con motivos de Frida Kahlo. 160 hojas de papel bondt blanco de 104 gramos, ideal como bullet journal",
        stock: 7,
        price: 15000,
        image: "/img/belgafrida.jpg",
        category: "cosidas",
    },
    {
        name: "Libreta copta Mapas",
        description: "Libreta cosida a mano en encuadernación copta, con tapas forradas en tela 100% algodón estampado con folia dorada con motivos mapas. 160 hojas de papel bondt negro de 80 gramos, ideal para practicar lettering con brush pens metalizados",
        stock: 2,
        price: 15000,
        image: "/img/coptamapas.jpg",
        category: "cosidas",
    }
];

const seedProducts = () => {
    const productsRef = collection (db, "products")
    products.map(( { id, ...dataProduct } ) => {
        addDoc(productsRef, dataProduct)
    })

    console.log("productos subidos")
    return
}

seedProducts()