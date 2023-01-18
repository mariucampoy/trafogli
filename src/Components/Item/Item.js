import React from 'react'
import { Link } from 'react-router-dom'
import "./item.css"

function Item({product}) {
    return (

        <div className='item'>

        <Link to={`/detail/${product.id}`}><img src={product.subcategoryImg}></img> </Link>
            <h3 className='item-description'><Link to={`/detail/${product.id}`}>{product.subcategory}</Link></h3>

            <p className='item-description'>{product.subcategoryDescription}</p>


            <Link to={`/detail/${product.id}`}>
            <button className='btndetail'>VER</button>
            </Link>
        </div>
    )
}



export default Item