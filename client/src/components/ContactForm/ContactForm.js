import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './ContactForm.css';

class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        // Reset form
        event.target.reset();
        // Reset state
        this.setState(() => {
            return {
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: ''
            };
        });
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render = () => {
        return (
            <Container className='contact-form'>
                <Row style={{ padding: '10px' }}>
                    <Col>
                        <Form onSubmit={this.handleFormSubmit}>
                            <FormGroup>
                                <Label for='firstName'>First Name:</Label>
                                <Input type='text' name='firstName' id='firstName' placeholder='Enter your first name' value={this.state.value} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='lastName'>Last Name:</Label>
                                <Input type='text' name='lastName' id='lastName' placeholder='Enter your last name' value={this.state.value} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='userEmail'>Email:</Label>
                                <Input type='email' name='email' id='userEmail' placeholder='Enter your email' value={this.state.value} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='subject'>Subject:</Label>
                                <Input type='text' name='subject' id='subject' placeholder='Enter the subject' value={this.state.value} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="userMessage">Message:</Label>
                                <Input type="textarea" name="message" id="userMessage" placeholder='Enter your message' rows={6} value={this.state.value} onChange={this.handleChange} />
                            </FormGroup>
                            <Button type='submit' color='danger'>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    };

};

export default ContactForm;
