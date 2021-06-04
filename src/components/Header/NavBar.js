import React, {Component, Fragment} from 'react';
import CartWidget from './CartWidget'

const headerStyles = {
    height: "10vh"
}

class NavBar extends Component {
    render() {
        return (
            <Fragment>
                <div className="App-header"  style={headerStyles}>
                    <h1>Nanette Shoes</h1>
                    <nav>
                        <a href="./">Inicio</a>
                        <a href="./">Productos</a>
                        <a href="./">Contacto</a>
                    </nav>
                    <CartWidget />
                </div>
            </Fragment>
        );
    }
}

export default NavBar;