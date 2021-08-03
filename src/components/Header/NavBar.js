import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
// REACT ROUTER DOM
// IMG
import Logo from './logo.png';
// SCSS
import './_NavBar.scss';

function NavBar() {
    return (
        <div>
            <div className="App-header">
                <Link to="/"><img src={Logo} alt="Logo Nanette Shoes" className="img-logo" /></Link>
                <nav>
                        <div>
                            <div class="dropdown">
                                <Link to="/" className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Productos</Link>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><Link to="/">Todos</Link></li>
                                    <li><Link to="/category/sorbetes">Sorbetes</Link></li>
                                    <li><Link to="/category/vajilla">Vajilla</Link></li>
                                    <li><Link to="/category/accesorios">Accesorios</Link></li>
                                </ul>
                            </div>
                            <Link to="/contact">Contacto</Link>
                        </div>
                    </nav>
                <CartWidget />
            </div>
            <div className="nanette-shoes">
                <h1>NANETTE SHOP</h1>
            </div>
            <section className="background-attachment">
                <p>Cuidamos el medio ambiente</p>
            </section>
            <div className="solid-black" />
        </div>
    );
}

export default NavBar;
