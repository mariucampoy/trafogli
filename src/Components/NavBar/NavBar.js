import React from 'react'
import { Link } from 'react-router-dom'
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


        <Link to="/">
        <img className='logo' src='/img/logo.jpg' alt='logo' />
        </Link>

        <FlexWrapper>
          <a className='a-small' href='#'>CREAR CUENTA</a>
          <p>|</p>
          <a className='a-small' href='#'>INICIAR SESIÓN</a>
          <CartWidget />
        </FlexWrapper>

      </FlexWrapper>

      <FlexWrapper>

        <Link className='a-large' to='/category/Edredon'>EDREDÓN</Link>
        <Link className='a-large' to='/category/Sabanas'>SÁBANAS</Link>
        <Link className='a-large' to='/category/Fundas'>FUNDA ALMOHADA</Link>
        <Link className='a-large' to='/category/Mantas'>MANTAS</Link>
        <Link className='a-large' to='/category/Kimonos'>KIMONOS</Link>

      </FlexWrapper>


    </>
  )
}

export default NavBar