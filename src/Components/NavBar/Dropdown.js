import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom'
import "./navBar.css"

function Dropdownboostrap() {
  return (
    <Dropdown >
      <Dropdown.Toggle variant="none" size="sm" id="dropdown-basic">
        PRODUCTOS
      </Dropdown.Toggle>

      <Dropdown.Menu>

        <Dropdown.Item><Link className='a-large' to='/productos'>VER TODOS</Link></Dropdown.Item>
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