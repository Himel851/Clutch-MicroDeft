import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiOutlineThunderbolt, AiFillStar } from 'react-icons/ai'
import { BsPersonDown } from 'react-icons/bs'
import style from './Section.module.scss'

const Multiple = () => {
    return (
        <Container>
            <Row>
                <Col sm={4} className={style.featureCol1}>
                    <div className={style.div1}>
                        <p>THE PROJECT</p>
                        <div><AiOutlineThunderbolt /> Web Development</div>
                        <div><AiOutlineThunderbolt /> &euro;50,000 to &euro;199,999</div>
                        <div className='pb-5'><AiOutlineThunderbolt /> Apr. - July 2019</div>
                    </div>
                    <div className={style.div2}>
                        <p>Project summary: </p>
                        <h6>EIGHT25MEDIA designed and developed a corporate content blog from scratch.</h6>
                    </div>
                </Col>
                <Col sm={6} className={style.featureCol2}>
                    <Container>
                        <Row>
                            <Col sm={6} className={style.col1}>
                                <p>THE REVIEW</p>
                                <h6>"The team did what they were asked to do and more."</h6>
                                <p>AUG 4, 2020</p>
                            </Col>
                            <Col sm={6} className={style.col2}>
                                <div className={style.next}>
                                    <h5>5.0</h5>
                                    <div className='p-2'>
                                        <AiFillStar className={style.star} />
                                        <AiFillStar className={style.star} />
                                        <AiFillStar className={style.star} />
                                        <AiFillStar className={style.star} />
                                        <AiFillStar className={style.star} />
                                    </div>
                                </div>
                                <div className={style.list}>
                                    <Container>
                                        <Row>
                                            <Col sm={10}>Quality:</Col>
                                            <Col sm={2}>5.0</Col>
                                        </Row>
                                        <Row>
                                            <Col sm={10}>Schedule:</Col>
                                            <Col sm={2}>5.0</Col>
                                        </Row>
                                        <Row>
                                            <Col sm={10}>Cost:</Col>
                                            <Col sm={2}>4.5</Col>
                                        </Row>
                                        <Row>
                                            <Col sm={10}>Willing to refer:</Col>
                                            <Col sm={2}>5.0</Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <p>Feedback summary:</p>
                            <p>EIGHT25MEDIA delivered a visually appealing, functional, and user-friendly website that was met with a positive response. It resulted in increased visits and received interest from executive leadership. The team managed the project excellently, and they were an extremely skilled design partner.</p>

                        </Row>
                    </Container>
                    <button>Read Full Review</button>
                </Col>
                <Col sm={2} className={style.featureCol3}>
                    <p>THE REVIEWER</p>
                    <h3>
                        Former Content Marketing Manager, Coworking Company
                    </h3>
                    <BsPersonDown style={{ fontSize: '66px', marginLeft: '15px' }} />
                    <hr />
                    <p>THE PROJECT</p>
                    <div><AiOutlineThunderbolt /> Web Development</div>
                    <div><AiOutlineThunderbolt /> Web Development</div>
                    <div><AiOutlineThunderbolt /> Web Development</div>
                    <div><AiOutlineThunderbolt /> Web Development</div>
                    <div><AiOutlineThunderbolt /> Web Development</div>
                </Col>
            </Row>
        </Container>
    )
}

export default Multiple