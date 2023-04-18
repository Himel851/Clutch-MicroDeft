import React from 'react'
import style from './Project.module.scss'
import { Button, Col, Container, Row } from 'react-bootstrap'
import logo1 from '../../images/logo1.PNG'
import Image from 'next/image'

const Project = () => {
    return (
        <div className={style.project}>
            <h1>The perfect partner for any project</h1>
            <p>Whatever your business challenge, browse our most in-demand service categories to find top-ranked companies in over 1,200 specialized service lines.</p>

            <div>
                <Container>
                    <Row>
                        <Col className={style.col}>
                            <div className='d-flex gap'>
                                <Image src={logo1} style={{ marginRight: '20px' }} />
                                <h2 >Development</h2>
                            </div>
                            <ul>
                                <li>Mobile App Development</li>
                                <li>Software Development</li>
                                <li>Web Development</li>
                                <li>AR/VR</li>
                                <li>Artificial Intelligence</li>
                                <li>Blockchain</li>
                            </ul>
                        </Col>
                        <Col className={style.col}>
                            <div className='d-flex gap'>
                                <Image src={logo1} style={{ marginRight: '20px' }} />
                                <h2 >Development</h2>
                            </div>
                            <ul>
                                <li>Mobile App Development</li>
                                <li>Software Development</li>
                                <li>Web Development</li>
                                <li>AR/VR</li>
                                <li>Artificial Intelligence</li>
                                <li>Blockchain</li>
                            </ul>
                        </Col>
                        <Col className={style.col}>
                            <div className='d-flex gap'>
                                <Image src={logo1} style={{ marginRight: '20px' }} />
                                <h2 >Development</h2>
                            </div>
                            <ul>
                                <li>Mobile App Development</li>
                                <li>Software Development</li>
                                <li>Web Development</li>
                                <li>AR/VR</li>
                                <li>Artificial Intelligence</li>
                                <li>Blockchain</li>
                            </ul>
                        </Col>
                        <Col className={style.col}>
                            <div className='d-flex gap'>
                                <Image src={logo1} style={{ marginRight: '20px' }} />
                                <h2 >Development</h2>
                            </div>
                            <ul>
                                <li>Mobile App Development</li>
                                <li>Software Development</li>
                                <li>Web Development</li>
                                <li>AR/VR</li>
                                <li>Artificial Intelligence</li>
                                <li>Blockchain</li>
                            </ul>
                        </Col>
                        <Col className={style.col}>
                            <div className='d-flex gap'>
                                <Image src={logo1} style={{ marginRight: '20px' }} />
                                <h2 >Development</h2>
                            </div>
                            <ul>
                                <li>Mobile App Development</li>
                                <li>Software Development</li>
                                <li>Web Development</li>
                                <li>AR/VR</li>
                                <li>Artificial Intelligence</li>
                                <li>Blockchain</li>
                            </ul>
                        </Col>
                        <Col className={style.col}>
                            <div className='d-flex gap'>
                                <Image src={logo1} style={{ marginRight: '20px' }} />
                                <h2 >Development</h2>
                            </div>
                            <ul>
                                <li>Mobile App Development</li>
                                <li>Software Development</li>
                                <li>Web Development</li>
                                <li>AR/VR</li>
                                <li>Artificial Intelligence</li>
                                <li>Blockchain</li>
                            </ul>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-center">
                        <button>Browe All Services</button>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Project