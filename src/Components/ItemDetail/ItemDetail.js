import React, { useState, useContext } from 'react'
import cartContext from '../../Context/CartContext';
import CarouselProduct from './CarouselProduct';
import "./itemDetail.css"

function ItemDetail({ product }) {

    const [count, setCount] = useState(1);
    const [size, setSize] = useState(product.medida[0]);
    const [colour, setColour] = useState(product.color[0]);
    const [precio, setPrecio] = useState(product.price[0]);
    const [image, setImage] = useState("");
    const [isInCart, setIsInCart] = useState(false)
    const context = useContext(cartContext)

    let indexy = colour + size

    function getValueByKey(object, k) {
        return object[k]
      }
 
  const resultado = getValueByKey(product.stock, indexy) 
  console.log(resultado)


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
        let indexPrice = product.medida.indexOf(e.target.value)
        setPrecio(product.price[indexPrice])

    }

    function handleColour(col) {
        setColour(col)
        let indexColor = product.color.indexOf(col)
        setImage()
    }


    function onAddToCart(count, size, colour, precio) {
        const itemForCart = {
            ...product,
            count,
            size,
            colour,
            precio
        }

        context.addItem(itemForCart)

        context.handleShow()

        setIsInCart(true)


    }

    return (
        <div className='itemDetail'>



            <div className='imgDetail'>

                <CarouselProduct img={product.img} ></CarouselProduct>

            </div>


            <div className='contentDetail'>
                <p className='contentDetail-Title'>{product.title}</p>
                <p className='contentDetail-Price'>${precio}
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
                            <button onClick={() => onAddToCart(count, size, colour, precio)} className='addCart'>Agregar al carrito</button>
                            <button className='btndetail-backhome'>Volver al menu</button>
                        </div>
                    ) : (

                        <div>
                            <div>
                                <button onClick={() => onAddToCart(count, size, colour, precio)} className='addCart'>Agregar al carrito</button>
                                <button className='btndetail-backhome'>Volver al menu</button>
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