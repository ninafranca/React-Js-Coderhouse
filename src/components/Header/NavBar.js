import React, {Component, Fragment} from 'react';

class NavBar extends Component {
    render() {
        return (
            <Fragment>
                <div className="App-header">
                    <h1>Nanette Shoes</h1>
                    <nav>
                        <a href="./">Inicio</a>
                        <a href="./">Productos</a>
                        <a href="./">Contacto</a>
                    </nav>
                </div>
            </Fragment>
        );
    }
}

export default NavBar;