import React from 'react'
import Item from '../Item/Item'
import "./itemList.css"

function ItemList(props) {
    return (
        <div className='itemList'>

            {props.productList.map(product => (

                <Item
                    key={product.id}
                    id={product.id}
                    img={product.img}
                    title={product.title}
                    price={product.price}
                    color={product.color}

                />
            ))
            }

        </div>
    )
}

export default ItemList