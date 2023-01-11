import Carousel from 'react-bootstrap/Carousel';
import "./itemDetail.css"



function CarouselProduct(props) {
    return (
        <Carousel className='carousel-product'>


            {props.img.map(image => (

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt="product-img"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>




            ))}



        </Carousel>
    );
}

export default CarouselProduct;