const products = [
    {
        id: "LA001",
        name: "Libreta anillada Crayones",
        description: "",
        stock: 1,
        price: 8000,
        image: "/img/anilladacrayones.webp",
        category: "libretas anilladas",
    },
    {
        id: "LA002",
        name: "Libreta anillada Letras",
        description: "",
        stock: 1,
        price: 8000,
        image: "/img/anilladaletras.webp",
        category: "libretas anilladas",
    },
    {
        id: "LC001",
        name: "Libreta belga Frida Kahlo",
        description: "",
        stock: 1,
        price: 15000,
        image: "/img/belgafrida.jpg",
        category: "libretas cosidas",
    },
    {
        id: "LC002",
        name: "Libreta copta Mapas",
        description: "",
        stock: 1,
        price: 15000,
        image: "/img/coptamapas.jpg",
        category: "libretas cosidas",
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