import React from 'react'
import { BsMinecartLoaded } from "react-icons/bs"

export const CartWidget = () => {
    return(
        <div className='carrito'>
            <BsMinecartLoaded /> <span>0</span>
        </div>
    )
}
