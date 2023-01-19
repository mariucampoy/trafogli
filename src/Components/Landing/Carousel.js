import Carousel from 'react-bootstrap/Carousel';
import "./landing.css"


function CarouselBoostrap() {
    return (
        <Carousel className='carousel-landing'>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/carousel3.webp"
                    alt="First slide"
                />
                <Carousel.Caption>
                    {/* <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/carousel2.webp"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    {/* <h3>Second slide label</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/carousel1.webp"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    {/* <h3>Third slide label</h3>
                      <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/img/carousel4.webp"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    {/* <h3>Third slide label</h3>
                      <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p> */}
                </Carousel.Caption>
            </Carousel.Item>





        </Carousel>
    );
}

export default CarouselBoostrap;