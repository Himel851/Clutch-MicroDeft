import React from "react";
import style from "./Main.module.scss";
import { MdOutlineReviews } from 'react-icons/md'
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const Main = () => {
    return (
        <div className={style.main}>
            <div className="d-flex">
                <div className={style.div1}>
                    <p>60,267 Firms</p>{" "}
                </div>
                <div className={style.div2}>
                    <Container>
                        <Row className="justify-content-center align-items-center">
                            <Col xs="auto">
                                <MdOutlineReviews className={style.icon} />
                            </Col>
                        </Row>
                    </Container>
                    <p>Reviews</p>
                </div>
                <div className={style.div2}>
                    <Container>
                        <Row className="justify-content-center align-items-center">
                            <Col xs="auto">
                                <MdOutlineReviews className={style.icon} />
                            </Col>
                        </Row>
                    </Container>
                    <p>Reviews</p>
                </div>
                <div className={style.div2}>
                    <Container>
                        <Row className="justify-content-center align-items-center">
                            <Col xs="auto">
                                <MdOutlineReviews className={style.icon} />
                            </Col>
                        </Row>
                    </Container>
                    <p>Reviews</p>
                </div>
                <div className={style.div2}>
                    <Container>
                        <Row className="justify-content-center align-items-center">
                            <Col xs="auto">
                                <MdOutlineReviews className={style.icon} />
                            </Col>
                        </Row>
                    </Container>
                    <p>Reviews</p>
                </div>
                <div className={style.input}>
                    <InputGroup >
                        <InputGroup.Text id="basic-addon1">Sort By</InputGroup.Text>
                        <Form.Select aria-label="Default select example" style={{ width: "180px" }}>
                            <option>Sponsored</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </InputGroup>

                </div>
            </div>
        </div>
    );
};

export default Main;
