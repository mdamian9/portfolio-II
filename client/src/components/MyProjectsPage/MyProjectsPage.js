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
                                                <li>
                                                    <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        HTML
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://developer.mozilla.org/en-US/docs/Web/CSS'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        CSS
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        JavaScript
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://developer.mozilla.org/en-US/docs/Glossary/REST'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        RESTful APIs
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://jquery.com/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        jQuery
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href='https://nodejs.org/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Node.js
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://reactjs.org/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        React.js
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://facebook.github.io/react-native/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        React Native
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://expressjs.com/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Express.js
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.mongodb.com/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        MongoDB
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href='https://getbootstrap.com/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Bootstrap
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.mysql.com/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        MySQL
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://reactstrap.github.io/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Reactstrap
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://expo.io/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Expo
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.npmjs.com/package/axios'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Axios
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href='https://www.w3schools.com/w3css/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        W3Schools CSS
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.getpostman.com/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Postman
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://mongoosejs.com/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Mongoose.js
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://robomongo.org/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Robo 3T
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://firebase.google.com/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Firebase
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href='https://fontawesome.com/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Font Awesome
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.npmjs.com/package/@fortawesome/react-fontawesome'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        react-fontawesome
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.npmjs.com/package/morgan'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Morgan
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.npmjs.com/package/body-parser'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Body-Parser
                                                    </a>
                                                </li>
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
