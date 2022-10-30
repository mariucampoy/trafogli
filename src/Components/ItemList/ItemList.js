import React from 'react'
import Item from '../Item/Item'
import { products } from '../../data/products'
import "./itemList.css"

function ItemList() {
    return (
        <div className='itemList'>

            {products.map(product => (

                <Item
                    key={product.id}
                    img={product.img}
                    title={product.title}
                    price={product.price}
                />
            ))
            }

        </div>
    )
}

export default ItemList