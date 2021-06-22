import React, {useEffect, useState} from 'react';
import './_ItemDetailContainer.scss';
import ItemDetail from '../../Views/ItemDetail';
import {useParams} from 'react-router-dom';

function ItemDetailContainer() {
    /*const [product, setProduct] = useState([])

    useEffect( () => {
        const getItems = new Promise( (resolve) => {
            setTimeout ( () => {
                resolve([
                    {id: 1, producto: "Botas Arya", tipo: "botas", color: "negro", precio: 5600, archivo: "https://res.cloudinary.com/nanette/image/upload/v1624243527/nanette-shoes/bootsblack_zedn4k.webp", imagen: "bootsblack"},
                    {id: 2, producto: "Zapatos Sansa", tipo: "zapatos", color: "beige", precio: 4900, archivo: "https://res.cloudinary.com/nanette/image/upload/v1624243527/nanette-shoes/beigeheels_ofw210.webp", imagen: "beigeheels"},
                    {id: 3, producto: "Borcegos Daenerys", tipo: "borcegos", color: "negro", precio: 6200, archivo: "https://res.cloudinary.com/nanette/image/upload/v1624243527/nanette-shoes/borcegoscadena_dejteo.webp", imagen: "borcegoscadena"},
                    {id: 4, producto: "Mocasines Jaime", tipo: "mocasines", color: "rosa", precio: 4400, archivo: "https://res.cloudinary.com/nanette/image/upload/v1624243528/nanette-shoes/pinkyshoes_yohqzz.webp", imagen: "pinkyshoes"},
                    {id: 5, producto: "Botas Jon", tipo: "botas", color: "negro", precio: 5800, archivo: "https://res.cloudinary.com/nanette/image/upload/v1624243528/nanette-shoes/goldboots_vc0m4i.webp", imagen: "goldboots"},
                    {id: 6, producto: "Sandalias Sam", tipo: "sandalias", color: "verde", precio: 4400, archivo: "https://res.cloudinary.com/nanette/image/upload/v1624243528/nanette-shoes/greensandals_erregz.webp", imagen: "greensandals"},
                    {id: 7, producto: "Botas Brienne", tipo: "botas", color: "verde", precio: 5200, archivo: "https://res.cloudinary.com/nanette/image/upload/v1624243528/nanette-shoes/greenboots_ivdumg.webp", imagen: "greenboots"},
                    {id: 8, producto: "Sandalias Ygritte", tipo: "sandalias", color: "negro", precio: 3900, archivo: "https://res.cloudinary.com/nanette/image/upload/v1624243528/nanette-shoes/stripedsandal_xpp7kj.webp", imagen: "stripedsandals"},
                    {id: 9, producto: "Botas Melisandre", tipo: "botas", color: "rojo", precio: 5700, archivo: "https://res.cloudinary.com/nanette/image/upload/v1624243528/nanette-shoes/redboots_kgryfi.webp", imagen: "redboots"},
                    {id: 10, producto: "Mocasines Cersei", tipo: "mocasines", color: "negro", precio: 4700, archivo: "https://res.cloudinary.com/nanette/image/upload/v1624243527/nanette-shoes/chunkyblack_g2fso7.webp", imagen: "chunkyblack"},
                    {id: 11, producto: "Borcegos Viserion", tipo: "borcegos", color: "rosa", precio: 5900, archivo: "https://res.cloudinary.com/nanette/image/upload/v1624243527/nanette-shoes/borcegospink_umm64b.webp", imagen: "borcegospink"},
                    {id: 12, producto: "Zapatos Missandei", tipo: "zapatos", color: "negro", precio: 5100, archivo: "https://res.cloudinary.com/nanette/image/upload/v1624243528/nanette-shoes/needleheels_oafbov.webp", imagen: "needleheels"},
                    {id: 13, producto: "Zapatos Margaery", tipo: "zapatos", color: "beige", precio: 4700, archivo: "https://res.cloudinary.com/nanette/image/upload/v1624243527/nanette-shoes/beigeshoes_grg0k1.webp", imagen: "beigeshoes"},
                    {id: 14, producto: "Sandalias Khal", tipo: "sandalias", color: "negro", precio: 4500, archivo: "https://res.cloudinary.com/nanette/image/upload/v1624243528/nanette-shoes/sandalsblack_uvgbls.webp", imagen: "sandalsblack"},
                    {id: 15, producto: "Mocasines Tyrion", tipo: "mocasines", color: "rojo", precio: 4600, archivo: "https://res.cloudinary.com/nanette/image/upload/v1624243528/nanette-shoes/redmocasines_qyy7cj.webp", imagen: "redmocasines"}
                ])
            }, 2000)
        })
        getItems.then( (resultado) => {
            setProduct(resultado)
        })
    }, [])*/
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
