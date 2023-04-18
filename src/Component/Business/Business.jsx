import React from 'react'
import style from './Business.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'
import img1 from '../../images/overview.PNG'

const Business = () => {
    return (
        <div className={style.business}>
            <h1 className='text-center'>Your one-stop-shop for better business decisions</h1>
            <p className='text-center'>Tools for you, no matter where you are in your research process.</p>

            <div>
                <Container>
                    <Row>
                        <Col className={style.col}>
                            <h3>Search</h3>
                            <h2>Browse 260k service provides</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores accusantium obcaecati adipisci fuga perferendis ipsam ad debitis similique magni alias?</p>
                            <Image src={img1}  className={style.img} />
                        </Col>
                        <Col className={style.col}>
                            <h3>Search</h3>
                            <h2>Browse 260k service provides</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores accusantium obcaecati adipisci fuga perferendis ipsam ad debitis similique magni alias?</p>
                            <Image src={img1}  className={style.img} />

                            
                        </Col>
                        <Col className={style.col}>
                            <h3>Search</h3>
                            <h2>Browse 260k service provides</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores accusantium obcaecati adipisci fuga perferendis ipsam ad debitis similique magni alias?</p>
                            <Image src={img1}  className={style.img} />

                        </Col>
                       
                    </Row>

                </Container>
            </div>
        </div>
    )
}

export default Business