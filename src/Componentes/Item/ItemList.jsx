import React from "react"
import CardList from "./CardList"
import {Col} from "react-bootstrap"

const ItemList = ({items}) => {
    return (
        <>
            {
                items.map ( (item) => (
                    <Col lg={3} key={item.id}>
                        <CardList item={item} />
                    </Col>
                ))
            }
        </>
    )
}
export default ItemList