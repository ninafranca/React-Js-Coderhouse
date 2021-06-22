import React from 'react';
import CartWidget from './CartWidget';
import './_NavBar.scss';
import Logo from './logo.png';
import {Link} from 'react-router-dom';

function NavBar () {
        return (
            <div className="App-header">
                <Link to="/"><img src={Logo} alt="Logo Nanette Shoes" className="img-logo"></img></Link>
                <nav>
                    <Link to="/">Inicio</Link>
                    <Link to="/products">Productos</Link>
                    <Link to="/contact">Contacto</Link>
                </nav>
                <CartWidget />
            </div>
        );
}

export default NavBar;