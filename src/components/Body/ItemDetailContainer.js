import React, {useEffect, useState} from 'react';
// FIREBASE
import {db} from '../../Firebase';
// JS
import ItemDetail from '../../Views/ItemDetail';
// SCSS
import './_ItemDetailContainer.scss';

function ItemDetailContainer( { match }) {
    let itemID = match.params.id;
    const [item, setItem] = useState([]);

    const getItem = () => {
        db.collection('products').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id })
            });
        setItem(docs);
        });
    }

    useEffect(() => {
        getItem();            
    }, []);

    let itemMatch = item.filter(item => item.id === itemID);

    return (
        <div className="item-detail-container">
            {itemMatch.map( (item) => 
                <div key={item.id}>
                    <ItemDetail  prop={item}/>
                </div>
            )}
        </div>
    )
}

export default ItemDetailContainer;
