import React, { useState, useEffect } from 'react';
// FIREBASE
import { db } from '../../Firebase';
// JS
import Item from './Item';
import Aside from './Aside';
// SCSS
import './_Category.scss';
import '../../_Mixins.scss';

function CategoriesColor({ match }) {
    const itemColor = match.params.id;
    const [category, setCategory] = useState([]);

    const getItems = () => {
        db.collection('products')
            .where('color', '==', itemColor)
            .get()
            .then((querySnapshot) => {
                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id });
                });
                setCategory(docs);
            });
    };

    useEffect(() => {
        getItems();
    });

    return (
        <div className="category-list">
            <h2>{itemColor.toUpperCase()}</h2>
            <div className="aside-category aside-productos">
                <Aside />
                <div className="category productos">
                    { category.map( (p) => 
                    <Item className="category-item" key={p.id} image={p.image} title={p.title} id={p.id} price={p.price} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default CategoriesColor;
