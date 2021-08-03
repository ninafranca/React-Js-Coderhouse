/*import React, { useState, useEffect } from 'react';
// FIREBASE
import { db } from '../../Firebase';
// JS
import Item from './Item';
import Aside from './Aside';
// SCSS
import './_Category.scss';

function Categories({ match }) {
    const itemCategory = match.params.id;
    const [category, setCategory] = useState([]);

    const getItems = () => {
        db.collection('products')
            .where('type', '==', itemCategory)
            .get()
            .then( (querySnapshot) => {
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
            <h2>{itemCategory.toUpperCase()}</h2>
            <div className="aside-category aside-productos">
                <Aside />
                <div className="category productos">
                    { category.map((p) => <Item className="category-item" image={p.image} title={p.title} id={p.id} price={p.price} />)}
                </div>
            </div>
        </div>
    );
}

export default Categories;
*/




import React, { useState, useEffect } from 'react';
// FIREBASE
import { db } from '../../Firebase';
// JS
import Item from './Item';
// SCSS
import './_Category.scss';

function Categories({match}) {
    let itemCategory = match.params.id;
    const [category, setCategory] = useState ([]);

    const getItems = () => {
		db.collection('products')
            .where('type','==', itemCategory)
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
            <h2>{itemCategory.toUpperCase()}</h2>
            <div className="aside-category aside-productos">
                <div className="category productos">
                    { category.map( (p) => <Item className="category-item" image={p.image} title={p.title} id={p.id} price={p.price} />)}
                </div>
            </div>
        </div>
    )
}

export default Categories;
