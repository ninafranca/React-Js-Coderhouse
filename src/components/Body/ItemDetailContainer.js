import React, {useEffect, useState} from 'react';
import './_ItemDetailContainer.scss';
import ItemDetail from '../../Views/ItemDetail';
import {useParams} from 'react-router-dom';

function ItemDetailContainer() {
    
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect( () => {
        setTimeout( () => {
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then (res => res.json())
            .then (res => setItem(res))
        }, 2000);
    }, [id])

    return (
        <div className="item-detail-container">
            <div className="card" key={item.id}>
                <ItemDetail  prop={item}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer;
