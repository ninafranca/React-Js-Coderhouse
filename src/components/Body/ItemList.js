import React, { useEffect, useState } from 'react';
// FIREBASE
import { db } from '../../Firebase';
// JS
import Item from './Item';
// SCSS
import './_ItemList.scss';

function ItemList() {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        db.collection('products').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach( (doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProducts(docs);
        });
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="item-list">
            { products.map((p) => (
                <div style={{ margin: 10 }} key={p.id}>
                    <Item
                        key={p.id}
                        image={p.image}
                        title={p.title}
                        id={p.id}
                        price={p.price}
                    />
                </div>
            ))}
        </div>
    );
}

export default ItemList;
