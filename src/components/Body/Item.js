import React from 'react';

function Item({id, nombre, precio}) {
    return (
        <div>
            <h2 key={id} style={{ fontSize: "1.5rem" }}>{nombre} ${precio}</h2>
        </div>
    )
}

export default Item;