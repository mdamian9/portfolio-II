import React, { Component } from 'react';
import { Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ucsdCert from '../../assets/images/ucsd_webdev_cert.jpg';

class CollapseUCSD extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    };

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    };

    render() {

        let angleIcon;
        if (this.state.collapse === false) {
            angleIcon = <FontAwesomeIcon icon='angle-double-down' />;
        } else {
            angleIcon = <FontAwesomeIcon icon='angle-double-up' />;
        };

        return (
            <div className='collapse-div' id='collapse-ucsd'>
                <Button className='collapse-btn' onClick={this.toggle}>
                    <h5>
                        <FontAwesomeIcon icon='award' />&ensp;
                        <b>
                            University of California, San Diego Extension
                        </b>
                    </h5>
                    <div className='collapse-btn-spc' />
                    <h5>
                        {angleIcon}
                    </h5>
                </Button>
                <Collapse className='collapse-content' isOpen={this.state.collapse}>
                    <Card className='collapse-card'>
                        <CardBody>
                            <h6 className='text-red'>
                                <FontAwesomeIcon icon='calendar-alt' />&emsp;June 4, 2018 - August 28, 2019
                                <br />
                                <FontAwesomeIcon icon='certificate' />&emsp;Full-Stack Web Development Coding Bootcamp
                            </h6>
                            <hr />
                            <p>
                                Completed an intensive full-stack web development program offered by University of California, San Diego 
                                through <a href='https://extension.ucsd.edu/' target='_blank' rel='noopener noreferrer'>UCSD Extension</a>. Learned the following skills / technologies:
                            </p>
                            <div style={{ display: 'flex' }}>
                                <ul style={{marginBottom: '0px'}}>
                                    <li>HTML</li>
                                    <li>CSS3</li>
                                    <li>Bootstrap</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                </ul>
                                <ul style={{marginBottom: '0px'}}>
                                    <li>MongoDB</li>
                                    <li>Express.js</li>
                                    <li>React.js</li>
                                    <li>Node.js</li>
                                    <li>MySQL</li>
                                </ul>
                                <ul style={{marginBottom: '0px'}}>
                                    <li>Command Line</li>
                                    <li>Git</li>
                                    <li>GitHub</li>
                                    <li>Heroku</li>
                                    <li>Firebase</li>
                                </ul>
                            </div>
                            <hr />
                            <Row>
                                <Col>
                                    <img className='cert' src={ucsdCert} alt='ucsd-cert' />
                                </Col>
                                <Col>
                                    <ul>
                                        <li>250 hours of instruction</li>
                                        <li>350+ hours of work outside of class</li>
                                        <li>15 individual projects completed</li>
                                        <li>3 web applications completed (group projects)</li>
                                    </ul>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Collapse>
            </div >
        );

    };

};

export default CollapseUCSD;
