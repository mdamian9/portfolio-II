import React, { Component } from 'react';
import './AboutMePage.css';
import { Container, Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import me from '../../assets/images/img-03.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                            <h2 style={{ marginTop: '5px' }}>
                                <b>Miguel Damian</b>
                            </h2>
                            <div id='about-me-bullets'>
                                <p>
                                    <FontAwesomeIcon icon='laptop-code' className='fa-bullet' />Full Stack Web Developer</p>
                                <p>
                                    <FontAwesomeIcon icon='home' className='fa-bullet' />Chula Vista, CA</p>
                                <p>
                                    <FontAwesomeIcon icon='envelope' className='fa-bullet' />m.damian9@hotmail.com</p>
                                <p>
                                    <FontAwesomeIcon icon={['fab', 'github']} className='fa-bullet' />
                                    <a href="https://github.com/mdamian9" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={['fab', 'linkedin']} className='fa-bullet' />
                                    <a href="https://www.linkedin.com/in/migueldamian" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                                </p>
                                <p>
                                    <FontAwesomeIcon icon='file-alt' className='fa-bullet' />
                                    <a href="assets/files/resume.pdf" target="_blank" rel="noopener noreferrer">Resume (PDF)</a>
                                </p>
                            </div>
                            <hr />
                            <p>
                                <h5><b><FontAwesomeIcon icon='globe' className='fa-bullet' />Languages</b></h5>
                            </p>
                            <p>
                                <b>•&ensp;English</b>
                                <div className='fluent-lang'>Fluent</div>
                            </p>
                            <p>
                                <b>•&ensp;Spanish</b>
                                <div className='fluent-lang'>Fluent</div>
                            </p>
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

