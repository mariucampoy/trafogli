import React, { useState, useContext } from 'react'
import cartContext from '../../Context/CartContext';
import "./itemDetail.css"

function ItemDetail({ product }) {

    const [count, setCount] = useState(1);
    const [size, setSize] = useState("Queen");
    const [colour, setColour] = useState("blanco");
    const [image, setImage] = useState("");
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
        setSize(e.target.value)

    }

    function handleColour(col) {
        setColour(col)
        setImage()


    }


    function onAddToCart(count, size, colour) {
        const itemForCart = {
            ...product,
            count,
            size,
            colour,
        }

        context.addItem(itemForCart)

        context.handleShow()

        setIsInCart(true)


    }

    return (
        <div className='itemDetail'>

            <div className='imgThumbnails'></div>

            <div className='imgDetail'>
                <img src={product.img[0]}></img>
            </div>


            <div className='contentDetail'>
                <p className='contentDetail-Title'>{product.title}</p>
                <p className='contentDetail-Price'>${product.price}
                </p>


                <div className='itemColor'>
                    <hr></hr>

                    <p>Color: <b>{colour.toUpperCase()} </b></p>

                    {product.color.map(col => (
                        <button onClick={() => handleColour(col)} className={`btn-color btn-color-${col}`}></button>
                    ))}
                </div>

                <div className='itemSize'>

                    <p>Medida:</p>

                    <select onChange={handleChange}>

                    {product.medida.map(med => (
                        <option value={med}>{med.toUpperCase()}</option>
                    ))}

                    </select>
                </div>

                <div>
                    <div className='itemCount'>
                        <button onClick={handleSubstract}> - </button>
                        <p>{count}</p>
                        <button onClick={handleAdd}> + </button>
                    </div>


                    {!isInCart ? (
                        <div>
                            <button onClick={() => onAddToCart(count, size, colour)} className='addCart'>Agregar al carrito</button>
                            <button>Volver al menu</button>
                        </div>
                    ) : (

                        <div>
                            <div>
                                <button onClick={() => onAddToCart(count, size, colour)} className='addCart'>Agregar al carrito</button>
                                <button>Volver al menu</button>
                            </div>


                            <p>Agregado al Carrito</p>


                        </div>
                    )}

                </div>
            </div>
        </div>

    )
}

export default ItemDetail