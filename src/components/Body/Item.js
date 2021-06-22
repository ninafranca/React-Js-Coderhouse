import React from 'react';
import {Link} from "react-router-dom";
import './_Item.scss';

function Item({prop}) {
    return (
        <div className="item">
            <img src={`${prop.image}`} alt="Imágen Producto"></img>
            <p key={prop.id} className="item-p">{prop.title} <span>${prop.price}</span></p>
            <p className="item-detail-container"><Link to={`/details/${prop.id}`}>ver más</Link></p>
        </div>
    )
}

export default Item;