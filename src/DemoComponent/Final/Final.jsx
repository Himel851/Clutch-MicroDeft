import React from "react";
import style from "./Final.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import demo from "../../images/demoLogo.png";
import { AiFillStar } from "react-icons/ai";
import { BsBagPlus } from "react-icons/bs";
import { BsCheckCircle } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import ProgressBar from 'react-bootstrap/ProgressBar'

const Final = () => {
    return (
        <div className={style.final}>
            <div className={style.title}>
                <h1>List of Best Custom Web Designers & Web Design Agencies</h1>
            </div>

            <div className={style.main}>
                <Container>
                    <Row>
                        <Col sm={10}>
                            <div className={style.div1}>
                                <div className="d-flex">
                                    <div>
                                        <Image src={demo} className={style.demoImg} />
                                    </div>
                                    <div className={style.rating}>
                                        <h1>
                                            EIGHT25MEDIA{" "}
                                            <span>Award Winning Firm with 750+ Clients</span>{" "}
                                        </h1>
                                        <div className="d-flex">
                                            <h1>4.9</h1>
                                            <div>
                                                <AiFillStar className={style.star} />
                                                <AiFillStar className={style.star} />
                                                <AiFillStar className={style.star} />
                                                <AiFillStar className={style.star} />
                                                <AiFillStar className={style.star} />
                                            </div>
                                            <p>25 REVIEWS</p>
                                        </div>
                                    </div>

                                    <div className="ms-auto">
                                        <BsBagPlus />
                                        <div className={style.sponsor}>SPONSOR</div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.div2}>
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

                                <div className={style.middle}>
                                    <div>
                                        <p>Service Focus</p>
                                        <ProgressBar>
                                            <ProgressBar striped variant="success" now={50} key={1} />
                                            <ProgressBar variant="warning" now={25} key={2} />
                                            <ProgressBar striped variant="danger" now={25} key={3} />
                                        </ProgressBar>
                                        <p>50% Web Design</p>
                                    </div>
                                </div>
                                <div className={style.right}>
                                    <h5>&quot;The team did what they were asked to do and more.&quot;</h5>
                                    <p>Former Content Marketing Manager, Coworking Company <GoVerified style={{ color: "red" }} /> </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={2}>
                            <Container className="d-flex flex-column align-items-center">
                                <Row>
                                    <Col className={style.rightCol1}>
                                        <button>Visit Website</button>
                                        <BsCheckCircle className={style.icon} />
                                    </Col>
                                    <hr />
                                </Row>
                                <Row>
                                    <Col className={style.rightCol2}>
                                        <button>Visit Website</button>
                                        <BsCheckCircle className={style.icon} />
                                    </Col>
                                    <hr />
                                </Row>
                                <Row>
                                    <Col className={style.rightCol2}>
                                        <button>Visit Website</button>
                                        <BsCheckCircle className={style.icon} />
                                    </Col>
                                    <hr />
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className={style.main}>
                <Container>
                    <Row>
                        <Col sm={10}>
                            <div className={style.div1}>
                                <div className="d-flex">
                                    <div>
                                        <Image src={demo} className={style.demoImg} />
                                    </div>
                                    <div className={style.rating}>
                                        <h1>
                                            EIGHT25MEDIA{" "}
                                            <span>Award Winning Firm with 750+ Clients</span>{" "}
                                        </h1>
                                        <div className="d-flex">
                                            <h1>4.9</h1>
                                            <div>
                                                <AiFillStar className={style.star} />
                                                <AiFillStar className={style.star} />
                                                <AiFillStar className={style.star} />
                                                <AiFillStar className={style.star} />
                                                <AiFillStar className={style.star} />
                                            </div>
                                            <p>25 REVIEWS</p>
                                        </div>
                                    </div>

                                    <div className="ms-auto">
                                        <BsBagPlus />
                                        <div className={style.sponsor}>SPONSOR</div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.div2}>
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

                                <div className={style.middle}>
                                    <div>
                                        <p>Service Focus</p>
                                        <ProgressBar>
                                            <ProgressBar striped variant="success" now={50} key={1} />
                                            <ProgressBar variant="warning" now={25} key={2} />
                                            <ProgressBar striped variant="danger" now={25} key={3} />
                                        </ProgressBar>
                                        <p>50% Web Design</p>
                                    </div>
                                </div>
                                <div className={style.right}>
                                    <h5>&quot;The team did what they were asked to do and more.&quot;</h5>
                                    <p>Former Content Marketing Manager, Coworking Company <GoVerified style={{ color: "red" }} /> </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={2}>
                            <Container className="d-flex flex-column align-items-center">
                                <Row>
                                    <Col className={style.rightCol1}>
                                        <button>Visit Website</button>
                                        <BsCheckCircle className={style.icon} />
                                    </Col>
                                    <hr />
                                </Row>
                                <Row>
                                    <Col className={style.rightCol2}>
                                        <button>Visit Website</button>
                                        <BsCheckCircle className={style.icon} />
                                    </Col>
                                    <hr />
                                </Row>
                                <Row>
                                    <Col className={style.rightCol2}>
                                        <button>Visit Website</button>
                                        <BsCheckCircle className={style.icon} />
                                    </Col>
                                    <hr />
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className={style.main}>
                <Container>
                    <Row>
                        <Col sm={10}>
                            <div className={style.div1}>
                                <div className="d-flex">
                                    <div>
                                        <Image src={demo} className={style.demoImg} />
                                    </div>
                                    <div className={style.rating}>
                                        <h1>
                                            EIGHT25MEDIA{" "}
                                            <span>Award Winning Firm with 750+ Clients</span>{" "}
                                        </h1>
                                        <div className="d-flex">
                                            <h1>4.9</h1>
                                            <div>
                                                <AiFillStar className={style.star} />
                                                <AiFillStar className={style.star} />
                                                <AiFillStar className={style.star} />
                                                <AiFillStar className={style.star} />
                                                <AiFillStar className={style.star} />
                                            </div>
                                            <p>25 REVIEWS</p>
                                        </div>
                                    </div>

                                    <div className="ms-auto">
                                        <BsBagPlus />
                                        <div className={style.sponsor}>SPONSOR</div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.div2}>
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

                                <div className={style.middle}>
                                    <div>
                                        <p>Service Focus</p>
                                        <ProgressBar>
                                            <ProgressBar striped variant="success" now={50} key={1} />
                                            <ProgressBar variant="warning" now={25} key={2} />
                                            <ProgressBar striped variant="danger" now={25} key={3} />
                                        </ProgressBar>
                                        <p>50% Web Design</p>
                                    </div>
                                </div>
                                <div className={style.right}>
                                    <h5>&quot;The team did what they were asked to do and more.&quot;</h5>
                                    <p>Former Content Marketing Manager, Coworking Company <GoVerified style={{ color: "red" }} /> </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={2}>
                            <Container className="d-flex flex-column align-items-center">
                                <Row>
                                    <Col className={style.rightCol1}>
                                        <button>Visit Website</button>
                                        <BsCheckCircle className={style.icon} />
                                    </Col>
                                    <hr />
                                </Row>
                                <Row>
                                    <Col className={style.rightCol2}>
                                        <button>Visit Website</button>
                                        <BsCheckCircle className={style.icon} />
                                    </Col>
                                    <hr />
                                </Row>
                                <Row>
                                    <Col className={style.rightCol2}>
                                        <button>Visit Website</button>
                                        <BsCheckCircle className={style.icon} />
                                    </Col>
                                    <hr />
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className={style.main}>
                <Container>
                    <Row>
                        <Col sm={10}>
                            <div className={style.div1}>
                                <div className="d-flex">
                                    <div>
                                        <Image src={demo} className={style.demoImg} />
                                    </div>
                                    <div className={style.rating}>
                                        <h1>
                                            EIGHT25MEDIA{" "}
                                            <span>Award Winning Firm with 750+ Clients</span>{" "}
                                        </h1>
                                        <div className="d-flex">
                                            <h1>4.9</h1>
                                            <div>
                                                <AiFillStar className={style.star} />
                                                <AiFillStar className={style.star} />
                                                <AiFillStar className={style.star} />
                                                <AiFillStar className={style.star} />
                                                <AiFillStar className={style.star} />
                                            </div>
                                            <p>25 REVIEWS</p>
                                        </div>
                                    </div>

                                    <div className="ms-auto">
                                        <BsBagPlus />
                                        <div className={style.sponsor}>SPONSOR</div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.div2}>
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

                                <div className={style.middle}>
                                    <div>
                                        <p>Service Focus</p>
                                        <ProgressBar>
                                            <ProgressBar striped variant="success" now={50} key={1} />
                                            <ProgressBar variant="warning" now={25} key={2} />
                                            <ProgressBar striped variant="danger" now={25} key={3} />
                                        </ProgressBar>
                                        <p>50% Web Design</p>
                                    </div>
                                </div>
                                <div className={style.right}>
                                    <h5>&quot;The team did what they were asked to do and more.&quot;</h5>
                                    <p>Former Content Marketing Manager, Coworking Company <GoVerified style={{ color: "red" }} /> </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={2}>
                            <Container className="d-flex flex-column align-items-center">
                                <Row>
                                    <Col className={style.rightCol1}>
                                        <button>Visit Website</button>
                                        <BsCheckCircle className={style.icon} />
                                    </Col>
                                    <hr />
                                </Row>
                                <Row>
                                    <Col className={style.rightCol2}>
                                        <button>Visit Website</button>
                                        <BsCheckCircle className={style.icon} />
                                    </Col>
                                    <hr />
                                </Row>
                                <Row>
                                    <Col className={style.rightCol2}>
                                        <button>Visit Website</button>
                                        <BsCheckCircle className={style.icon} />
                                    </Col>
                                    <hr />
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className={style.main}>
                <Container>
                    <Row>
                        <Col sm={10}>
                            <div className={style.div1}>
                                <div className="d-flex">
                                    <div>
                                        <Image src={demo} className={style.demoImg} />
                                    </div>
                                    <div className={style.rating}>
                                        <h1>
                                            EIGHT25MEDIA{" "}
                                            <span>Award Winning Firm with 750+ Clients</span>{" "}
                                        </h1>
                                        <div className="d-flex">
                                            <h1>4.9</h1>
                                            <div>
                                                <AiFillStar className={style.star} />
                                                <AiFillStar className={style.star} />
                                                <AiFillStar className={style.star} />
                                                <AiFillStar className={style.star} />
                                                <AiFillStar className={style.star} />
                                            </div>
                                            <p>25 REVIEWS</p>
                                        </div>
                                    </div>

                                    <div className="ms-auto">
                                        <BsBagPlus />
                                        <div className={style.sponsor}>SPONSOR</div>
                                    </div>
                                </div>
                            </div>
                            <div className={style.div2}>
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

                                <div className={style.middle}>
                                    <div>
                                        <p>Service Focus</p>
                                        <ProgressBar>
                                            <ProgressBar striped variant="success" now={50} key={1} />
                                            <ProgressBar variant="warning" now={25} key={2} />
                                            <ProgressBar striped variant="danger" now={25} key={3} />
                                        </ProgressBar>
                                        <p>50% Web Design</p>
                                    </div>
                                </div>
                                <div className={style.right}>
                                    <h5>&quot;The team did what they were asked to do and more.&quot;</h5>
                                    <p>Former Content Marketing Manager, Coworking Company <GoVerified style={{ color: "red" }} /> </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={2}>
                            <Container className="d-flex flex-column align-items-center">
                                <Row>
                                    <Col className={style.rightCol1}>
                                        <button>Visit Website</button>
                                        <BsCheckCircle className={style.icon} />
                                    </Col>
                                    <hr />
                                </Row>
                                <Row>
                                    <Col className={style.rightCol2}>
                                        <button>Visit Website</button>
                                        <BsCheckCircle className={style.icon} />
                                    </Col>
                                    <hr />
                                </Row>
                                <Row>
                                    <Col className={style.rightCol2}>
                                        <button>Visit Website</button>
                                        <BsCheckCircle className={style.icon} />
                                    </Col>
                                    <hr />
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>

           

         
        </div>
    );
};

export default Final;
