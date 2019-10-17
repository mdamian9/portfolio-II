import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Footer from '../Footer/Footer';
import ContactForm from '../ContactForm/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
        this.backdropClickHandler = this.backdropClickHandler.bind(this);
        this.state = {
            sideDrawerOpen: false
        };
    };

    drawerToggleClickHandler = () => {
        this.setState(state => ({
            sideDrawerOpen: !state.sideDrawerOpen
        }));
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    render = () => {

        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        };

        return (
            <div style={{ height: "100%" }}>
                <Logo />
                <Navbar show={true} toggleSideDrawer={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <br />
                <Container style={{ maxWidth: '60%' }}>
                    <Row>
                        <Col>
                            <div className='bg-opaque' style={{ padding: '30px' }}>
                                <Card>
                                    <CardBody>
                                        <h3 className='text-center' style={{ marginBottom: '0px' }}><b>Contact Information</b></h3>
                                        <br />
                                        <h6 className='text-center'>
                                            <b className='text-red'><FontAwesomeIcon icon='envelope' />&ensp;Email:</b> m.damian9@hotmail.com
                                            <br />
                                            <b className='text-red'><FontAwesomeIcon icon={['fab', 'linkedin']} />&ensp;LinkedIn:</b> <a
                                                href='https://linkedin.com/in/migueldamian/'
                                                target='_blank' rel='noopener noreferrer'>
                                                https://linkedin.com/in/migueldamian
                                                </a>
                                            <br />
                                            <b className='text-red'><FontAwesomeIcon icon={['fab', 'github']} />&ensp;GitHub:</b> <a
                                                href='https://github.com/mdamian9/'
                                                target='_blank' rel='noopener noreferrer'>
                                                https://github.com/mdamian9
                                                </a>
                                            <br />
                                            <b className='text-red'><FontAwesomeIcon icon='globe' />&ensp;Website:</b> <a
                                                href='https://migueldamian.herokuapp.com/'
                                                target='_blank' rel='noopener noreferrer'>
                                                https://migueldamian.herokuapp.com/
                                                </a>
                                            <br />
                                        </h6>
                                        <br />
                                        <ContactForm />
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <br />
                <Footer />
            </div>
        );

    };

};

export default ContactPage;
