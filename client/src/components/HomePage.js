import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import Logo from './Logo';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sideDrawerOpen: false,
            navbarShowing: false
        };
    };

    render = () => {
        return (
            <div className='homePage'>
                <Logo />
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
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
};

export default HomePage;
