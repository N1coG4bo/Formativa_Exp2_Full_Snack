import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function BannerPrincipal() {
    return (
        <div className='row mt-3'>
            <div className='col-lg-12'>
                <Carousel fade>
                    <Carousel.Item>
                        <img src="https://static.vecteezy.com/system/resources/previews/000/677/302/non_2x/abstract-technology-banner-background.jpg" alt="Banner" className="d-block w-100" />
                        <Carousel.Caption>
                            <h3>Banner principal</h3>
                            <p>Este es el banner principal de la página.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    );
}

export default BannerPrincipal;