import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="brand">
            <h2>Kalandra</h2>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar