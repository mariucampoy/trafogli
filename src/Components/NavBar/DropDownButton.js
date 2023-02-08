import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import cartContext from '../../Context/CartContext'
import "./dropdownbutton.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



function DropDownButton() {

    const navigate = useNavigate()

    const { filtrarCategoria, filteredCategory, } = useContext(cartContext)

    const handleMenuVerTodos = () => {
        filtrarCategoria('')
        navigate("/productos");
    };

    const handleMenuEdredon = () => {
        filtrarCategoria('Edredon')
        navigate("/productos")
    };


    const handleMenuFundasEdredon = () => {
        filtrarCategoria('Fundas de Edredón')
        navigate("/productos")
    };


    const handleMenuSabanas = () => {
        navigate("/productos")
        filtrarCategoria('Sabanas')
    };

    const handleMenuSabanaAjustable = () => {
        navigate("/productos")
        filtrarCategoria('Sabanas Ajustables')
    };

    const handleMenuFundas = () => {
        filtrarCategoria('Fundas')
        navigate("/productos")
    };

    const handleMenuMantas = () => {
        navigate("/productos")
        filtrarCategoria('Mantas')
    };

    const handleMenuKimonos = () => {
        navigate("/productos")
        filtrarCategoria('Kimonos')
    };



    return (

        <div>

            <DropdownButton id="dropdown-item-button" title="PRODUCTOS">

                <Dropdown.Item as="button" className='dropdown-category' onClick={handleMenuVerTodos}>Ver Todos</Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item as="button" className='dropdown-category' onClick={handleMenuEdredon}>Edredón</Dropdown.Item>
                <Dropdown.Item as="button" className='dropdown-category' onClick={handleMenuFundasEdredon}>Fundas Edredón</Dropdown.Item>
                <Dropdown.Item as="button" className='dropdown-category' onClick={handleMenuSabanas}>Juego de Sabanas</Dropdown.Item>
                <Dropdown.Item as="button" className='dropdown-category' onClick={handleMenuSabanaAjustable}>Sabanas Ajustables</Dropdown.Item>
                <Dropdown.Item as="button" className='dropdown-category' onClick={handleMenuFundas}>Fundas</Dropdown.Item>
                <Dropdown.Item as="button" className='dropdown-category' onClick={handleMenuMantas}>Mantas</Dropdown.Item>
                <Dropdown.Item as="button" className='dropdown-category' onClick={handleMenuKimonos}>Kimonos</Dropdown.Item>

            </DropdownButton>

        </div>

    )
}

export default DropDownButton;