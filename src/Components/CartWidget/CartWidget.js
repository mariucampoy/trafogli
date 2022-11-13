import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import cartContext from '../../Context/CartContext'
import "./cartWidget.css"

function CartWidget() {
  const context = useContext(cartContext)

  return (
    <div className='container-cart'>
    <Link to={"/cart"}>
     <i class="fa-solid fa-cart-shopping cart"></i>
     </Link>
     <p>{context.totalItemsInCart()}</p>
    </div>
  )
}

export default CartWidget