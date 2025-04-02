
import { Link } from "react-router-dom"; 
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar() {
    const carrito = []; 
    return (
        <header>
            <nav className='nav-bar'>
                <p>logo</p>
                <ul className='nav-items'>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/category/A">Categoría A</Link></li>
                    <li><Link to="/category/B">Categoría B</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                </ul>
                <Link to="/cart">
                    <CartWidget cantidad={carrito.length} />
                </Link>
            </nav>
        </header>
    );
}

export default NavBar;