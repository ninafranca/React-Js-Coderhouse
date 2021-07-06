import React, {useEffect, useState} from 'react'
import Item from './Item';
import './_ItemList.scss';

function ItemList() {
    const [products, setProducts] = useState([])
   
    useEffect(() => {
        setTimeout(() => {
          fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then( res => setProducts(res));
        }, 2000);
       
    }, [])

    return (
        <div className="item-list">
        {products.map(p => 
            <div className="card" style={{ margin: 10}} key={p.id}>
                <Item 
                    key={p.id}
                    image={p.image} 
                    title={p.title}
                    id={p.id}
                    price={p.price}
                />
            </div>
        )}
    </div>
    )}

export default ItemList;