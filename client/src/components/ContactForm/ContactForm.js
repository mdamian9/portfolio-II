import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import './ContactForm.css';

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    };

    render = () => {
        return (
            <Container className='contact-form'>
                <Row style={{ padding: '10px' }}>
                    <Col>
                        <Form>
                            <FormGroup>
                                <Label for='firstName'>First Name:</Label>
                                <Input type='text' name='firstName' id='firstName' placeholder='Enter your first name' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='lastName'>Last Name:</Label>
                                <Input type='text' name='lastName' id='lastName' placeholder='Enter your last name' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='userEmail'>Email:</Label>
                                <Input type='email' name='email' id='userEmail' placeholder='Enter your email' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='subject'>Subject:</Label>
                                <Input type='text' name='subject' id='subject' placeholder='Enter the subject' />
                            </FormGroup>
                            <FormGroup>
                                <Label for="userMessage">Message:</Label>
                                <Input type="textarea" name="message" id="userMessage" placeholder='Enter your message' rows={6} />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    };

};

export default ContactForm;
