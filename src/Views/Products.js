import React from 'react';
// JS
import ItemListContainer from '../components/Body/ItemListContainer';

function Products() {
    return (
        <div className="products">
            <h2 className="titulo">PRODUCTOS</h2>
            <div className="aside-productos">
                <section className="productos">
                    <ItemListContainer />
                </section>
            </div>
        </div>
    );
}

export default Products;
