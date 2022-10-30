import React from 'react'
import "./item.css"

function Item(props) {
    return (

        <div className='item'>

            <img src={props.img}></img>
            <p><a href='#'>{props.title}</a></p>
            <p>${props.price}</p>

            <button>Ver mas</button>
        </div>
    )
}

export default Item