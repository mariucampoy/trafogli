import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'


import "./navBar.css"

function NavBar() {


  return (
    <div className='navBar'>

    <div className='promocion'>
    Hasta 3 cuotas sin interés - 20% de descuento por transferencia bancaria - Envíos gratis.
    </div>

      <div className='sub-navbar'>

        <p className='buscar'> Buscar...
        <i class="fa-solid fa-magnifying-glass"></i>
        </p>


        <Link to="/">
        <div className='container-logo'>
        <img className='logo' src='/img/logo.jpg' alt='logo' />
        </div>
        </Link>

        <div className='container-inicio-sesion'>
          <a className='a-small' href='#'>CREAR CUENTA |</a>
          <a className='a-small' href='#'>INICIAR SESIÓN</a>
          <CartWidget />
        </div>

      </div>

      <div className='container-categorias'>

        <Link className='a-large' to='/category/Edredon'>EDREDÓN</Link>
        <Link className='a-large' to='/category/Sabanas'>SÁBANAS</Link>
        <Link className='a-large' to='/category/Fundas'>FUNDA ALMOHADA</Link>
        <Link className='a-large' to='/category/Mantas'>MANTAS</Link>
        <Link className='a-large' to='/category/Kimonos'>KIMONOS</Link>

      </div>


    </div>
  )
}

export default NavBar