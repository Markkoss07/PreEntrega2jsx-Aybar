import React from 'react'

const CardList = ({item}) => {

    return (
        <div className='contenedor-card'>
            <div className="card carjeta" style={{width: '280px'}}>
                <img src={item.image} className="card-img-top imagen" alt={item.title} />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">${item.price}</p>
                    <a href="aaa" className="btn btn-primary">Carrito</a>
                </div>
            </div>
        </div>
    )
}
export default CardList