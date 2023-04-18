import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import logo from '../../images/e25media_sq1x.png'
import style from './award.module.scss'
import { Nav } from 'react-bootstrap';
import Section1 from '../Section1/Section1';
import Section3 from '../Section3/Section3';
import { AiOutlineGlobal, AiFillInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import Section4 from '../Section4/Section4';
import Section5 from '../Section5/Section5';
import Section2 from '../Section2/Section2';

const Award1 = () => {
    return (
        <div className={style.award}>
            <Container>
                <Row>
                    <Col sm={5} className={style.col1}>
                        <div className='d-flex gap-5'>
                            <Image src={logo} />
                            <h1>EIGHT25MEDIA</h1>
                        </div>
                    </Col>
                    <Col sm={7} className={style.col2}>
                        <Nav className="mr-auto">
                            <Nav.Link href="#section1" className={style.btn}>Summary</Nav.Link>
                            <Nav.Link href="#section2" className={style.btn}>Focus</Nav.Link>
                            <Nav.Link href="#section3" className={style.btn}>Portfolio</Nav.Link>
                            <Nav.Link href="#section4" className={style.btn}>Reviews</Nav.Link>
                            <Nav.Link href="#section5" className={style.btn2}>Verification</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
            <div>
                <div id="section1">
                    <Section1 />
                </div>

                <div id="section2">
                   <Section2 />
                </div>

                <div id="section3">
                    <Section3 />
                </div>

                <div id="section4">
                   <Section4 />
                </div>

                <div id="section5">
                    <Section5 />
                </div>
            </div>
            <div className={style.fixedCard}>
                <button>
                    Visit Website <AiOutlineGlobal />
                </button>
                <button>
                    Visit Website <AiOutlineGlobal />
                </button>
                <button>
                    Visit Website <AiOutlineGlobal />
                </button>
                <button>
                    Visit Website <AiOutlineGlobal />
                </button>

                <div className='p-5'>
                    <BsFacebook style={{ fontSize: '40px' }} />
                    <AiFillInstagram style={{ fontSize: '40px', marginLeft: '5px' }} />
                </div>
            </div>
        </div>
    )
}

export default Award1