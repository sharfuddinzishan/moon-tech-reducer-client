import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaHome, FaOpencart, FaPhabricator, FaPlus } from 'react-icons/fa'

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='text-decoration-none text-primary fw-bold fs-2' to="/"><FaHome /> Home</Link>
                        </Nav>
                        <div className="d-flex">
                            <Link className='text-decoration-none text-muted me-3' to="/add-product"><FaPlus /> Add Product</Link>
                            <Link className='text-decoration-none text-muted me-3' to="/features"><FaPhabricator /> Top Rated</Link>
                            <Link className='text-decoration-none text-muted me-3' to="/cart"><FaOpencart /> Cart</Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;