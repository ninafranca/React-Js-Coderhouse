import React from 'react';
// JS
import ItemList from './ItemList';
// SCSS
import './_ItemListContainer.scss';

function ItemListContainer () {
    return (
        <div className="item-list-container">
           <ItemList />
        </div>
    )
}

export default ItemListContainer;