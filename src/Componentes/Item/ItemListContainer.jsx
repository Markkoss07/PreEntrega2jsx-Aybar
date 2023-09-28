import React, {useState, useEffect } from "react";
import {Row} from "react-bootstrap"
import { Container } from "react-bootstrap";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [items, setItems] = useState([])

    const getData = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getData()
    }, [])
    console.log(items)
    return (
        <Container className="fondo">
            <Row>
                <ItemList items={items} />
            </Row>
        </Container>
    )
}

 export const PedirId = (id) => {
    return new Promise((res, rej) => {

        const producto = fetch('https://fakestoreapi.com/products').find((element) => element.id === id);
        if (producto) {
            res(producto)
        } else {
            rej({
                error: "No se encontro lo que busca"
            })
        }

    })

}

export default ItemListContainer 