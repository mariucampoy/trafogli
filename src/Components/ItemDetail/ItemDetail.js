import React, { useCallback, useRef, useState, useContext } from 'react'
import cartContext from '../../Context/CartContext';
import CarouselProduct from './CarouselProduct';
import Form from 'react-bootstrap/Form';
import "./itemDetail.css";
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import {useNavigate} from 'react-router-dom';
import { Container } from 'react-bootstrap';





function ItemDetail({ product }) {

    const [count, setCount] = useState(1);
    const [size, setSize] = useState(product.medida[0]);
    const [colour, setColour] = useState(product.color[0]);
    // const [precio, setPrecio] = useState(product.price[0]);
    const [image, setImage] = useState("");
    const [isInCart, setIsInCart] = useState(false)
    const context = useContext(cartContext)

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = -1; 
      navigate(path);
    }

    function getValueByKey(object, k) {
        return object[k]
    }

    let indexy = colour + size

    //medidas description

    const indexsize = getValueByKey(product.medidadescription, size)

    //price  

    const precio = getValueByKey(product.price, indexy)

    //stock

    const indexstock = getValueByKey(product.stock, indexy)

    let payment = {
        tarjeta: 1,
        transferencia: 0.8
    }

    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        maximumFractionDigits: 0,
    });

    console.log(formatter.format(2500)); /* $2,500.00 */

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
        // let indexPrice = product.medida.indexOf(e.target.value)
        // setPrecio(product.price[indexPrice])

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

        <div>
            <div className='container-backhome'>

                <div className='element-backhome' onClick={routeChange} style={{cursor:'pointer'}}>
                    <Icon className='icondetail-backhome' path={mdiArrowLeft} size={1} />
                    <p className='pdetail-backhome' >/Juegos de Sabanas/<b>Egyptian Cotton</b></p>
                </div>
            </div>  

            <div className='itemDetail'>

                <div className='imgDetail'>
                    <CarouselProduct img={product.img} ></CarouselProduct>
                </div>

                <div className='contentDetail'>
                    <p className='contentDetail-Title'>{product.title}</p>
                    <p className='contentDetail-Price'>{formatter.format(precio)}</p>

                    <div className='itemPrice'>
                        <Form>

                            <div key='default-radio' >
                                <Form.Check
                                    label={`Deposito / Transferencia - ${formatter.format(payment.transferencia * precio)}`}
                                    name="group1"
                                    type='radio'
                                    id='default-radio-1'
                                    
                                    
                                />
                                <hr></hr>
                                <Form.Check

                                    label={`Tarjeta de Débito - ${formatter.format(payment.tarjeta * precio)}`}
                                    name="group1"
                                    type='radio'
                                    id='default-radio-2'
                                />
                                                                <hr></hr>
                                <Form.Check

                                    label={`Tarjeta de Crédito - ${formatter.format(payment.tarjeta * precio)}`}
                                    name="group1"
                                    type='radio'
                                    id='default-radio-2'
                                />
                            </div>

                        </Form>

                    </div>

                    <div className='itemSize'>
                        <div className='itemSize-Select'>
                            <p>Medida:</p>
                            <select onChange={handleChange}>
                            {product.medida.map(med => (
                                <option value={med}>{med.toUpperCase()}</option>
                            ))}
                            </select>
                        </div>
                        <div className='itemSize-description'>
                            {indexsize.map(sd => (
                                <p>- {sd}</p>
                            ))}

                        </div>
                    </div>

                    <div className='itemColor'>
                        <p>Color: <b>{colour.toUpperCase()} </b></p>
                        {product.color.map(col => (
                            <button onClick={() => handleColour(col)} className={`btn-color btn-color-${col}`}></button>
                        ))}
                    </div>




                    <div>
                        <div className='itemCount'>
                            <button onClick={handleSubstract}> - </button>
                            <p>{count}</p>
                            <button onClick={handleAdd}> + </button>
                        </div>

                        <div>
                            <button onClick={() => onAddToCart(count, size, colour, precio)} className='addCart'>AGREGAR AL CARRO</button>
                        </div>


                    </div>
                </div>


            </div>
        </div>

    )
}

export default ItemDetail