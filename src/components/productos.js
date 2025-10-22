import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Productos() {
    return (
        <div className='container mt-3'>
            <div className='row mt-3'>
                <div className='col-lg-4 d-flex justify-content-center'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/cpu-nasa.webp"/>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4 d-flex justify-content-center'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/ram.webp" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-lg-4 d-flex justify-content-center'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/ssd_kingston.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );

}

export default Productos;