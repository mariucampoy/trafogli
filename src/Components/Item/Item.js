import React from 'react'
import { Link } from 'react-router-dom'
import "./item.css"

function Item(props) {
    return (

        <div className='item'>

            <img src={props.img}></img>
            <p className='item-description'><Link to={`/detail/${props.id}`}>{props.title}</Link></p>
            <p className='item-price'>${props.price}</p>

            <Link to={`/detail/${props.id}`}>
            <button className='btndetail btn btn-secondary btn-block'>Ver mas</button>
            </Link>
        </div>
    )
}

export default Item