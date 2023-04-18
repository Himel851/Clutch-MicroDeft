import React from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import { BiSearchAlt2 } from 'react-icons/bi'
import { GrLocation } from 'react-icons/gr'
import style from "./Main.module.scss";
import Image from 'next/image';
import team from '../../images/team.jpg'
const Main = () => {
    return (
        <div className={style.main}>
            <Container>
                <Row className={style.left}>
                    <Col sm={8}>
                        <h1>
                            Hire the right Software Developer company with confidence
                        </h1>
                        <p>
                            Search, find and decide on a service provider in record time. Read verified reviews from real business leaders just like you. Browse 260,000 vetted businesses worldwide.
                        </p>

                        <div className='d-flex'>
                            <InputGroup className={style.group} >
                                <InputGroup.Text id="basic-addon1" >
                                    <BiSearchAlt2 />
                                </InputGroup.Text>
                                <Form.Control
                                    placeholder="Search web developers, SEO, UX..."
                                    className="my-input"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />

                            </InputGroup>
                            <InputGroup className={style.group} >
                                <InputGroup.Text id="basic-addon1" >
                                    <GrLocation />
                                </InputGroup.Text>
                                <Form.Control
                                    placeholder="Search"
                                    className="my-input"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />

                            </InputGroup>
                            <Button>
                                Get Started
                            </Button>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Image src={team} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main