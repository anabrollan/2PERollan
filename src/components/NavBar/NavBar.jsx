import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="brand">
            <h2>Kalandra</h2>
            </div>
            
            <ul>
                <li>Inicio</li>
                <li>Sobre mí</li>
                <li>Productos</li>
                <li>Talleres</li>
                <li>Contacto</li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar