import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { IoMdCart } from "react-icons/io";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <div className="cartwidget">
            <IoMdCart className="cart-icon"/>
            <p className="numeroDeItems">{ totalQuantity() }</p>
        </div>
    )
}

export default CartWidget