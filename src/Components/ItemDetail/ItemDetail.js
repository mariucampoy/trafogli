import React from 'react'
import "./itemDetail.css"

function ItemDetail(props) {
    return (
        <div className='itemDetail'>

            <div>

            <img src={props.img}></img>

            </div>

            <div>

                <p><a href='#'>{props.title}</a></p>
                <p>${props.price}</p>

                <button>Agregar al carrito</button>

            </div>

        </div>

    )
}

export default ItemDetail