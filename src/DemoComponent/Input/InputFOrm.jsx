import React, { useState } from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import style from './Input.module.scss'
import Multiselect from 'multiselect-react-dropdown';

const InputFOrm = () => {
    const [services, setServices] = useState("");
    const [clientBudget, setClientBudget] = useState("");
    const [hourlyRate, setHourlyRate] = useState("");
    const [industry, setIndustry] = useState("");
    const [review, setReview] = useState("");

    const handleFilterSubmit = (event) => {
        event.preventDefault();
        // Handle filtering logic here
    };

    const handleClearAll = () => {
        setServices("");
        setClientBudget("");
        setHourlyRate("");
        setIndustry("");
        setReview("");
    };

    return (
        <div className={style.input} >
            <Form >
                <Row xs={1} md={2} lg={6} className={style.row}>
                    <Col >
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>

                        </InputGroup>

                    </Col>
                    <Col >
                        <Multiselect
                            displayValue="key"
                            onKeyPressFn={function noRefCheck() { }}
                            onRemove={function noRefCheck() { }}
                            onSearch={function noRefCheck() { }}
                            onSelect={function noRefCheck() { }}
                            options={[
                                {
                                    cat: 'Group 1',
                                    key: 'Web Design(60314)'
                                },
                                {
                                    cat: 'Group 1',
                                    key: 'Search Engine Optimization (23212)'
                                },
                                {
                                    cat: 'Group 1',
                                    key: 'Web Development (21232)'
                                },
                                {
                                    cat: 'Group 2',
                                    key: 'Social Media Marketing (21201)'
                                },
                                {
                                    cat: 'Group 2',
                                    key: 'Graphic Design (12123)'
                                },
                                {
                                    cat: 'Group 2',
                                    key: 'Option 6'
                                },
                                {
                                    cat: 'Group 2',
                                    key: 'Option 7'
                                }
                            ]}
                            showCheckbox
                            style={{
                                chips: {
                                    background: '#17313B'
                                },
                                
                            }}
                        />
                        {/* <Form.Group controlId="clientBudget">
                            <Form.Control
                                as="select"
                                value={clientBudget}
                                onChange={(event) => setClientBudget(event.target.value)}
                            >
                                <option >Client Budget</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </Form.Control>
                        </Form.Group> */}
                    </Col>
                    <Col>
                        <Form.Group controlId="hourlyRate">
                            <Form.Control
                                as="select"
                                value={hourlyRate}
                                onChange={(event) => setHourlyRate(event.target.value)}
                            >
                                <option >Hourly Rate</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="industry">
                            <Form.Control
                                as="select"
                                value={industry}
                                onChange={(event) => setIndustry(event.target.value)}
                            >
                                <option>Industry</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="review">
                            <Form.Control
                                as="select"
                                value={review}
                                onChange={(event) => setReview(event.target.value)}
                            >
                                <option>Review</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <button className={style.btn1} type="submit" onClick={handleFilterSubmit}>
                            All Filter
                        </button>
                        <button className={style.btn2} onClick={handleClearAll}>
                            Clear All
                        </button>
                    </Col>
                </Row>
            </Form>
        </div>

    );
};


export default InputFOrm