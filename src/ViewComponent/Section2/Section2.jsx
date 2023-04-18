import { Col, Container, ProgressBar, Row } from 'react-bootstrap'
import style from './Section.module.scss'

const Section2 = () => {
    return (
        <div className={style.section2}>
            <Container>
                <Row>
                    <Col sm={10} className='p-4'>
                        <h3>Focus</h3>
                        <p>Service lines</p>
                        <ProgressBar style={{ height: "35px" }}>
                            <ProgressBar style={{ backgroundColor: "#2980b9" }} now={50} key={1} label={`${50}%`} />
                            <ProgressBar style={{ backgroundColor: "#315268" }} now={30} key={2} label={`${30}%`} />
                            <ProgressBar style={{ backgroundColor: "#267c87" }} now={10} key={3} label={`${10}%`} />
                            <ProgressBar style={{ backgroundColor: "#62ba56" }} now={10} key={3} label={`${10}%`} />
                        </ProgressBar>
                        <div className='d-flex mt-4 gap-3'>
                            <div className={style.box1}></div>
                            <p className=''>Web Design</p>
                            <div className={style.box2}></div>
                            <p className=''>Web Development</p>
                            <div className={style.box3}></div>
                            <p className=''> Digital Strategy</p>
                        </div>

                        <Container>
                            <Row className='mt-5'>
                                <Col sm={6}>
                                    <p>Client focus</p>
                                    <ProgressBar style={{ height: "35px" }}>
                                        <ProgressBar style={{ backgroundColor: "#2980b9" }} now={65} key={1} label={`${65}%`} />
                                        <ProgressBar style={{ backgroundColor: "#315268" }} now={25} key={2} label={`${25}%`} />
                                        <ProgressBar style={{ backgroundColor: "#267c87" }} now={10} key={3} label={`${10}%`} />
                                    </ProgressBar>
                                    <div className='mt-4 '>
                                        <div className='d-flex gap-3'>
                                            <div className={style.box1}></div>
                                            <p className=''>Web Design</p>
                                        </div>

                                        <div className='d-flex gap-3'>
                                            <div className={style.box2}></div>
                                            <p className=''>Web Development</p>
                                            <div className={style.box3}></div>
                                            <p className=''> Digital Strategy</p>
                                        </div>

                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <p>Industry focus</p>
                                    <ProgressBar style={{ height: "35px" }}>
                                        <ProgressBar style={{ backgroundColor: "#2980b9" }} now={20} key={1} label={`${20}%`} />
                                        <ProgressBar style={{ backgroundColor: "#315268" }} now={10} key={2} label={`${10}%`} />
                                        <ProgressBar style={{ backgroundColor: "#267c87" }} now={10} key={3} label={`${10}%`} />
                                        <ProgressBar style={{ backgroundColor: "#62ba56" }} now={10} key={4} label={`${10}%`} />
                                        <ProgressBar style={{ backgroundColor: "#5d997e" }} now={10} key={5} label={`${10}%`} />
                                        <ProgressBar style={{ backgroundColor: "#62ba56" }} now={10} key={6} label={`${10}%`} />
                                        <ProgressBar style={{ backgroundColor: "#40dc2b" }} now={10} key={7} label={`${10}%`} />
                                        <ProgressBar style={{ backgroundColor: "#4d7b66" }} now={20} key={8} label={`${20}%`} />
                                    </ProgressBar>
                                    <div className='mt-4 '>
                                        <div className='d-flex gap-3'>
                                            <div className={style.box1}></div>
                                            <p className=''>Other industries</p>
                                            <div className={style.box2}></div>
                                            <p className=''>Advertising & marketing</p>
                                        </div>

                                        <div className='d-flex gap-3'>

                                            <div className={style.box3}></div>
                                            <p className=''> Consumer products & services</p>
                                        </div>

                                    </div>
                                </Col>
                            </Row>

                        </Container>

                        <div className='mt-5'>
                            <Container>
                                <Row>
                                    <Col sm={6}>
                                        <p>Application Platforms</p>
                                        <ProgressBar style={{ height: "20px" }}>
                                            <ProgressBar style={{ backgroundColor: "#2980b9" }} now={60} key={1} label={`${60}%`} />
                                            <ProgressBar style={{ backgroundColor: "#315268" }} now={40} key={2} label={`${40}%`} />
                                        </ProgressBar>

                                    </Col>
                                    <Col sm={6}>
                                        <p>E-commerce Systems</p>
                                        <ProgressBar style={{ height: "20px" }}>
                                            <ProgressBar style={{ backgroundColor: "#2980b9" }} now={100} key={1} label={`${100}%`} />
                                        </ProgressBar>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        <div className='mt-5'>
                            <Container>
                                <Row>
                                    <Col sm={6}>
                                        <p>Frameworks and CMS</p>
                                        <ProgressBar style={{ height: "20px" }}>
                                            <ProgressBar style={{ backgroundColor: "#2980b9" }} now={100} key={1} label={`${100}%`} />
                                        </ProgressBar>

                                    </Col>
                                    <Col sm={6}>
                                        <p>Mobile Focus</p>
                                        <ProgressBar style={{ height: "20px" }}>
                                            <ProgressBar style={{ backgroundColor: "#2980b9" }} now={40} key={1} label={`${40}%`} />
                                            <ProgressBar style={{ backgroundColor: "#315268" }} now={20} key={2} label={`${20}%`} />
                                            <ProgressBar style={{ backgroundColor: "#267c87" }} now={20} key={3} label={`${20}%`} />
                                            <ProgressBar style={{ backgroundColor: "#62ba56" }} now={10} key={4} label={`${10}%`} />
                                            <ProgressBar style={{ backgroundColor: "#5d997e" }} now={10} key={5} label={`${10}%`} />

                                        </ProgressBar>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        <div className='mt-5'>
                            <Container>
                                <Row>
                                    <Col sm={6}>
                                        <p>Mobile Platforms</p>
                                        <ProgressBar style={{ height: "20px" }}>
                                            <ProgressBar style={{ backgroundColor: "#2980b9" }} now={50} key={1} label={`${50}%`} />
                                            <ProgressBar style={{ backgroundColor: "#315268" }} now={25} key={2} label={`${25}%`} />
                                            <ProgressBar style={{ backgroundColor: "#267c87" }} now={25} key={3} label={`${25}%`} />
                                        </ProgressBar>

                                    </Col>
                                   
                                </Row>
                            </Container>
                        </div>

                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
        </div>
    )
}
// #104f7 #267c87

export default Section2