import React from "react";
import { Link } from 'react-router-dom'

import "./itemListContainer.css"

function CategoryItem(props) {
    return (

        <div className="category-card">
        <Link to={props.link}>

            <div className="container-img-card">
                <img className='img-card' src={props.img} alt="Card image" />
            </div>

            <div className="container-text-card">
                <h2 className="title-card">{props.title}</h2>
                <p className="text-card">{props.text}</p>
            </div>
        </Link>
        </div>

    );
}

export default CategoryItem;