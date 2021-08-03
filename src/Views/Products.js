import React from 'react';
// JS
import ItemListContainer from '../components/Body/ItemListContainer';

function Products() {
    return (
        <div className="products">
            <h2 className="titulo">PRODUCTOS</h2>
            <section className="productos">
                <ItemListContainer />
            </section>
        </div>
    )
}

export default Products;
