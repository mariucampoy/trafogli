import React from 'react'
import Item from '../Item/Item'
import "./itemList.css"

function ItemList(props) {
    return (
        <div className='itemList'>

            {props.productList.map(product => (

                <Item
                    key={product.id}
                    product={product}

                />
            ))
            }

        </div>
    )
}

export default ItemList