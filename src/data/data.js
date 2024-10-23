const products = [
    {
        id: "PO001",
        name: "Postal Un día a la vez",
        description: "",
        stock: 10,
        price: 500,
        image: "",
        category: "postales",
    },
    {
        id: "LA001",
        name: "Libreta Un día a la vez",
        description: "",
        stock: 2,
        price: 8000,
        image: "",
        category: "libretas anilladas",
    },
    {
        id: "LC001",
        name: "Libreta belga Frida Kahlo",
        description: "",
        stock: 1,
        price: 15000,
        image: "",
        category: "libretas cosidas",
    },
    {
        id: "LC002",
        name: "Libreta copta Mapas",
        description: "",
        stock: 1,
        price: 15000,
        image: "",
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