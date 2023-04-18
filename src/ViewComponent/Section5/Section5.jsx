import React from "react";
import style from "./Section.module.scss";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineVerifiedUser } from "react-icons/md";

const Section5 = () => {
    return (
        <div className={style.section5}>
            <Container>
                <Row>
                    <Col sm={6}>
                        <div>
                            <Container>
                                <Row>
                                    <Col>
                                        <h5>
                                            Verification <AiOutlineQuestionCircle />
                                        </h5>
                                    </Col>
                                    <Col>
                                        <button>
                                            {" "}
                                            <MdOutlineVerifiedUser /> GOLD VERIFIED
                                        </button>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        {/* Business Entity  */}
                        <div className={style.form}>
                            <h5 className="mt-5 ">Business Entity</h5>
                        </div>
                        <div className={style.row}>
                            <Container>
                                <Row >
                                    <Col>
                                        <p>BUSINESS ENTITY NAME</p>
                                        <h5>EIGHT25MEDIA</h5>
                                    </Col>
                                    <Col>
                                        <p>SOURCE</p>
                                        <h5>California Secretary of State</h5>
                                    </Col>
                                </Row>
                            </Container>
                            <Container className="mt-4">
                                <Row >
                                    <Col>
                                        <p>STATUS</p>
                                        <h5>ACTIVE</h5>
                                    </Col>
                                    <Col>
                                        <p>LAST UPDATED</p>
                                        <h5>March 23, 2022</h5>
                                    </Col>
                                </Row>
                            </Container>
                            <p className="mt-4">JURISDICTION OF FORMATION</p>
                            <h5>California</h5>
                            <p className="mt-4">ID</p>
                            <h5>C3366373</h5>
                            <p className="mt-4">DATE OF FORMATION</p>
                            <h5>March 13, 2011</h5>
                        </div>

                        {/* Payment & Legal Filings  */}
                        <div className={style.form}>
                            <h5 className="mt-5 ">Payment & Legal Filings</h5>
                        </div>
                        <div className={style.row}>
                            <Container>
                                <Row >
                                    <Col>
                                        <p>BANKRUPTCY</p>
                                        <h5>No</h5>
                                    </Col>
                                    <Col>
                                        <p>SOURCE</p>
                                        <h5>Experian</h5>
                                        <span className="text-danger">FULL BUSINESS CREDIT REPORT</span>
                                    </Col>
                                </Row>
                            </Container>
                            <Container className="mt-4">
                                <Row >
                                    <Col>
                                        <p>TAX LIEN FILINGS</p>
                                        <h5>1</h5>
                                    </Col>
                                    <Col>
                                        <p>LAST UPDATED</p>
                                        <h5>March 23, 2022</h5>
                                    </Col>
                                </Row>
                            </Container>
                            <p className="mt-4">JUDGEMENT FILINGS</p>
                            <h5>0</h5>
                            <p className="mt-4">ID</p>
                            <h5>C3366373</h5>
                            <p className="mt-4">COLLECTIONS COUNT</p>
                            <h5>0</h5>
                        </div>
                    </Col>
                    <Col sm={6}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Section5;
