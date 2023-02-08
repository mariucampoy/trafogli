import React from 'react'
import { Link } from 'react-router-dom'
import CarouselBoostrap from './Carousel'
import CategoryItem from './CategoryItem'
import "./landing.css"


function Landing() {
    return (
        <div>
            <CarouselBoostrap />

            <div className='container-categoryItem'>
                <CategoryItem link="/category/Edredon" title="Edredón" text="Edredón" img="/img/category-edredon.jpeg"></CategoryItem>
                <CategoryItem link="/category/Sabanas" title="Sábanas" text="Sábanas" img="/img/category-sabanas.jpeg"></CategoryItem>
                <CategoryItem link="/category/Fundas" title="Funda Almohada" text="Fundas" img="/img/category-funda.jpeg"></CategoryItem>
            </div>

            <div className='container-categoryItem'>
                <CategoryItem link="/category/Mantas" title="Mantas" text="Mantas" img="/img/category-mantas.jpeg"></CategoryItem>
                <CategoryItem link="/category/Kimonos" title="Kimonos" text="Kimonos" img="/img/category-kimono.jpeg"></CategoryItem>
            </div>

            <Link to="/productos">
            <div className='container-ver-productos'>
                <button className='btn-ver-productos'>VER TODOS LOS PRODUCTOS</button>
            </div>
            </Link>

            <div className='container-nuestro-compromiso'>
                <img className='img-nuestro-compromiso' src="/img/img-home.webp" ></img>
            </div>

            <div className='container-envio-compra'>
                <img className='img-envio-compra' src="/img/banner-footer-home.png" ></img>
            </div>

        </div>
    )
}

export default Landing