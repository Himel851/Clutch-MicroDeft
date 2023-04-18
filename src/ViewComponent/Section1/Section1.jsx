import React from 'react'
import style from './Section.module.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillStar, AiOutlineRight } from 'react-icons/ai'
import { GoVerified } from 'react-icons/go'
import { ImLocation2 } from 'react-icons/im'
import Image from 'next/image';
import map from '../../images/map.png'
import Multiple from './Multiple';


const Section1 = () => {
    return (
        <div className={style.section1}>
            <Container>
                <Row>
                    <Col sm={5} className={style.col1}>
                        <h5>Award Winning Firm with 750+ Clients</h5>
                        <div className='d-flex'>
                            <h5>4.9</h5>
                            <div className='p-2'>
                                <AiFillStar className={style.star} />
                                <AiFillStar className={style.star} />
                                <AiFillStar className={style.star} />
                                <AiFillStar className={style.star} />
                                <AiFillStar className={style.star} />
                            </div>
                            <h6 style={{ color: 'red' }} className='p-3'>25 REVIEWS <AiOutlineRight /> </h6>
                        </div>
                        <p>In 2017, EIGHT25MEDIA was voted the #1 best web design <br /> firm in the Silicon Valley.</p>
                        <button>READ MORE..</button>
                    </Col>
                    <Col sm={3} className={style.col2}>
                        <ul style={{ listStyle: "none", padding: "20px" }}>
                            <li style={{ border: "none", color: "red" }}>
                                <GoVerified style={{ marginRight: "10px" }} />
                                Verified</li>
                            <li style={{ border: "none" }}>
                                <GoVerified style={{ marginRight: "10px" }} />
                                List item 2</li>
                            <li style={{ border: "none" }}>
                                <GoVerified style={{ marginRight: "10px" }} />
                                List item 3</li>
                            <li style={{ border: "none" }}>
                                <GoVerified style={{ marginRight: "10px" }} />
                                List item 4</li>
                            <li style={{ border: "none" }}>
                                <GoVerified style={{ marginRight: "10px" }} />
                                List item 5</li>
                        </ul>
                    </Col>
                    <Col sm={4} className={style.col3}>
                        <div className={style.div}>
                            <ImLocation2 /> San Jose, CA <button>Show All</button>
                        </div>
                        <Image src={map} className={style.img} />
                    </Col>
                </Row>
            </Container>
            <div className={style.feature}>
                <div className={style.title}>
                    <span>Featured Review</span>
                    Content Hub for Coworking & Real Estate Company
                </div>
                <Multiple />
            </div>
        </div>
    )
}

export default Section1