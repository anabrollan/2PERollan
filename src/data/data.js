export const products = [
    {
        id: "LA001",
        name: "Libreta anillada Crayones",
        description: "Libreta anillada, forrada en tela 100% algodón con diseño de crayones. 120 hojas de papel bondt blanco de 80 gramos, ideal como croquera.",
        stock: 6,
        price: 8000,
        image: "/img/anilladacrayones.webp",
        category: "anilladas",
    },
    {
        id: "LA002",
        name: "Libreta anillada Letras",
        description: "Libreta anillada, forrada en tela 100% algodón con diseño de letras. 120 hojas de papel bondt blanco de 80 gramos, ideal como croquera.",
        stock: 4,
        price: 8000,
        image: "/img/anilladaletras.webp",
        category: "anilladas",
    },
    {
        id: "LC001",
        name: "Libreta belga Frida Kahlo",
        description: "Libreta cosida a mano en encuadernación belga, con tapas forradas en tela 100% algodón estampado con motivos de Frida Kahlo. 160 hojas de papel bondt blanco de 104 gramos, ideal como bullet journal",
        stock: 7,
        price: 15000,
        image: "/img/belgafrida.jpg",
        category: "cosidas",
    },
    {
        id: "LC002",
        name: "Libreta copta Mapas",
        description: "Libreta cosida a mano en encuadernación copta, con tapas forradas en tela 100% algodón estampado con folia dorada con motivos mapas. 160 hojas de papel bondt negro de 80 gramos, ideal para practicar lettering con brush pens metalizados",
        stock: 2,
        price: 15000,
        image: "/img/coptamapas.jpg",
        category: "cosidas",
    }
]

const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export { getProducts }