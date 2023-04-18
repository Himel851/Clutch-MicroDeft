import React from 'react'
import style from './Section.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import pic1 from '../../images/portfolio1.png'
import pic2 from '../../images/portfolio2.png'
import pic3 from '../../images/portfolio3.png'
import pic4 from '../../images/portfolio4.png'
import pic5 from '../../images/portfolio5.png'
import pic6 from '../../images/portfolio6.png'

const Section3 = () => {
    return (
        <div className={style.section3}>
            <h4>Portfolio</h4>
            <p>Key clients:  WeWork, Samsung, Hyundai, Skybox Security, Armis, Digital Shadows, Softbank, NBC Universal, Kaiser Permanente, <br /> Machine Zone, NEXTracker, C3 IoT, Elo, Cloudian, TutorSync, and others.</p>
            <Container>
                <Row>
                    <Col sm={4}>
                        <div className={style.inner}>
                            <Image src={pic1} className={style.img} />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className={style.inner}>
                            <Image src={pic2} className={style.img} />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className={style.inner}>
                            <Image src={pic3} className={style.img} />
                        </div>
                    </Col>

                </Row>
                <Row className='mt-4'>
                    <Col sm={4}>
                        <div className={style.inner}>
                            <Image src={pic4} className={style.img} />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className={style.inner}>
                            <Image src={pic5} className={style.img} />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className={style.inner}>
                            <Image src={pic6} className={style.img} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Section3