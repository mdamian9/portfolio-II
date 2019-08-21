import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sideDrawerOpen: false,
            navbarShowing: false,
            activePage: 'homePage'
        };
        this.navbarToggleClickHandler = this.navbarToggleClickHandler.bind(this);
    };

    navbarToggleClickHandler = () => {
        this.setState(() => {
            return { navbarShowing: true };
        });
    };

    render = () => {
        return (
            <div className='home-page'>
                <Logo />
                <Navbar
                    show={this.state.navbarShowing}
                    page={this.state.activePage}
                />
                <Container className='text-center text-white' style={{ marginTop: '75px' }}>
                    <Row>
                        <Col>
                            <h1>
                                <b>Welcome.</b>
                            </h1>
                            <h3 className='intro'>
                                My name is Miguel Damian, and I am a Full Stack Web Developer.<br />
                                I specialize in working with <a href="https://reactjs.org/">React</a>, <a href="https://facebook.github.io/react-native/">React Native</a>, and the <a href="https://www.mongodb.com/what-is-mongodb" target="_blank" rel="noopener noreferrer">
                                    M
                                </a>
                                <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                                    E
                                </a>
                                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                                    R
                                </a>
                                <a href="https://nodejs.org/en/about/" target="_blank" rel="noopener noreferrer">
                                    N
                                </a> stack.
                            </h3>
                            <Button className='btn-dark nav-btn' onClick={this.navbarToggleClickHandler}>
                                <b>Navigate</b>
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <br />
            </div>
        );
    };
};

export default HomePage;
