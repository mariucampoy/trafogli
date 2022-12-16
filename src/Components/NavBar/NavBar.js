import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import Dropdownboostrap from './Dropdown'


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

      <Link className='a-large' to='/category/Edredon'>QUIÉNES SOMOS</Link>
      <Dropdownboostrap></Dropdownboostrap>
      <Link className='a-large' to='/preguntas-frecuentes'>PREGUNTAS FRECUENTES</Link>
      <Link className='a-large' to='/terminos-y-condiciones'>TÉRMINOS Y CONDICIONES</Link>
      <Link className='a-large' to='/contacto'>CONTACTO</Link>


      </div>


    </div>
  )
}

export default NavBar