import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarPrincipal() {
    return (
        <div className="row mt-3">
            <div className='col-lg-12'>
                <>
                    <Navbar bg="dark" data-bs-theme="dark" className="w-100">
                        <Container fluid>
                            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </>
            </div>
        </div>
    );
}

export default NavbarPrincipal;