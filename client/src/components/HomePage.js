import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import Logo from './Logo';

const HomePage = () => {
    return (
        <div className='homePage'>
            <Logo />
            <Container className='text-center'>
                <Row>
                    <Col>
                        HomePage
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;
