import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function BannerPrincipal() {
    return (
        <div className='row mt-3 container-fluid'>
            <div className='container-fluid p-0 mt-3'>
                <Image src="https://static.vecteezy.com/system/resources/previews/000/677/302/non_2x/abstract-technology-banner-background.jpg" fluid className='w-100 d-block' />
            </div>
        </div>

    );
}

export default BannerPrincipal;