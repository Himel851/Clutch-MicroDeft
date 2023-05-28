import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import styles from './resources.module.scss'

const Resources = () => {
    return (
        <div style={{ margin: '7rem auto 0', padding: '0 100px' }}>
            <h2 className="fw-normal">Clutch Blog</h2>
            <h4 className="fw-normal pb-">Home to the Latest News, Data, and Advice for Businesses</h4>
            <Container>
                <Row>
                    <Col xl={7} md={5} className="border border-info p-2">
                        <div className='p-5' style={{ backgroundColor: '#203D4F', color: '#fff' }}>
                            <Button size='lg' style={{ backgroundColor: '#49ab66', color: 'white' }}>
                                Development
                            </Button>
                            <h2 className='fw-normal pt-5'>Small Business Leaders <br /> Embrance Al: 82% Expect <br /> Disruption in the Next 5 <br /> Years </h2>
                        </div>
                        <h4 className='pt-3'>Small Business Leaders Embrace AI: 82% Expect Disruption in the Next 5 Years</h4>
                        <p>AI tech and adoption are growing at breakneck speed. Don't miss out on this trend and discover how your business can put AI tools to use.</p>
                        <p></p>

                    </Col>
                    <Col xl={1} md={1} className='p-3'></Col>
                    <Col xl={4} md={6} className="border border-info">
                        <h2 className="fw-normal p-3">New & Trending</h2>
                        <hr />
                        <p style={{ color: '#2f18b1' }}>Digital Marketing,Thought Leaders</p>
                        <p>Video Production Glossary: 62 Essential Terms</p>
                        <hr />
                        <p style={{ color: '#2f18b1' }}>Content Marketing,Thought Leaders
                        </p>
                        <p>When to Hire a Freelance Content Writer vs. Agency</p>
                        <hr />
                        <p style={{ color: '#2f18b1' }}>Branding & PR, Thought Leaders</p>
                        <p>PR Glossary: 64 Essentianl Terms</p>
                        <hr />
                        <p style={{ color: '#2f18b1' }}>SEO, Thought Leaders</p>
                        <p>When to Hire a Freelance SEO vs. Agency</p>
                    </Col>
                </Row>
            </Container>
            <br />
            <hr className={styles.hrElement} />
            <h5 className='pt-4'>Most Popular</h5>

            <Container>
                <Row className="d-flex gap-3 pt-4">
                    <Col className='border border-info p-2'>
                        <div style={{ backgroundColor: '#203D4F', color: '#fff' }}>
                           <h3 className='p-5'>When to Hire a Freelance PPC Specialist vs. PPC Agency</h3>
                        </div>
                        <p style={{ color: '#2f18b1' }}>Digital Marketing, Thought Leaders</p>
                        <hr />
                        <h4>When to Hire a Freelance PPC Specialist vs. PPC Agency</h4>
                        <p>Freelance PPC specialists vs. PPC agency: which partnership is right for your business? This article lists the pros and cons of both.</p>
                    </Col>
                    <Col className='border border-info p-2'>
                        <div style={{ backgroundColor: '#203D4F', color: '#fff' }}>
                           <h3 className='p-5'>When to Hire a Freelance PPC Specialist vs. PPC Agency</h3>
                        </div>
                        <p style={{ color: '#2f18b1' }}>Digital Marketing, Thought Leaders</p>
                        <hr />
                        <h4>When to Hire a Freelance PPC Specialist vs. PPC Agency</h4>
                        <p>Freelance PPC specialists vs. PPC agency: which partnership is right for your business? This article lists the pros and cons of both.</p>
                    </Col>
                    <Col className='border border-info p-2'>
                        <div style={{ backgroundColor: '#203D4F', color: '#fff' }}>
                           <h3 className='p-5'>When to Hire a Freelance PPC Specialist vs. PPC Agency</h3>
                        </div>
                        <p style={{ color: '#2f18b1' }}>Digital Marketing, Thought Leaders</p>
                        <hr />
                        <h4>When to Hire a Freelance PPC Specialist vs. PPC Agency</h4>
                        <p>Freelance PPC specialists vs. PPC agency: which partnership is right for your business? This article lists the pros and cons of both.</p>
                    </Col>
                   
                </Row>
                <Row className="d-flex gap-3 pt-4">
                    <Col className='border border-info p-2'>
                        <div style={{ backgroundColor: '#203D4F', color: '#fff' }}>
                           <h3 className='p-5'>When to Hire a Freelance PPC Specialist vs. PPC Agency</h3>
                        </div>
                        <p style={{ color: '#2f18b1' }}>Digital Marketing, Thought Leaders</p>
                        <hr />
                        <h4>When to Hire a Freelance PPC Specialist vs. PPC Agency</h4>
                        <p>Freelance PPC specialists vs. PPC agency: which partnership is right for your business? This article lists the pros and cons of both.</p>
                    </Col>
                    <Col className='border border-info p-2'>
                        <div style={{ backgroundColor: '#203D4F', color: '#fff' }}>
                           <h3 className='p-5'>When to Hire a Freelance PPC Specialist vs. PPC Agency</h3>
                        </div>
                        <p style={{ color: '#2f18b1' }}>Digital Marketing, Thought Leaders</p>
                        <hr />
                        <h4>When to Hire a Freelance PPC Specialist vs. PPC Agency</h4>
                        <p>Freelance PPC specialists vs. PPC agency: which partnership is right for your business? This article lists the pros and cons of both.</p>
                    </Col>
                    <Col className='border border-info p-2'>
                        <div style={{ backgroundColor: '#203D4F', color: '#fff' }}>
                           <h3 className='p-5'>When to Hire a Freelance PPC Specialist vs. PPC Agency</h3>
                        </div>
                        <p style={{ color: '#2f18b1' }}>Digital Marketing, Thought Leaders</p>
                        <hr />
                        <h4>When to Hire a Freelance PPC Specialist vs. PPC Agency</h4>
                        <p>Freelance PPC specialists vs. PPC agency: which partnership is right for your business? This article lists the pros and cons of both.</p>
                    </Col>
                   
                </Row>
            </Container>
        </div>
    )
}

export default Resources