import React, { useState, useEffect } from 'react';
import Item from './Item';
import './_Category.scss';

function Categories({match}) {
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${match.params.category}`)
        .then((res)=> res.json())
        .then((productos)=> setProductos(productos))

    }, [match.params.category]);

    const paramTitle = match.params.category.toUpperCase();

    return (
        <div className="category-list">
            <h2>{paramTitle}</h2>
            <div className="card category">
                {productos.map(p=> <Item image={p.image} title={p.title} id={p.id} price={p.price} />)}
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