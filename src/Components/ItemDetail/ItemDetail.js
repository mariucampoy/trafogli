import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import cartContext from '../../Context/CartContext';
import swal from 'sweetalert';
import "./itemDetail.css"

function ItemDetail({ product }) {

    const [count, setCount] = useState(1);
    const [isInCart, setIsInCart] = useState(false)
    const context = useContext(cartContext)

    function handleAdd() {
        if (count < product.stock)
            setCount(count + 1);
    }
    function handleSubstract() {
        if (count > 1)
            setCount(count - 1)
    }


    function onAddToCart(count) {

        const itemForCart = {
            ...product,
            count
        }

        context.addItem(itemForCart)

        swal("Agregado con éxito!", "", "success");

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
               <div>
                    <div className='itemCount'>
                        <button onClick={handleSubstract}> - </button>
                        <p>{count}</p>
                        <button onClick={handleAdd}> + </button>
                    </div>

                    {!isInCart ? (
                        <div>
                            <button onClick={() => onAddToCart(count)} className='addCart'>Agregar al carrito</button>
                            <button>Volver al menu</button>
                        </div>
                    ) : (

                        <div>
                            <div>
                                <button onClick={() => onAddToCart(count)} className='addCart'>Agregar al carrito</button>
                                <button>Volver al menu</button>
                            </div>

                            <Link to="/cart">
                                <button>Ir al Carrito</button>
                            </Link>

                        </div>
                    )}

                </div>
            </div>
        </div>

    )
}

export default ItemDetail