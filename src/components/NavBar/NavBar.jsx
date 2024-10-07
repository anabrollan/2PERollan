import CartWidget from "./CartWidget"
import "./navbar.scss"
import logo from "../../../assets/logo.png"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="brand">
            <img src={logo} className="logo"/>
            </div>
            <ul>
                <li>Inicio</li>
                <li>Libretas</li>
                <li>Postales</li>
                <li>Stickers</li>
                <li>Contacto</li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar