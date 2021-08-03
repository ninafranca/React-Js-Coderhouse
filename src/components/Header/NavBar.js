import CartWidget from './CartWidget';
import './_NavBar.scss';
import Logo from './logo.png';
import {Link} from 'react-router-dom';

function NavBar () {
        return (
            <div>
                <div className="App-header">
                    <Link to="/"><img src={Logo} alt="Logo Nanette Shop" className="img-logo"></img></Link>
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
                <section class="background-attachment">
                    <p>Cuidamos el medio ambiente</p>
                </section>
                <div class="solid-black"></div>
            </div>
        );
}

export default NavBar;