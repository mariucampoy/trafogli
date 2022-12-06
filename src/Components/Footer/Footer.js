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

            <div>
                <h4>Medios de pago</h4>
            </div>

            <div>
                <div>
                    <h4>Contactanos</h4>
                    <ul>
                        <li><a href="tel:+54 11 3850 1171">+54 11 3850 1171</a></li>
                        <li><a href="mailto:info@trafogli.com">info@trafogli.com</a></li>
                        <li>Belgrano-CABA</li>
                    </ul>
                </div>
            </div>

            <div>
            <h4>Redes Sociales</h4>
            </div>

            <div>
            <h4>Newsletter</h4>
            </div>


        </div>
    )
}

export default Footer