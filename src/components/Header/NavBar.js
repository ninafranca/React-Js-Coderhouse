import CartWidget from './CartWidget';
import './_NavBar.scss';
import Logo from './logo.png';
import {Link} from 'react-router-dom';

function NavBar () {
        return (
            <div>
                <div className="App-header">
                    <Link to="/"><img src={Logo} alt="Logo Nanette Shoes" className="img-logo"></img></Link>
                    <nav>
                        <div>
                        <Link to="/">Inicio</Link>
                        <Link to="/products">Productos</Link>
                        <Link to="/contact">Contacto</Link>
                        </div>
                        <div>
                            <Link to="/category/electronics">Electrónica</Link>
                            <Link to="/category/jewelery">Joyas</Link>
                            <Link to="/category/women">Mujer</Link>
                            <Link to="/category/men">Hombre</Link>
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