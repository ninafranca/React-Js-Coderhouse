import React from 'react';

function ItemListContainer ({greeting}) {
    return (
        <div className="d-flex justify-content-center align-items-center">
           <h1 style={{color: "gray", padding: "1rem 0rem", fontSize: "5rem"}}>{greeting}</h1>           
        </div>
    )
}

export default ItemListContainer;