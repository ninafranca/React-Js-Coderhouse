import React, { useState, useEffect } from 'react';
import ItemCount from '../components/Body/ItemCount';
import {Link} from 'react-router-dom';

function CategoryMen() {
    const [men, setMen] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
      .then(response => response.json())
      .then(response => setMen(response))
    }, [])

    return (
        <div className="categorias">
            <h2 className="titulo">Hombre</h2>
            {men.map ( men =>
                <div className="prop card item-detail">
                    <img src={`${men.image}`} alt="Imágen Producto"></img>
                    <p key={men.id} className="item-p">{men.title} <span>${men.price}</span></p>
                    <ItemCount />
                    <p className="item-detail-container"><Link to={`/details/${men.id}`}>ver más</Link></p>
                </div>
                )
            }
        </div>
    )
}

export default CategoryMen;