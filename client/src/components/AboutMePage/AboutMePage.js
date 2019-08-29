import React, { Component } from 'react';
import './AboutMePage.css';
import { Container, Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import me from '../../assets/images/img-03.jpg';

class AboutMePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseEducation: false,
            sideDrawerOpen: false
        };
        this.toggleCollapseEducation = this.toggleCollapseEducation.bind(this);
    };

    drawerToggleClickHandler = () => {
        this.setState(state => ({
            sideDrawerOpen: !state.sideDrawerOpen
        }));
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    toggleCollapseEducation = () => {
        // this.setState(state => ({
        //     collapseEducation: !state.collapseEducation
        // }));
        console.log('toggle collapse education');
    };

    render = () => {

        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        return (
            <div className='about-me-page'>
                <Logo />
                <Navbar show={true} toggleSideDrawer={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <br />
                <Container>
                    <Row>
                        <Col className='bg-opaque section-one'>
                            <img className='my-img' src={me} alt='img' />
                        </Col>
                        &ensp;
                        <Col className='bg-opaque section-two'>
                            Column 2
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
            </div>
        );
    };
};

export default AboutMePage;

    // Updated AboutMePage

