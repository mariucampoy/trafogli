import React, { useState ,useContext} from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import cartContext from '../../Context/CartContext'
import Cart from '../Cart/Cart';
import "./cartWidget.css"
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';


function CartWidget() {
  const context = useContext(cartContext)

  const Close = () => context.handleClose();
  const Show = () => context.handleShow();




  return (
    <div className='container-cart'>
      <div onClick={()=>Show()}>
      <Icon path={mdiCartOutline} size={1} />
   
      </div>

      <Offcanvas show={context.show} onHide={()=>Close()} placement={"end"}>
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