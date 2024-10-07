import { IoMdCart } from "react-icons/io";

const CartWidget = () => {
    return (
        <div className="cartwidget">
            <IoMdCart className="cart-icon"/>
            <p className="numeroDeItems">1</p>
        </div>
    )
}

export default CartWidget