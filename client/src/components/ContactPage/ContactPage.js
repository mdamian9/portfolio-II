import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Footer from '../Footer/Footer';

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
                    <Row className='text-center'>
                        <Col>
                            <div className='bg-opaque' style={{ padding: '30px' }}>
                                <Card>
                                    <CardBody>
                                        <h4>Contact Me</h4>
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
