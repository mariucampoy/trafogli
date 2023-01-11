import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import cartContext from '../../Context/CartContext'
import {createBuyOrderFirestoreWithStock} from "../../services/firebase"
import swal from 'sweetalert';
import BuyForm from "./BuyForm";
import "./cart.css"





function Cart() {

    const { cart, removeItem, totalPriceInCart, clear } = useContext(cartContext)
    const navigate = useNavigate()

    if (cart.length === 0 ) return <h4 className='carrito-vacio'>EL CARRITO DE COMPRAS ESTÁ VACÍO.</h4>

    function createBuyOrder(userData){

        const buyData = {
            buyer: userData,
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
                        <img src={item.img[0]}></img>
                    </div>

                    <div className='cart-detail'>
                        <p>{item.title}</p>
                        <p>Precio: $ {item.precio}</p>
                        <p>Cantidad: {item.count}</p>
                        <p>Medida: {item.size}</p>
                        <p>Color: {item.colour}</p>
                    </div>

                    <button className='delete-button' onClick={() => removeItem(item.id, item.size, item.colour)}><img className='delete-img' src="/img/delete-button.svg"></img></button>

                </div>


            ))
            }

            <div className='container-subtotal'>
                <p>Subtotal:  ${totalPriceInCart()}</p>
                <BuyForm onSubmit={createBuyOrder} />
            </div>

            <div>

            </div>
        </div>

    )
}

export default Cart