import React, { useState, useEffect } from 'react';
import ItemCount from '../components/Body/ItemCount';
import {Link} from 'react-router-dom';


function CategoryElectronics() {
    const [electronics, setElectronics] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/electronics`)
      .then(response => response.json())
      .then(response => setElectronics(response))
    }, [])

    return (
        <div className="categorias">
            <h2 className="titulo">Electrónica</h2>
            {electronics.map ( elec =>
                <div className="prop card item-detail">
                    <img src={`${elec.image}`} alt="Imágen Producto"></img>
                    <p key={elec.id} className="item-p">{elec.title} <span>${elec.price}</span></p>
                    <ItemCount />
                    <p className="item-detail-container"><Link to={`/details/${elec.id}`}>ver más</Link></p>
                </div>
                )
            }
        </div>
    )
}

export default CategoryElectronics;