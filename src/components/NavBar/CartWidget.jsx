import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    const quantity = totalQuantity()

    return (
        <Link to="/cart" className="cartwidget">
            <IoMdCart className="cart-icon"/>
            <p className="numeroDeItems">{ quantity >= 1 && quantity }</p>
        </Link>
    )
}

export default CartWidget