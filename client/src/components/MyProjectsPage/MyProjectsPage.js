import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MyProjectsPage extends Component {

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
                                        <h3>
                                            <FontAwesomeIcon icon='certificate' />&emsp;About my projects:
                                        </h3>
                                        <hr />
                                        <p>
                                            This portfolio is composed of multiple projects that I have created, most of which
                                            have been deployed to Heroku. A couple of these projects were created as a group
                                            (labeled as "group project") during my time at the UC San Diego Coding Bootcamp, and
                                            the rest have been created by myself. I believe that hard work and practice is the
                                            key to master any skill. These projects have let me practice the skills I have
                                            learned over time and be creative when I code. Some of the technologies that have been
                                            used to create these projects are:
                                        </p>
                                        <div style={{ display: 'flex', overflowX: 'auto' }}>
                                            <ul>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>JavaScript</li>
                                                <li>jQuery</li>
                                                <li>Bootstrap</li>
                                            </ul>
                                            <ul>
                                                <li>Node.js</li>
                                                <li>React.js</li>
                                                <li>React Native</li>
                                                <li>Express.js</li>
                                                <li>MongoDB</li>
                                            </ul>
                                            <ul>
                                                <li>MySQL</li>
                                                <li>Reactstrap</li>
                                                <li>Expo</li>
                                                <li>RESTful APIs</li>
                                                <li>Axios</li>
                                            </ul>
                                            <ul>
                                                <li>W3Schools CSS</li>
                                                <li>Postman</li>
                                                <li>Mongoose</li>
                                                <li>Robo 3T</li>
                                                <li>Firebase</li>
                                            </ul>
                                            <ul>
                                                <li>Font Awesome</li>
                                                <li>Morgan</li>
                                            </ul>
                                        </div>
                                        <hr />
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

export default MyProjectsPage;
