import React, { useState, useEffect } from 'react';
import ItemCount from '../components/Body/ItemCount';
import {Link} from 'react-router-dom';

function CategoryJewelery() {
    const [jewelery, setJewelery] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/jewelery`)
      .then(response => response.json())
      .then(response => setJewelery(response))
    }, [])

    return (
        <div className="categorias">
            <h2 className="titulo">Joyas</h2>
            {jewelery.map ( jewe =>
                <div className="prop card item-detail">
                    <img src={`${jewe.image}`} alt="Imágen Producto"></img>
                    <p key={jewe.id} className="item-p">{jewe.title} <span>${jewe.price}</span></p>
                    <ItemCount />
                    <p className="item-detail-container"><Link to={`/details/${jewe.id}`}>ver más</Link></p>
                </div>
                )
            }
        </div>
    )
}

export default CategoryJewelery
