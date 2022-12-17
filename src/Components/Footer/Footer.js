import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

function Footer() {
    return (
        <div className='container-footer'>

            <div className="footer">
                <h4 className="footer-title">NAVEGACIÓN</h4>
                <ul>
                    <li className="wrap-list-xs">
                        <Link to="/quienes-somos">Quiénes Somos</Link>
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
                <h4>MEDIOS DE PAGO</h4>
            </div>

            <div>
                <div className='footer-contact'>
                    <h4>CONTACTANOS</h4>
                    <ul>
                        <li><a href="tel:+54 11 3850 1171">+54 11 3850 1171</a></li>
                        <li><a href="mailto:info@trafogli.com">info@trafogli.com</a></li>
                        <li>Belgrano-CABA</li>
                    </ul>
                </div>
            </div>

            <div className='social-links'>
            <h4>REDES SOCIALES</h4>
            <h4>NEWSLETTER</h4>
            </div>

        </div>
    )
}

export default Footer