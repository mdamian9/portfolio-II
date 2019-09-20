import React, { Component } from 'react';
import { Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CollapseHKUST.css';
import hkust_1 from '../../assets/images/hkust-01.jpg';
import hkust_2 from '../../assets/images/hkust-02.jpg';
import hkust_3 from '../../assets/images/hkust-03.jpg';
import hkust_4 from '../../assets/images/hkust-04.jpg';
import hkust_5 from '../../assets/images/hkust-05.jpg';

class CollapseHKUST extends Component {

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
            <div className='collapse-div' id='collapse-hkust'>
                <Button className='collapse-btn' onClick={this.toggle}>
                    <h5>
                        <FontAwesomeIcon icon='award' />&ensp;
                        <b>
                            Hong Kong University of Science and Technology (through Coursera)
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
                                <FontAwesomeIcon icon='calendar-alt' />&emsp;November 2018 - January 2019
                                <br />
                                <FontAwesomeIcon icon='certificate' />&emsp;Full-Stack Web Development with React Specialization
                            </h6>
                            <Row>
                                <Col>
                                    <i><b>Front-End Web UI Frameworks and Tools: Bootstrap 4</b></i>
                                    <a href='https://bit.ly/2lW8UmO' target='_blank' rel='noopener noreferrer'><img className='cert' src={hkust_1} alt='hkust-01' /></a>
                                    {/* <b>Link: <a href='https://bit.ly/2lW8UmO' target='_blank' rel='noopener noreferrer'>https://bit.ly/2lW8UmOs</a></b> */}
                                </Col>
                                <Col>
                                    <i><b>Front-End Web Development with React</b></i>
                                    <a href='https://bit.ly/2mfd0Xg' target='_blank' rel='noopener noreferrer'><img className='cert' src={hkust_2} alt='hkust-02' /></a>
                                    {/* <b>Link: <a href='https://bit.ly/2mfd0Xg' target='_blank' rel='noopener noreferrer'>https://bit.ly/2mfd0Xg</a></b> */}
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <i><b>Multiplatform Mobile App Development with React Native</b></i>
                                    <a href='https://bit.ly/2mnr01n' target='_blank' rel='noopener noreferrer'><img className='cert' src={hkust_3} alt='hkust-03' /></a>
                                    {/* <b>Link: <a href='https://bit.ly/2mnr01n' target='_blank' rel='noopener noreferrer'>https://bit.ly/2mnr01n</a></b> */}
                                </Col>
                                <Col>
                                    <i><b>Server-side Development with NodeJS, Express and MongoDB</b></i>
                                    <a href='https://bit.ly/2kFLCBC' target='_blank' rel='noopener noreferrer'><img className='cert' src={hkust_4} alt='hkust-04' /></a>
                                    {/* <b>Link: <a href='https://bit.ly/2kFLCBC' target='_blank' rel='noopener noreferrer'>https://bit.ly/2kFLCBC</a></b> */}
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <i><b>Specialization Certificate</b></i>
                                    <a href='https://bit.ly/2kmpMCL' target='_blank' rel='noopener noreferrer'><img className='cert' src={hkust_5} alt='hkust-05' /></a>
                                    {/* <b>Link: <a href='https://bit.ly/2kmpMCL' target='_blank' rel='noopener noreferrer'>https://bit.ly/2kmpMCL</a></b> */}
                                </Col>
                                <Col></Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );

    };

};

export default CollapseHKUST;
