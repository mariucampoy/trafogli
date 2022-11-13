import React, { useContext } from 'react'
import cartContext from '../../Context/CartContext'
import "./cart.css"


function Cart() {

    const { cart } = useContext(cartContext)

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
                </div>

            ))

            }
        </div>

    )
}

export default Cart