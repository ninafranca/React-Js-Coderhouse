import React, {useEffect, useState} from 'react'
import Item from './Item';
import ItemCount from './ItemCount';

function ItemList() {
    const [productos, setProductos] = useState([])

    useEffect( () => {
        const promesa = new Promise( (resolve, reject) => {
            setTimeout ( () => {
                resolve([
                    {id: 1, nombre: "Botas Arya", precio: 5500},
                    {id: 2, nombre: "Zapatos Sansa", precio: 4900},
                    {id: 3, nombre: "Borcegos Daenerys", precio: 6200},
                    {id: 4, nombre: "Botas Jon", precio: 5600}
                ])
            }, 2000)
        })
        promesa.then( (resultado) => {
            setProductos(resultado)
        })
    }, [])

    return (
        <div className="d-flex flex-row">
            {productos.map(p => 
                <div className="card" style={{ margin: 20 }}>
                    <Item 
                        id={p.id} 
                        nombre={p.nombre} 
                        precio={p.precio}
                    />
                    <ItemCount />
                </div>
            )}
        </div>
    )
}

export default ItemList;