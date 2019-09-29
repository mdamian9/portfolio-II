import React, { Component } from 'react';
import { Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fcc_1 from '../../assets/images/fcc-01.png';
import fcc_2 from '../../assets/images/fcc-02.png';

class CollapseFCC extends Component {

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
            <div className='collapse-div' id='collapse-fcc'>
                <Button className='collapse-btn' onClick={this.toggle}>
                    <h5>
                        <FontAwesomeIcon icon='award' />&ensp;
                        <b>
                            freeCodeCamp (Online Learning Platform)
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
                                <FontAwesomeIcon icon='calendar-alt' />&emsp;November 2018 - Present
                                <br />
                                <FontAwesomeIcon icon='certificate' />&emsp;Full Stack Development
                            </h6>
                            <hr />
                            <p>
                                Completing a rigorous curriculum offered by <a href='https://freecodecamp.org/' target='_blank' rel='noopener noreferrer'>freeCodeCamp</a> to obtain their Full Stack Developer
                                Certification. There are six freeCodeCamp certificates, which are earned by completing the
                                corresponding curriculum and required projects at <a href='https://learn.freecodecamp.org/' target='_blank' rel='noopener noreferrer'>learn.freecodecamp.org</a>:
                            </p>
                            <ul>
                                <li>Responsive Web Design</li>
                                <li>Algorithms and Data Structures</li>
                                <li>Front-End Libraries</li>
                                <li>Data Visualization</li>
                                <li>APIs and Microservices</li>
                                <li>Information Security and Quality Assurance</li>
                            </ul>
                            <p>
                                Upon completion of all six certificates, the freeCodeCamp Full Stack Development Program
                                Certificate will be issued. This final distinction signifies completion of approximately 1,800
                                hours of coding with exposure to a wide range of web development tools.
                            </p>
                            <hr />
                            <Row>
                                <Col>
                                    <i><b>Responsive Web Design</b></i>
                                    <a href='https://bit.ly/2m0YbYj' target='_blank' rel='noopener noreferrer'>
                                        <img className='cert' src={fcc_1} alt='fcc-01' />
                                    </a>
                                </Col>
                                <Col>
                                    <i><b>JavaScript Algorithms and Data Structures</b></i>
                                    <a href='https://bit.ly/2kquSxR' target='_blank' rel='noopener noreferrer'>
                                        <img className='cert' src={fcc_2} alt='fcc-02' />
                                    </a>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );

    };

};

export default CollapseFCC;
