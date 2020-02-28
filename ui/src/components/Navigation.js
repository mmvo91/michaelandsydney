import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="sm" bg="secondary" variant="dark" className="sticky-top">
            <Navbar.Brand href="#home" className="px-3">
                {'Michael & Sydney'}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse className="text-center" id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#root">Home</Nav.Link>
                    <Nav.Link href="#about">The Couple</Nav.Link>
                    <Nav.Link href="#wedding">Wedding Party</Nav.Link>
                    <Nav.Link href="#music">Music</Nav.Link>
                    <Nav.Link href="#timeline">Timeline</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Navigation