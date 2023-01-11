import Dropdown from 'react-bootstrap/Dropdown';
import React, { useContext } from 'react'
import cartContext from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import "./navBar.css"

function Dropdownboostrap() {

  const { filtrarMedida, filtrarColor, filtrarCategoria } = useContext(cartContext)


  return (
    <Dropdown >
      <Dropdown.Toggle variant="none" size="sm" id="dropdown-basic">
        PRODUCTOS
      </Dropdown.Toggle>

      <Dropdown.Menu>

        <Dropdown.Item as={Link} to="/productos" className='a-large'> VER TODOS</Dropdown.Item>
        <div class="dropdown-divider"></div>
        <Dropdown.Item><Link className='a-large' to='/category/Edredon'>EDREDÓN</Link></Dropdown.Item>
        <Dropdown.Item><Link className='a-large' to='/category/Sabanas'>SÁBANAS</Link></Dropdown.Item>
        <Dropdown.Item><Link className='a-large' to='/category/Fundas'>FUNDA ALMOHADA</Link></Dropdown.Item>
        <Dropdown.Item><Link className='a-large' to='/category/Mantas'>MANTAS</Link></Dropdown.Item>
        <Dropdown.Item><Link className='a-large' to='/category/Kimonos'>KIMONOS</Link></Dropdown.Item>


      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdownboostrap;