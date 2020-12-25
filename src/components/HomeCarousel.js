import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeCarousel.css';

const HomeCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src="https://www.keelingsknowledge.com/wp-content/uploads/2018/12/Keelings-Knowledge-Our-Solution-International-Trading.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Dedicated to promoting U.S. exchange to the world</h1>
                        <p>Dedicated to promoting U.S. exchange to the world</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src="https://www.wallpapertip.com/wmimgs/42-425586_international-business.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src="https://miro.medium.com/max/3840/1*EcunaJNsV2IJy0l8wHse6g.jpeg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HomeCarousel
