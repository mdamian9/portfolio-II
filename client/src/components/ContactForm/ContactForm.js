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
                                <Label for='userName'>Email:</Label>
                                <Input type='text' name='name' id='userName' placeholder='Enter your name' />
                            </FormGroup>
                            <FormGroup>
                                <Label for='userEmail'>Email:</Label>
                                <Input type='email' name='email' id='userEmail' placeholder='Enter your email' />
                            </FormGroup>
                            <FormGroup>
                                <Label for="userMessage">Message:</Label>
                                <Input type="textarea" name="message" id="userMessage" placeholder='Enter your message' size={5} />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    };

};

export default ContactForm;
