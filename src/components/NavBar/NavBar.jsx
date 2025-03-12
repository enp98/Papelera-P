import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

function NavBar() {
    return (
        <header>
            <nav className='nav-bar'>
                <p>logo</p>
                <ul className='nav-items'>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                </ul>
                <CartWidget/>
            </nav>
            
        </header>
    )
}

export default NavBar