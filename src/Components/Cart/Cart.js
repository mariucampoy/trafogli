import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import cartContext from '../../Context/CartContext'
import {createBuyOrderFirestoreWithStock} from "../../services/firebase"
import swal from 'sweetalert';
import "./cart.css"





function Cart() {

    const { cart, removeItem, totalPriceInCart, clear } = useContext(cartContext)
    const navigate = useNavigate()

    if (cart.length === 0 ) return <h4>EL CARRITO DE COMPRAS ESTÁ VACÍO.</h4>

    function createBuyOrder(){

        const buyData = {
            buyer: {
                name: "euge",
                telefono: "123",
                email: "mariucampoy@hotmail.com"
            },
            items: cart,
            total: totalPriceInCart(),
            date: new Date(),
        }

        createBuyOrderFirestoreWithStock(buyData).then( orderId => {
            swal("Compra Finalizada con éxito!", `Numero de orden: ${orderId}` , "success");
            clear()
            navigate(`/checkout/${orderId}`)
        })
    }



    return (

        <div>

            {cart.map(item => (

                <div className='cart-container'>
                    <div className='cart-img'>
                        <img src={item.img}></img>
                    </div>

                    <div className='cart-detail'>
                        <p>{item.title}</p>
                        <p>Precio: $ {item.price}</p>
                        <p>Cantidad: {item.count}</p>
                    </div>
                    <button className='delete-button' onClick={removeItem}><img className='delete-img' src="/img/delete-button.svg"></img></button>

                </div>

            ))
            }

            <div>
                <p>Subtotal:</p>
                <p>{totalPriceInCart()}</p>
                <button  onClick={createBuyOrder}>Finalizar compra</button>
            </div>
        </div>

    )
}

export default Cart