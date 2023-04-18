import React from 'react'
import style from './Payment.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image';
import pic1 from '../../images/pic1.webp'
import pic2 from '../../images/pic2.webp'
import pic3 from '../../images/pic3.webp'
import pic4 from '../../images/pic4.webp'
import pic5 from '../../images/pic5.webp'
import pic6 from '../../images/pic6.webp'
import circle from '../../images/circle.webp'



const Payment = () => {
    return (
        <div className={style.payment}>
            <h1 className='text-center'>Join 1.3+ Million leaders who use Clutch each month <br /> to connect with a trusted business partner</h1>
            <p className='text-center'>Explore our marketplace and you’ll quickly find why business leaders choose us again and again.</p>
            <div className={style.logo}>
                <Container>
                    <Row>
                        <Col className={style.col}>
                            <Image src={pic1} />
                        </Col>
                        <Col className={style.col}>
                            <Image src={pic2} />
                        </Col>
                        <Col className={style.col}>
                            <Image src={pic3} />
                        </Col>
                        <Col className={style.col}>
                            <Image src={pic4} />
                        </Col>
                        <Col className={style.col}>
                            <Image src={pic5} />
                        </Col>
                        <Col className={style.col}>
                            <Image src={pic6} />
                        </Col>
                    </Row>
                </Container>
                <hr />
            </div>
            <h2 className='text-center'>Clutch made it easy to work with, interview, and select our best match <br /> for a talent agency. It saved our company a large amount of time and <br /> resources.</h2>

            <div className={style.circle}>
                <Image src={circle} />
            </div>

        </div>
    )
}

export default Payment