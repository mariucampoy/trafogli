import React from 'react'
import { Link } from 'react-router-dom'
import "./itemAll.css"

function ItemAll({product}) {
    return (

        <div className='item'>

            <img src={product.img[0]}></img>
            <p className='item-description'><Link to={`/detail/${product.id}`}>{product.title}</Link></p>

            <div className="itemColors">
            {product.color.map(col => (
                        <button className={`btn-color btn-color-${col}`}></button>
                    ))}
            </div>

            <p className='item-price'>${product.price[0]}</p>


            <Link to={`/detail/${product.id}`}>
            <button className='btndetail'>VER MAS</button>
            </Link>
        </div>
    )
}

//  btn btn-secondary btn-block

export default ItemAll