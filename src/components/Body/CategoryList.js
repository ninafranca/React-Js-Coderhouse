import React, {useEffect, useState} from 'react';
import './_ItemDetailContainer.scss';
import Categories from '../../Views/Categories';
import {useParams} from 'react-router-dom';
import ItemCount from './ItemCount';

function CategoryList() {
    const [category, setCategory] = useState({});
    const {param} = useParams();

    useEffect( () => {
        setTimeout( () => {
            fetch(`https://fakestoreapi.com/products/category/${param}`)
            .then (res => res.json())
            .then (res => setCategory(res))
        }, 2000);
    }, [param])

    return (
        <div className="item-list">
        {category.map(cat => 
            <div className="card" style={{ margin: 10}} key={cat.id}>
                <Categories prop={category} />
                <ItemCount />
            </div>
        )}
        </div>
    )
}

export default CategoryList;
