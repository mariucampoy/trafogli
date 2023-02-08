import React from 'react'
import { Link } from 'react-router-dom'
import "./item.css"

function Item({ product }) {
    return (

        <div className='itemCat'>
            <Link to={`/detail/${product.id}`}>
            <div className='itemCatContainer'>
                <img src={product.subcategoryImg}></img>
                <h3 className='itemCat-description-title'>{product.subcategory}</h3>
                <p className='itemCat-description'>{product.subcategoryDescription}</p>
            </div>
            </Link>

            {/* <Link to={`/detail/${product.id}`}>
        <button className='btndetail'>VER</button>
        </Link> */}

        </div>
    )
}



export default Item