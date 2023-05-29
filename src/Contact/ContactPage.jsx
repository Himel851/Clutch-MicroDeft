import React from 'react'
import { Form } from 'react-bootstrap'

const ContactPage = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                height: 'auto',
                backgroundColor: '#17313B',
                marginTop: '50px',
                padding: '50px'
            }}
        >
            <div className="p-5" style={{ backgroundColor: '#fff', width: '80%' }}>
            <h1 className='text-center'>Contact Us</h1>

                <div className="pt-3">
                    <Form>
                        <p> <b>How can we help? </b> </p>
                        <p>Please select the best option that fits your question. </p>
                        <p> <b>How are you using Clutch? <span style={{ color: 'red' }}>*</span> </b> </p>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="As a Buyer of B2B Services"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="As a Reviewer of B2B Services"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                                <Form.Check
                                    inline
                                    label="As a Service Provider with a Clutch Profile"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-3`}
                                />
                                <Form.Check
                                    inline
                                    label="As a Service Provider Interested in Establishing a Clutch Profile"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-4`}
                                />
                                <Form.Check
                                    inline
                                    label="Other"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-5`}
                                />

                            </div>
                        ))}
                        <p> <b>Help us find an answer. </b> </p>
                        <p>Please provide your contact information and additional details so our team can quickly address your request. </p>


                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your name<span style={{ color: 'red' }}>*</span></Form.Label>
                            <div className="row">
                                <div className="col">
                                    <Form.Control type="text" placeholder="First Name" />
                                </div>
                                <div className="col">
                                    <Form.Control type="text" placeholder="Last Name" />
                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Email <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control type="email" placeholder="demo@gmail.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Phone Number <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control type="text" placeholder="017XXXXXXXX" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your Position <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Company Name <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Company Website URl <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>

                        <div style={{ textAlign: 'center' }}>
                            <button
                                style={{
                                    display: 'inline-block',
                                    padding: '10px 20px',
                                    backgroundColor: 'green',
                                    color: 'white',
                                }}
                            >
                                Submit Here
                            </button>
                        </div>

                    </Form>
                </div>
            </div>

        </div>
    )
}

export default ContactPage