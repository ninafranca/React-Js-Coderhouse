import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Item from './Item';
import ItemCount from './ItemCount';
import './_ItemList.scss';

function ItemList() {
    const [products, setProducts] = useState ([]);
    useEffect(() => {
        setTimeout(() => {
            axios('data.json').then((res) => setProducts(res.data))
          }, 1000);       
    }, [])

    return (
        <div className="item-list">
            {products.map ( p =>
                <div div className="card" style={{ margin: 10}} key={p.id}>
                    <Item 
                        prop={p}
                        key={p.id}
                    />
                    <ItemCount />
                </div>
            )}
        </div>
    )
}

export default ItemList;