import React from 'react';
import ItemCount from './ItemCount';

function ItemListContainer ({greeting}) {
    return (
        <div className="item-list-container">
           <h1 style={{color: "gray", padding: "1rem 0rem", fontSize: "5rem"}}>{greeting}</h1>   
           <ItemCount />        
        </div>
    )
}

export default ItemListContainer;