import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import cartContext from '../../Context/CartContext';
import "./itemDetail.css"

function ItemDetail({ product }) {

    const [count, setCount] = useState(1);
    const [medida, setMedida] = useState("queen");
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

    function handleChange(e) {
        setMedida(e.target.value)

    }


    function onAddToCart(count, medida) {
        const itemForCart = {
            ...product,
            count,
            medida
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

                <p>Color:</p>
                <button className='btn-color-white'></button>
                <button className='btn-color-grey'></button>

                <p>Medida:</p>
                <select onChange={handleChange}>
                    <option selected value="queen">Queen</option>
                    <option value="king">King</option>
                    <option value="superking">Super King</option>
                </select>

                <div>
                    <div className='itemCount'>
                        <button onClick={handleSubstract}> - </button>
                        <p>{count}</p>
                        <button onClick={handleAdd}> + </button>
                    </div>

                    {!isInCart ? (
                        <div>
                            <button onClick={() => onAddToCart(count, medida)} className='addCart'>Agregar al carrito</button>
                            <button>Volver al menu</button>
                        </div>
                    ) : (

                        <div>
                            <div>
                                <button onClick={() => onAddToCart(count, medida)} className='addCart'>Agregar al carrito</button>
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