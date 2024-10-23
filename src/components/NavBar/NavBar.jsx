import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import "./navbar.scss"
import logo from "../../../assets/logo.png"

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="brand">
            <img src={logo} className="logo"/>
            </Link>
            <ul className="categories">
                <li className="category">
                    <Link to="/category/anilladas">Anilladas</Link>
                </li>
                <li className="category">
                    <Link to="/category/cosidas">Cosidas</Link>
                </li>
                <li>Contacto</li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar