import React, {useContext, useState} from 'react';
// REACT ROUTER DOM
import {Link} from "react-router-dom";
// CONTEXT
import { CartContext } from '../Context/CartContext';
// JS
import ItemCount from './ItemCount';
// SCSS
import './_Item.scss';

function Item({image, title, id, price, prop}) {
    const [quantity, setQuantity] = useState(0);
    const {addItem} = useContext(CartContext);
    
    const onAdd = (e) => {
        setQuantity(e);
        addItem(prop, e);
    }
    return (
        <div className="item">
            <img src={image} alt="Imágen Producto"></img>
            <p key={id} className="item-p">{title} <span>${price}</span></p>
            <p className="item-detail-container"><Link to={`/details/${id}`}>ver más</Link></p>
            <div>
                <ItemCount onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default Item;