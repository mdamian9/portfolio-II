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
import CollapseUCSD from '../CollapseUCSD/CollapseUCSD';

class AboutMePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapseHKUST: false,
            collapseFCC: false,
            collapseSolo: false,
            collapseSDSU: false,
            collapseSWC: false,
            sideDrawerOpen: false
        };
        this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
        this.backdropClickHandler = this.backdropClickHandler.bind(this);
        this.toggleCollapseHKUST = this.toggleCollapseHKUST.bind(this);
        this.toggleCollapseFCC = this.toggleCollapseFCC.bind(this);
        this.toggleCollapseSolo = this.toggleCollapseSolo.bind(this);
        this.toggleCollapseSDSU = this.toggleCollapseSDSU.bind(this);
        this.toggleCollapseSWC = this.toggleCollapseSWC.bind(this);
    };

    drawerToggleClickHandler = () => {
        this.setState(state => ({
            sideDrawerOpen: !state.sideDrawerOpen
        }));
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    toggleCollapseHKUST = () => {
        this.setState(state => ({
            collapseHKUST: !state.collapseHKUST
        }));
    };

    toggleCollapseFCC = () => {
        this.setState(state => ({
            collapseFCC: !state.collapseFCC
        }));
    };

    toggleCollapseSolo = () => {
        this.setState(state => ({
            collapseSolo: !state.collapseSolo
        }));
    };

    toggleCollapseSDSU = () => {
        this.setState(state => ({
            collapseSDSU: !state.collapseSDSU
        }));
    };

    toggleCollapseSWC = () => {
        this.setState(state => ({
            collapseSWC: !state.collapseSWC
        }));
    };

    render = () => {

        let backdrop, angleIconOne, angleIconTwo, angleIconThree, angleIconFour, angleIconFive, angleIconSix;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        };

        angleIconOne = this.state.collapseUCSD === false ? <FontAwesomeIcon icon='angle-double-down' /> :
            angleIconOne = <FontAwesomeIcon icon='angle-double-up' />;

        angleIconTwo = this.state.collapseHKUST === false ? <FontAwesomeIcon icon='angle-double-down' /> :
            angleIconTwo = <FontAwesomeIcon icon='angle-double-up' />;

        angleIconThree = this.state.collapseFCC === false ? <FontAwesomeIcon icon='angle-double-down' /> :
            angleIconThree = <FontAwesomeIcon icon='angle-double-up' />;

        angleIconFour = this.state.collapseSolo === false ? <FontAwesomeIcon icon='angle-double-down' /> :
            angleIconFour = <FontAwesomeIcon icon='angle-double-up' />;

        angleIconFive = this.state.collapseSDSU === false ? <FontAwesomeIcon icon='angle-double-down' /> :
            angleIconFive = <FontAwesomeIcon icon='angle-double-up' />;

        angleIconSix = this.state.collapseSWC === false ? <FontAwesomeIcon icon='angle-double-down' /> :
            angleIconSix = <FontAwesomeIcon icon='angle-double-up' />;

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
                                    <CollapseUCSD />
                                    <div className='collapse-div' id='collapse-hkust'>
                                        <Button className='collapse-btn' onClick={this.toggleCollapseHKUST}>
                                            <h5>
                                                <b>
                                                    Hong Kong University of Science and Technology
                                                </b>
                                            </h5>
                                            <div className='collapse-btn-spc' />
                                            <h5>
                                                {angleIconTwo}
                                            </h5>
                                        </Button>
                                        <Collapse className='collapse-content' isOpen={this.state.collapseHKUST}>
                                            <Card className='collapse-card'>
                                                <CardBody>
                                                    HKUST details
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    </div>
                                    <div className='collapse-div' id='collapse-fcc'>
                                        <Button className='collapse-btn' onClick={this.toggleCollapseFCC}>
                                            <h5>
                                                <b>
                                                    freeCodeCamp (Online Learning Platform)
                                                </b>
                                            </h5>
                                            <div className='collapse-btn-spc' />
                                            <h5>
                                                {angleIconThree}
                                            </h5>
                                        </Button>
                                        <Collapse className='collapse-content' isOpen={this.state.collapseFCC}>
                                            <Card className='collapse-card'>
                                                <CardBody>
                                                    FCC details
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    </div>
                                    <div className='collapse-div' id='collapse-solo'>
                                        <Button className='collapse-btn' onClick={this.toggleCollapseSolo}>
                                            <h5>
                                                <b>
                                                    SoloLearn (Online Learning Platform)
                                                </b>
                                            </h5>
                                            <div className='collapse-btn-spc' />
                                            <h5>
                                                {angleIconFour}
                                            </h5>
                                        </Button>
                                        <Collapse className='collapse-content' isOpen={this.state.collapseSolo}>
                                            <Card className='collapse-card'>
                                                <CardBody>
                                                    SoloLearn details
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    </div>
                                    <div className='collapse-div' id='collapse-sdsu'>
                                        <Button className='collapse-btn' onClick={this.toggleCollapseSDSU}>
                                            <h5>
                                                <b>
                                                    San Diego State University
                                                </b>
                                            </h5>
                                            <div className='collapse-btn-spc' />
                                            <h5>
                                                {angleIconFive}
                                            </h5>
                                        </Button>
                                        <Collapse className='collapse-content' isOpen={this.state.collapseSDSU}>
                                            <Card className='collapse-card'>
                                                <CardBody>
                                                    SDSU details
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    </div>
                                    <div className='collapse-div' id='collapse-swc'>
                                        <Button className='collapse-btn' onClick={this.toggleCollapseSWC}>
                                            <h5>
                                                <b>
                                                    Southwestern College
                                                </b>
                                            </h5>
                                            <div className='collapse-btn-spc' />
                                            <h5>
                                                {angleIconSix}
                                            </h5>
                                        </Button>
                                        <Collapse className='collapse-content' isOpen={this.state.collapseSWC}>
                                            <Card className='collapse-card'>
                                                <CardBody>
                                                    Southwestern College details
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
