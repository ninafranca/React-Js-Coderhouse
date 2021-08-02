import React from 'react';
// REACT ROUTER DOM
import {Link} from "react-router-dom";
// SCSS
import './_Item.scss';

function Item({image, title, id, price}) {
    return (
        <div className=" card item">
            <img src={image} alt="Imágen Producto"></img>
            <p key={id} className="item-p">{title} <span>${price}</span></p>
            <p className="item-detail-container ver-mas"><Link to={`/details/${id}`}>ver más</Link></p>
        </div>
    )
}

export default Item;