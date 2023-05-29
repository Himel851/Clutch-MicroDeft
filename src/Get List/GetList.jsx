import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import style from './getlist.module.scss'

const GetList = () => {
    return (
        <div style={{ margin: '7rem auto 0', }}>
            <Container>
                <Row>
                    <Col xl={6} md={12} >
                        <div style={{ display: 'flex', justifyContent: 'center', border: '1px solid #dbd1d1' }}>
                            <div className='p-5'>
                                <h2 className='text-center'>Collect reviews  and <br /> generate  leads with <br /> your FREE Clutch <br /> profile!</h2>
                                <p className='pt-3 text-center'>Try Clutch for free with a Basic Profile. This is a <br /> great way to get listed on Clutch directories, <br /> collect reviews, and generate new leads.</p>
                                <Button style={{backgroundColor: '#17313B'}} >Explore Alternative Options</Button>

                            </div>
                        </div>
                    </Col>
                    <Col xl={6} md={12} >
                        <div style={{ border: '1px solid #dbd1d1' }}>
                            <div className='p-4' style={{ backgroundColor: '#3094AB' }} >
                                <h4 className='text-center text-white'>Get started with Clutch by <br /> creating your Company Profile!</h4>
                            </div>
                            <div className='p-5'>
                                <h5 >Basic Free Profile</h5>
                                <ul>
                                    <li>Unlimited online review collection</li>
                                    <li>Eligibility for ranking on Leaders Matrix</li>
                                    <li>Showcase achievements with Clutch widgets & badges</li>
                                    <li>Inclusion on TheManifest.com and VisualObjects.com</li>
                                </ul>
                                <Button variant='danger'>Create a free company profile</Button>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div style={{ border: '1px solid #dbd1d1' }}>
                    <div className='p-5'>
                        <h3>Interested in other options?</h3>
                        <p>Clutch offers additional profile tiers that increase your visibility and leverage the full value of Clutch: Clutch⁺ & Sponsor profiles.</p>
                        <Row>
                            <Col xl={4} sm={12}>
                                <div className='p-4' style={{ border: '1px solid #dbd1d1' }}>
                                    <div className='text-white p-4' style={{ backgroundColor: '#3094AB', clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0% 100%, 0 0%)' }}>
                                        <h5>Get Started with a</h5>
                                        <p className='fs-1 fw-bold'>Basic</p>
                                        <h5>profile for FREE</h5>
                                    </div>
                                    <div className='p-4'>
                                        <p className='fs-4'>Included in <b>Basic:</b> </p>
                                        <ul>
                                            <li>Unlimited online review collection</li>
                                            <li>Eligibility for ranking on Leaders Matrix</li>
                                            <li>Showcase achievements with Clutch widgets & badges</li>
                                            <li>Inclusion on TheManifest.com and VisualObjects.com</li>
                                        </ul>
                                    </div>
                                      <div className={style.div1}>
                                        <button className={`${style.btn1}`} style={{ display: 'block', margin: '0 auto' }}>
                                            Become a Sponsor
                                        </button>
                                        </div>
                                </div>
                            </Col>
                            <Col xl={4} sm={12}>
                                <div className='p-4' style={{ border: '1px solid #dbd1d1' }}>
                                    <div className='text-white p-4' style={{ backgroundColor: '#3E839E', clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0% 100%, 0 0%)' }}>
                                        <h5>Upgrade to</h5>
                                        <p className='fs-1 fw-bold'>Clutch</p>
                                        <h5>for $125 per month*</h5>
                                    </div>
                                    <div className='p-4'>
                                        <p className='fs-4'>All benefits of <b>Basic,</b> and; </p>
                                        <ul>
                                            <li>Unlimited account, listing and review support to optimize your presence</li>
                                            <li>Enhanced profile page to showcase exclusive Clutch⁺ features</li>
                                            <li>Customized landing pages and tracking capabilities</li>
                                            <li>Elimination of Recommended Providers section on your profile</li>
                                            <li>Unlocked advanced analytics</li>
                                        </ul>
                                    </div>
                                      <div className={style.div2}>
                                        <button className={`${style.btn1}`} style={{ display: 'block', margin: '0 auto' }}>
                                            Become a Sponsor
                                        </button>
                                        </div>
                                </div>
                            </Col>
                            <Col xl={4} sm={12}>
                                <div className='p-4' style={{ border: '1px solid #dbd1d1' }}>
                                    <div className='text-white p-4' style={{ backgroundColor: '#3FA091', clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0% 100%, 0 0%)' }}>
                                        <h5>Get Started with a</h5>
                                        <p className='fs-1 fw-bold'>Basic</p>
                                        <h5>profile for FREE</h5>
                                    </div>
                                    <div className='p-4'>
                                        <p className='fs-4'>Included in <b>Basic:</b> </p>
                                        <ul>
                                            <li>Increased visibility on specific directories</li>
                                            <li>More visibility on all pages with Profile Verification</li>
                                            <li>Additional analytics tracking</li>
                                            <li>Dedicated Customer Success Analyst</li>
                                        </ul>
                                        <div className={style.div3}>
                                        <button className={`${style.btn1}`} style={{ display: 'block', margin: '0 auto' }}>
                                            Become a Sponsor
                                        </button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default GetList