import React from 'react'
import { Link } from 'react-router-dom'
import "./item.css"

function Item(props) {
    return (

        <div className='item'>

            <img src={props.img[0]}></img>
            <p className='item-description'><Link to={`/detail/${props.id}`}>{props.title}</Link></p>

            {props.color.map(col => (
                        <button className={`btn-color btn-color-${col}`}></button>
                    ))}

            <p className='item-price'>${props.price}</p>


            <Link to={`/detail/${props.id}`}>
            <button className='btndetail'>VER MAS</button>
            </Link>
        </div>
    )
}

//  btn btn-secondary btn-block

export default Item