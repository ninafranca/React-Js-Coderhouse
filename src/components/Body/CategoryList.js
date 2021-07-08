import React, { useState, useEffect } from 'react';
// FIREBASE
import {db} from '../../Firebase';
// JS
import Item from './Item';
// SCSS
import './_Category.scss';

function Categories({match}) {
    let itemCategory = match.params.id;
    const [category, setCategory] = useState ([]);

    const getItems = () => {
		db.collection('products').where('type','==', itemCategory).get().then((querySnapshot) => {
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
            <div className="card category">
                {category.map(p=> <Item image={p.image} title={p.title} id={p.id} price={p.price} />)}
            </div>
        </div>
    )
}

export default Categories;

/*import React, { useState, useEffect } from 'react';
import ItemListContainer from '../components/Body/ItemListContainer';

function CategoryElectronics({match}) {
    const [category, setCategory] = useState([]);
    let itemCategory = match.params.category;
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${itemCategory}`)
      .then(response => response.json())
      .then((res) => setCategory(res.map((e) => e.category === itemCategory)));
    }, [itemCategory]);

    return (
        category.map( p =>
            <div key={p.id}>
            <ItemListContainer prop={p} /></div>
        )
    )
}

export default CategoryElectronics;*/


/*import React, { useState, useEffect } from 'react';
import ItemListContainer from '../components/Body/ItemListContainer';

function CategoryElectronics({match}) {
    const [category, setCategory] = useState([]);
    let itemCategory = match.params.category;
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${itemCategory}`)
      .then(response => response.json())
      .then((res) => setCategory(res.map((e) => e.category === itemCategory)));
    }, [itemCategory]);

    return (
        category.map( p =>
            <div key={p.id}>
            <ItemListContainer prop={p} /></div>
        )
    )
}

export default CategoryElectronics;*/