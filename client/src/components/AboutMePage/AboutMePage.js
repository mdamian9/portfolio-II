import React, { Component } from 'react';
import './AboutMePage.css';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Footer from '../Footer/Footer';
import me from '../../assets/images/img-03.jpg';
import resume from '../../assets/files/Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CollapseUCSD from '../CollapseUCSD/CollapseUCSD';
import CollapseHKUST from '../CollapseHKUST/CollapseHKUST';
import CollapseFCC from '../CollapseFCC/CollapseFCC';
import CollapseSolo from '../CollapseSolo/CollapseSolo';
import CollapseSDSU from '../CollapseSDSU/CollapseSDSU';
import CollapseSWC from '../CollapseSWC/CollapseSWC';
import CollapseINO from '../CollapseINO/CollapseINO';
import CollapseIRCV from '../CollapseIRCV/CollapseIRCV';
import CollapseSwiss from '../CollapseSwiss/CollapseSwiss';

class AboutMePage extends Component {

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
                                            <a href={resume} target="_blank" rel="noopener noreferrer">Resume (PDF)</a>
                                        </p>
                                    </div>
                                    <hr />
                                    <div className='about-me-bullets'>
                                        <h4><b><FontAwesomeIcon icon='globe' className='fa-bullet' />Languages</b></h4>
                                        <b>•&ensp;English</b>
                                        <div className='fluent-lang'>Fluent</div>
                                        <br />
                                        <b>•&ensp;Spanish</b>
                                        <div className='fluent-lang'>Fluent</div>
                                    </div>
                                    <br />
                                    <div className='about-me-bullets'>
                                        <h4><b><FontAwesomeIcon icon='star' className='fa-bullet' />Skills</b></h4>
                                        <Card>
                                            <CardBody style={{ overflowX: "auto", marginRight: '50px' }}>
                                                <table style={{ width: "100%" }}>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <ul>
                                                                    <li>HTML5</li>
                                                                    <li>CSS3</li>
                                                                    <li>JavaScript</li>
                                                                    <li>jQuery</li>
                                                                </ul>
                                                            </td>
                                                            <td>
                                                                <ul>
                                                                    <li>React.js</li>
                                                                    <li>React Native</li>
                                                                    <li>Node.js</li>
                                                                    <li>Express.js</li>
                                                                </ul>
                                                            </td>
                                                            <td>
                                                                <ul>
                                                                    <li>Bootstrap</li>
                                                                    <li>Reactstrap</li>
                                                                    <li>MongoDB</li>
                                                                    <li>MySQL</li>
                                                                </ul>
                                                            </td>
                                                            <td>
                                                                <ul>
                                                                    <li>Command Line</li>
                                                                    <li>Git</li>
                                                                    <li>GitHub</li>
                                                                    <li>Heroku</li>
                                                                </ul>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </CardBody>
                                        </Card>
                                    </div>
                                    <br />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <br />
                    <Container className='section-two'>
                        <Row>
                            <Col>
                                <div className='bg-opaque' style={{ padding: '30px' }}>
                                    <h2 style={{ marginBottom: '20px' }}>
                                        <FontAwesomeIcon icon='graduation-cap' className='text-red' />&ensp;<b>Education</b>
                                    </h2>
                                    <CollapseHKUST />
                                    <CollapseUCSD />
                                    <CollapseFCC />
                                    <CollapseSolo />
                                    <CollapseSDSU />
                                    <CollapseSWC />
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <div className='bg-opaque' style={{ padding: '30px' }}>
                                    <h2 style={{ marginBottom: '20px' }}>
                                        <FontAwesomeIcon icon='briefcase' className='text-red' />&ensp;<b>Experience</b>
                                    </h2>
                                    <CollapseINO />
                                    <CollapseIRCV />
                                    <CollapseSwiss />
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
