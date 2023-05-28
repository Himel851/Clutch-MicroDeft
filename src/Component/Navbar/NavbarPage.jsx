import React from 'react'
import style from './Navbar.module.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Link from 'next/link';

const NavbarPage = () => {
    return (
        <div className={style.navbarPage}>
            <Navbar  variant="dark" style={{ backgroundColor: '#17313b' }} expand="lg" fixed="top" >
                <Container >
                    <Navbar.Brand>
                        <Link href='/' className='text-white nav-link arrow-none fw-bold'>
                            <h1>Clutch</h1>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: 'auto' }}
                            navbarScroll
                        >

                        </Nav>
                        <Link href="" className="text-white nav-link arrow-none fw-bold me-2" >Services</Link>
                        <Link href="/resources" className="text-white nav-link arrow-none fw-bold me-5" >Resources</Link>
                        <Link href="/login">
                            <Button variant="outline-light" className="me-2 text-white"  >
                                Login
                            </Button>
                        </Link>
                        <Link href="/sign-up">
                            <Button variant="success">
                                Sign Up
                            </Button>
                        </Link>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarPage