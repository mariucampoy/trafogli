import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import FlexWrapper from "../FlexWrapper/FlexWrapper"

import "./navBar.css"

function NavBar() {


  return (
    <>

    <div className='promocion'>
    Hasta 3 cuotas sin interés - 20% de descuento por transferencia bancaria - Envíos gratis.
    </div>

      <FlexWrapper>

        <p> Buscar...
        <i class="fa-solid fa-magnifying-glass"></i>
        </p>



        <img className='logo' src='./img/logo.jpg' alt='logo' />

        <FlexWrapper>
          <a className='a-small' href='#'>CREAR CUENTA</a>
          <p>|</p>
          <a className='a-small' href='#'>INICIAR SESIÓN</a>
          <CartWidget />
        </FlexWrapper>

      </FlexWrapper>

      <FlexWrapper>

        <a className='a-large' href='#'>EDREDÓN</a>
        <a className='a-large' href='#'>SÁBANAS</a>
        <a className='a-large' href='#'>FUNDA ALMOHADA</a>
        <a className='a-large' href='#'>MANTAS</a>
        <a className='a-large' href='#'>KIMONOS</a>

      </FlexWrapper>


    </>
  )
}

export default NavBar