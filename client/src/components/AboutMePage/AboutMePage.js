import React, { Component } from 'react';
import './AboutMePage.css';
import { Container, Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Footer from '../Footer/Footer';
import me from '../../assets/images/img-03.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AboutMePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapseUCSD: false,
            collapseHKUST: false,
            sideDrawerOpen: false
        };
        this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
        this.backdropClickHandler = this.backdropClickHandler.bind(this);
        this.toggleCollapseUCSD = this.toggleCollapseUCSD.bind(this);
    };

    drawerToggleClickHandler = () => {
        this.setState(state => ({
            sideDrawerOpen: !state.sideDrawerOpen
        }));
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    toggleCollapseUCSD = () => {
        this.setState(state => ({
            collapseUCSD: !state.collapseUCSD
        }));
        console.log('toggle collapse education');
    };

    render = () => {

        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        };

        return (
            <div className='about-me-page'>
                <Logo />
                <Navbar show={true} toggleSideDrawer={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <Container className='content'>
                    <Container className='section-one'>
                        <Row>
                            <Col>
                                <div className='bg-opaque' >
                                    <img className='my-img' src={me} alt='img' />
                                    <h2 style={{ margin: '15px' }}>
                                        <b>Miguel Damian</b>
                                    </h2>
                                    <div className='about-me-bullets'>
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
                                    <div className='about-me-bullets'>
                                        <h5><b><FontAwesomeIcon icon='globe' className='fa-bullet' />Languages</b></h5>
                                        <b>•&ensp;English</b>
                                        <div className='fluent-lang'>Fluent</div>
                                        <br />
                                        <b>•&ensp;Spanish</b>
                                        <div className='fluent-lang'>Fluent</div>
                                    </div>
                                    <br />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container className='section-two'>
                        <Row>
                            <Col>
                                <div className='bg-opaque' style={{ padding: '30px' }}>
                                    <h2 style={{ marginBottom: '20px' }}>
                                        <FontAwesomeIcon icon='graduation-cap' className='text-danger' />&ensp;<b>Education</b>
                                    </h2>
                                    <div className='collapse-div' id='collapse-ucsd'>
                                        <Button className='collapse-btn' onClick={this.toggleCollapseUCSD}>
                                            <h5>
                                                <b>
                                                    University of California, San Diego Extension
                                                </b>
                                            </h5>
                                        </Button>
                                        <br />
                                        <Collapse isOpen={this.state.collapseUCSD}>
                                            <Card>
                                                <CardBody>
                                                    UCSD details
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    </div>
                                    <div className='collapse-div' id='collapse-hkust'>
                                        <Button className='collapse-btn' onClick={this.toggleCollapseHKUST}>
                                            <h5>
                                                <b>
                                                    Hong Kong University of Science and Technology
                                                </b>
                                            </h5>
                                        </Button>
                                        <br />
                                        <Collapse isOpen={this.state.collapseHKUST}>
                                            <Card>
                                                <CardBody>
                                                    HKUST details
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Footer />
            </div>
        );
    };
};

export default AboutMePage;

    // Updated AboutMePage

