import Carousel from 'react-bootstrap/Carousel';



function CarouselProduct(props) {
    return (
        <Carousel>


            {props.img.map(image => (

                <Carousel.Item>
                    <img
                        className="d-block w-50"
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