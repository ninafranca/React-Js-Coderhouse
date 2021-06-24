import React from 'react';
import ItemListContainer from '../components/Body/ItemListContainer';

function Products() {
    return (
        <div className="products">
            <h2 className="titulo">PRODUCTOS</h2>
            <div className="aside-productos">
                <aside id="aside">
                    <h3>Filtros</h3>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="todos"></input>
                        <label className="form-check-label" for="flexRadioDefault1">Todos</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="botas"></input>
                        <label className="form-check-label" for="flexRadioDefault1">Botas</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="zapatos"></input>
                        <label className="form-check-label" for="flexRadioDefault1">Zapatos</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="sandalias"></input>
                        <label className="form-check-label" for="flexRadioDefault1">Sandalias</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="mocasines"></input>
                        <label className="form-check-label" for="flexRadioDefault1">Mocasines</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="borcegos"></input>
                        <label className="form-check-label" for="flexRadioDefault1">Borcegos</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="negro"></input>
                        <label className="form-check-label filtro-negro" for="flexRadioDefault1">.</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="beige"></input>
                        <label className="form-check-label filtro-beige" for="flexRadioDefault1">.</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="rojo"></input>
                        <label className="form-check-label filtro-rojo" for="flexRadioDefault1">.</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="verde"></input>
                        <label className="form-check-label filtro-verde" for="flexRadioDefault1">.</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="rosa"></input>
                        <label className="form-check-label filtro-rosa" for="flexRadioDefault1">.</label>
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
