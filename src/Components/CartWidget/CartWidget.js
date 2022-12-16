import React, { useState ,useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import cartContext from '../../Context/CartContext'
import Cart from '../Cart/Cart';
import "./cartWidget.css"

function CartWidget() {
  const context = useContext(cartContext)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='container-cart'>
      <div onClick={handleShow}>
      <i class="fa-solid fa-cart-shopping cart"></i>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CARRITO DE COMPRAS</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart></Cart>
        </Offcanvas.Body>
      </Offcanvas>
      <p>{context.totalItemsInCart()}</p>
    </div>
  );
}

export default CartWidget;