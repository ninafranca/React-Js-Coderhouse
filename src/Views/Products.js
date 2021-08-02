import React from 'react';
// REACT ROUTER DOM
import {Link} from 'react-router-dom';
// JS
import ItemListContainer from '../components/Body/ItemListContainer';

function Products() {
    return (
        <div className="products">
            <h2 className="titulo">PRODUCTOS</h2>
            <div className="aside-productos">
                <aside id="aside">
                    <h3>Filtros</h3>
                    <div className="form-check">
                        <Link to="/">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="todos"></input>
                        </Link>
                        <label className="form-check-label" for="flexRadioDefault1">Todos</label>
                    </div>
                    <div className="form-check">
                        <Link to="/category/sorbetes">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="sorbetes"></input>
                        </Link>
                        <label className="form-check-label" for="flexRadioDefault1">Sorbetes</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="vajilla"></input>
                        <label className="form-check-label" for="flexRadioDefault1">Vajilla</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="accesorios"></input>
                        <label className="form-check-label" for="flexRadioDefault1">Accesorios</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="negro"></input>
                        <label className="form-check-label filtro-negro" for="flexRadioDefault1">.</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="dorado"></input>
                        <label className="form-check-label filtro-dorado" for="flexRadioDefault1">.</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="rojo"></input>
                        <label className="form-check-label filtro-holo" for="flexRadioDefault1">.</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="verde"></input>
                        <label className="form-check-label filtro-cobre" for="flexRadioDefault1">.</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="rosa"></input>
                        <label className="form-check-label filtro-surtido" for="flexRadioDefault1">.</label>
                    </div>
                </aside>
                <section className="productos">
                    <ItemListContainer />
                </section>
            </div>
        </div>
    )
}

export default Products;
