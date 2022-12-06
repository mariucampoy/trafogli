import React from "react";

import "./itemListContainer.css"

function CategoryItem(props) {
  return (

    <div className=" category-card">

      <img className='img-card hover-zoom' src={props.img} alt="Card image" />

        <h2>{props.title}</h2>
        <p>{props.text}</p>
    </div>

  );
}

export default CategoryItem;