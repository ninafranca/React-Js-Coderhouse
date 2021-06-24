import React from 'react';
import ItemList from './ItemList';
import './_ItemListContainer.scss';

function ItemListContainer () {
    return (
        <div className="item-list-container">
           <ItemList />
        </div>
    )
}

export default ItemListContainer;