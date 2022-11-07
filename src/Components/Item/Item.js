import React from 'react'
import { Link } from 'react-router-dom'
import "./item.css"

function Item(props) {
    return (

        <div className='item'>

            <img src={props.img}></img>
            <p><Link to={`/detalle/${props.id}`}>{props.title}</Link></p>
            <p>${props.price}</p>

            <Link to={`/detalle/${props.id}`}>
            <button>Ver mas</button>
            </Link>
        </div>
    )
}

export default Item