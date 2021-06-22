import React from 'react';
import ItemList from './ItemList';
import './_ItemListContainer.scss';

function ItemListContainer ({greeting}) {
    return (
        <div className="item-list-container">
           <h1>{greeting}</h1>
           <ItemList />
        </div>
    )
}

export default ItemListContainer;