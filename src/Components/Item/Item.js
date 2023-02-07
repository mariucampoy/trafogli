import React from 'react'
import { Link } from 'react-router-dom'
import "./item.css"

function Item({ product }) {
    return (

        <div className='itemCat'>
            <div className='itemCatContainer'>
                <Link to={`/detail/${product.id}`}><img src={product.subcategoryImg}></img> </Link>
                <h3 className='itemCat-description-title'><Link to={`/detail/${product.id}`}>{product.subcategory}</Link></h3>
                <p className='itemCat-description'>{product.subcategoryDescription}</p>
            </div>

            {/* <Link to={`/detail/${product.id}`}>
        <button className='btndetail'>VER</button>
        </Link> */}

        </div>
    )
}



export default Item