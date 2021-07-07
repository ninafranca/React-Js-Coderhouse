import React, {useEffect, useState} from 'react';
// FIREBASE
import {db} from '../../Firebase';
// JS
import ItemDetail from '../../Views/ItemDetail';
// SCSS
import './_ItemDetailContainer.scss';

function ItemDetailContainer({match}) {
    const [item, setItem] = useState({});
    let itemId = parseInt(match.params.id);

    const getItems = () => {
		db.collection('products').onSnapshot((querySnapshot) => {
			const docs = [];
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setItem(docs);
		});
	};
	useEffect(() => {
		getItems();
	}, []);

    return (
        <div className="item-detail-container">
            <div className="card" key={item.id}>
                <ItemDetail  prop={item}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer;
