import React from 'react';
import {Link} from "react-router-dom";
import ItemCount from './ItemCount';
import './_Item.scss';

function Item({image, title, id, price}) {
    return (
        <div className="item">
            <img src={image} alt="Imágen Producto"></img>
            <p key={id} className="item-p">{title} <span>${price}</span></p>
            <p className="item-detail-container"><Link to={`/details/${id}`}>ver más</Link></p>
            <div>
                <ItemCount />
            </div>
        </div>
    )
}

export default Item;