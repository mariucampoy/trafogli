import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import cartContext from '../../Context/CartContext'
import "./dropdownbutton.css"



function DropDownButton() {



    const [open, setOpen] = useState(false);

    const navigate = useNavigate()

    const { filtrarCategoria } = useContext(cartContext)

    function handleOpen() {
        setOpen(!open);
    };


    const handleMenuVerTodos = () => {
        filtrarCategoria('')
        setOpen(false)
        navigate("/productos");
    };

    const handleMenuEdredon = () => {

        filtrarCategoria('Edredon')
        setOpen(false)
        navigate("/productos")
    };


    const handleMenuSabanas = () => {

        filtrarCategoria('Sabanas')
        setOpen(false)
        navigate("/productos")
    };

    const handleMenuFundas = () => {

        filtrarCategoria('Fundas')
        setOpen(false)
        navigate("/productos")
    };

    const handleMenuMantas = () => {

        filtrarCategoria('Mantas')
        setOpen(false)
        navigate("/productos")
    };

    const handleMenuKimonos = () => {

        filtrarCategoria('Kimonos')
        setOpen(false)
        navigate("/productos")
    };



    return (

        <div>
            <button className='menutitle a-large' onClick={() => handleOpen()}>PRODUCTOS</button>
            {open ? (
                <ul className="menu">
                    <li className="menu-item">
                        <button onClick={handleMenuVerTodos}>Ver Todos</button>
                    </li>
                    <div className="dropdown-divider"></div>

                    <li className="menu-item">
                        <button onClick={handleMenuEdredon}>Edredon</button>
                    </li>
                    <li className="menu-item">
                        <button onClick={handleMenuSabanas}>Sabanas</button>
                    </li>
                    <li className="menu-item">
                        <button onClick={handleMenuFundas}>Fundas</button>
                    </li>
                    <li className="menu-item">
                        <button onClick={handleMenuMantas}>Mantas</button>
                    </li>
                    <li className="menu-item">
                        <button onClick={handleMenuKimonos}>Kimonos</button>
                    </li>
                </ul>
            ) : null}
        </div>

    )
}

export default DropDownButton;