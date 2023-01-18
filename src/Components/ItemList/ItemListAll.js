import React from 'react'
import ItemAll from '../Item/ItemAll'
import "./itemList.css"

function ItemListAll(props) {
    return (
        <div className='itemList'>

            {props.productList.map(product => (

                <ItemAll
                    key={product.id}
                    product={product}

                />
            ))
            }

        </div>
    )
}

export default ItemListAll