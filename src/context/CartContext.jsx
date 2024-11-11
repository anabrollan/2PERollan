import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ( { children } ) => {
    const [cart, setCart] = useState([])

    const addProductInCart = (newProduct) => {
        setCart([ ...cart, newProduct ])
    }

    const totalQuantity = () => {
        const quantity = cart.reduce( (total, productCart) => total + productCart.quantity, 0)
        return quantity
    }

    const totalPrice = () => {
        const price = cart.reduce( (total, productCart) => total + ( productCart.quantity * productCart.price), 0 )
        return price
    }

    const deleteProductById = (idProduct) => {
        const filterProducts = cart.filter( (productCart) => productCart.id !== idProduct )
        setCart(filterProducts)
    }

    return(
        <CartContext.Provider value={ { cart, addProductInCart, totalQuantity, totalPrice, deleteProductById } } >
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }