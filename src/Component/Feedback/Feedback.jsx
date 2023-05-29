import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const Feedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };
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
            <div className="p-5" style={{ backgroundColor: '#fff', width: '80%', maxWidth: '100%' }}>
                <h1 className='text-center'>Site Feedback</h1>

                <div className="container">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder="Enter your message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <div style={{ textAlign: 'center' }}>
                            <button
                                className='mt-4'
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

export default Feedback