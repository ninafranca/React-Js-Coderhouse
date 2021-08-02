import React from 'react';
// REACT ROUTER DOM
import { Link } from 'react-router-dom';
// SCSS
import './_Aside.scss';

function Aside() {
    return (
        <aside id="aside">
            <h3>Filtros</h3>
            <div className="form-check">
                <Link to="/products">
                    <p id="todos">Todos</p>
                </Link>
            </div>
            <div className="form-check">
                <Link to="/category/sorbetes">
                    <p id="sorbetes">Sorbetes</p>
                </Link>
            </div>
            <div className="form-check">
                <Link to="/category/vajilla">
                    <p id="vajila">Vajilla</p>
                </Link>
            </div>
            <div className="form-check">
                <Link to="/category/accesorios">
                    <p id="accesorios">Accesorios</p>
                </Link>
            </div>
            <div className="form-check">
                <Link to="/category-color/negro">
                    <p id="negro" className="filtro-negro">.</p>
                </Link>
            </div>
            <div className="form-check">
                <Link to="/category-color/dorado">
                    <p id="dorado" className="filtro-dorado">.</p>
                </Link>
            </div>
            <div className="form-check">
                <Link to="/category-color/holografico">
                    <p id="holo" className="filtro-holo">.</p>
                </Link>
            </div>
            <div className="form-check">
                <Link to="/category-color/cobre">
                    <p id="cobre" className="filtro-cobre">.</p>
                </Link>
            </div>
            <div className="form-check">
                <Link to="/category-color/surtido">
                    <p id="surtido" className="filtro-surtido">.</p>
                </Link>
            </div>
        </aside>
    );
}

export default Aside;
