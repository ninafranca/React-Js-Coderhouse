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
                        <Link to="/home">Inicio</Link>
                        <Link to="/">Productos</Link>
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
                    <h1>NANETTE SHOES</h1>
                </div>
                <section class="background-attachment">
                    <p>Vestí tus pies con estilo</p>
                </section>
                <div class="solid-black"></div>
            </div>
        );
}

export default NavBar;