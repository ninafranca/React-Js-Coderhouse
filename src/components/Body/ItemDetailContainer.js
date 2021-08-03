import React, { useEffect, useState } from 'react';
// FIREBASE
import { db } from '../../Firebase';
// JS
import ItemDetail from './ItemDetail';
// SCSS
import './_ItemDetailContainer.scss';

function ItemDetailContainer({ match }) {
    const itemID = match.params.id;
    const [item, setItem] = useState([]);

    const getItem = () => {
        db.collection('products').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setItem(docs);
        });
    };

    useEffect(() => {
        getItem();
    }, []);

    const itemMatch = item.filter((i) => i.id === itemID);

    return (
        <div className="item-detail-container">
            {itemMatch.map((i) => (
                <div key={i.id}>
                    <ItemDetail prop={i} />
                </div>
            ))}
        </div>
    );
}

export default ItemDetailContainer;
