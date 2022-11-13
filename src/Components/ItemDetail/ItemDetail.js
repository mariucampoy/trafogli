import React, { useState, useContext } from 'react'
import cartContext from '../../Context/CartContext';
import "./itemDetail.css"

function ItemDetail({product}) {

    const [count, setCount] = useState(1);
    const [isInCart , setIsInCart] = useState(false)
    const context = useContext(cartContext)

    function handleAdd() {
        if (count < product.stock)
            setCount(count + 1);
    }
    function handleSubstract() {
        if (count > 1)
            setCount(count - 1)
    }


    function onAddToCart(count){

        const itemForCart = {
            ...product,
            count
        }

      context.addItem(itemForCart)

       setIsInCart(true)
    }

    return (
        <div className='itemDetail'>
            <div className='imgDetail'>
                <img src={product.img}></img>
            </div>
            <div className='textDetail'>
                <p>{product.title}</p>
                <p>${product.price}</p>
                <div >
                    <div className='itemCount'>
                        <button onClick={handleSubstract}> - </button>
                        <p>{count}</p>
                        <button onClick={handleAdd}> + </button>
                    </div>
                    <div>
                        <button onClick={()=> onAddToCart(count)} className='addCart'>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemDetail