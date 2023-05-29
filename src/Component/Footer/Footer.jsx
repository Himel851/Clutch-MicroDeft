import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./footer.module.scss";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter, BsInstagram, BsYoutube, BsLinkedin } from 'react-icons/bs'
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <Container fluid className="text-center">
                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <h5 className={style.clutch}>Clutch</h5>
                        <ul className="list-unstyled">
                            <li>
                                1800 Massachusetts Ave, NW <br /> Washington, DC 20036
                            </li>
                            <li>Site Feedback</li>
                            <li>
                                <Link
                                    href="/contact-us"
                                    style={{ textDecoration: "none", color: "inherit" }}
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <h5 className={style.h5}>About Clutch</h5>
                        <ul className="list-unstyled">
                            <li>Our Story</li>
                            <li>Careers</li>
                            <li>News & Press</li>
                            <li>Research Methodology</li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <h5 className={style.h5}>Buyers</h5>
                        <ul className="list-unstyled">
                            <li>Browse All Directories</li>
                            <li>Review Service Providers</li>
                            <li>Review to Donate</li>
                            <li>Blog & Industry Surveys</li>
                            <li>Concierge Service</li>
                            <li>Buyer FAQs</li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <h5 className={style.h5}>Service Providers</h5>
                        <ul className="list-unstyled">
                            <li>Service Provider Guide</li>
                            <li>Get Listed</li>
                            <li>Get Noticed</li>
                            <li>Marketing Opportunities</li>
                            <li>Service Provider FAQs</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <hr />
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <Nav className="justify-content-start">
                                <NavItem>
                                    <Nav.Link href="#" className="text-dark">Privacy Policy</Nav.Link>
                                </NavItem>
                                <NavItem>
                                    <Nav.Link href="#" className="text-dark">Terms of Service</Nav.Link>
                                </NavItem>
                                <NavItem>
                                    <Nav.Link href="#" className="text-dark">We updated our Terms of Service on Aug 4, 2022.</Nav.Link>
                                </NavItem>
                                <NavItem>
                                    <Nav.Link href="#" className="text-dark">©2023 Clutch.co. All rights reserved.</Nav.Link>
                                </NavItem>
                            </Nav>
                        </div>
                        <div className="col-sm-3">
                            <Nav className="justify-content-end">
                                <NavItem>
                                    <Nav.Link href="#" className="text-dark">
                                        <FaFacebookF />
                                    </Nav.Link>
                                </NavItem>
                                <NavItem>
                                    <Nav.Link href="#" className="text-dark">
                                        <BsTwitter />
                                    </Nav.Link>
                                </NavItem>
                                <NavItem>
                                    <Nav.Link href="#" className="text-dark">
                                        <BsInstagram />
                                    </Nav.Link>
                                </NavItem>
                                <NavItem>
                                    <Nav.Link href="#" className="text-dark">
                                        <BsYoutube />
                                    </Nav.Link>
                                </NavItem>
                                <NavItem>
                                    <Nav.Link href="#" className="text-dark">
                                        <BsLinkedin />
                                    </Nav.Link>
                                </NavItem>
                            </Nav>
                        </div>
                    </div>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;
