import React from 'react'
import ItemAll from '../Item/ItemAll'
import "./itemListAll.css"

function ItemListAll(props) {
    return (
        <div className='itemListAll'>

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