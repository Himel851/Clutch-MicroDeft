import React from 'react'
import style from './Experience.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { AiFillStar } from 'react-icons/ai'
import handshake from '../../images/handshake.jpg'
import Image from 'next/image'
import teach from '../../images/teach.jpg'
const Experience = () => {
    return (
        <div>
            <div className={style.experience}>
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <AiFillStar className={style.star} />
                                <AiFillStar className={style.star} />
                                <AiFillStar className={style.star} />
                                <AiFillStar className={style.star} />
                                <AiFillStar className={style.star} />
                            </div>
                            <h1>Share your experience and make B2B buying more transparent</h1>
                            <p>Leave a review of the business partners you’ve worked with over the years. Make your voice heard and help other business leaders make a confident choice.</p>
                            <button>Write a Review</button>

                        </Col>
                        <Col>
                            <Image src={handshake} className={style.img} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={style.service}>
                <Container>
                    <Row>
                        <Col>
                        <Image src={teach} className={style.teachImg} />
                        </Col>
                        <Col>
                        <div className={style.right}>
                            <h4>Selling B2B Services?</h4>
                            <h1>Connect with your next client on Clutch</h1>
                            <p>Get in front of millions of active B2B buyers worldwide inside the leading global business services marketplace. </p>
                            <button>Write a Review</button>
                            <p>Already have a profile? Ask your clients to leave a review.</p>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
}

export default Experience