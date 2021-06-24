import React, { useState, useEffect } from 'react';
import ItemCount from '../components/Body/ItemCount';
import {Link} from 'react-router-dom';

function CategoryWomen() {
    const [women, setWomen] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/women's%20clothing`)
      .then(response => response.json())
      .then(response => setWomen(response))
    }, [])

    return (
        <div className="categorias">
            <h2 className="titulo">Mujer</h2>
            {women.map ( wom =>
                <div className="prop card item-detail">
                    <img src={`${wom.image}`} alt="Imágen Producto"></img>
                    <p key={wom.id} className="item-p">{wom.title} <span>${wom.price}</span></p>
                    <ItemCount />
                    <p className="item-detail-container"><Link to={`/details/${wom.id}`}>ver más</Link></p>
                </div>
                )
            }
        </div>
    )
}

export default CategoryWomen
