import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

function Footer() {
    return (
        <div className='container-footer'>

            <div className="footer">
                <h4 className="footer-title">Navegación</h4>
                <ul>
                    <li className="wrap-list-xs">
                        <Link to="/quienessomos">Quiénes Somos</Link>
                    </li>
                    <li className="wrap-list-xs">
                        <Link to="/productos">Productos</Link>
                    </li>
                    <li className="wrap-list-xs">
                        <Link to="/preguntas-frecuentes">Preguntas Frecuentes</Link>
                    </li>
                    <li className="wrap-list-xs">
                        <Link to="/terminos-y-condiciones">Términos y Condiciones </Link>
                    </li>
                    <li className="wrap-list-xs">
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Footer