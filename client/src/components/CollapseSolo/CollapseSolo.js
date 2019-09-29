import React, { Component } from 'react';
import { Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import solo_1 from '../../assets/images/sololearn-html.jpg';
import solo_2 from '../../assets/images/sololearn-css.jpg';
import solo_3 from '../../assets/images/sololearn-js.jpg';
import solo_4 from '../../assets/images/sololearn-jq.jpg';

class CollapseSolo extends Component {

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
            <div className='collapse-div' id='collapse-solo'>
                <Button className='collapse-btn' onClick={this.toggle}>
                    <h5>
                        <FontAwesomeIcon icon='award' />&ensp;
                        <b>
                            SoloLearn (Online Learning Platform)
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
                                <FontAwesomeIcon icon='calendar-alt' />&emsp;October 2018 - November 2018
                                <br />
                                <FontAwesomeIcon icon='certificate' />&emsp;Web Development Fundamentals
                            </h6>
                            <hr />
                            <p>
                                Completed a series of short courses and obtained certificates offered by <a href='https://www.sololearn.com/' target='_blank' rel='noopener noreferrer'>SoloLearn</a>,
                                an online learning platform. SoloLearn is a great platform to learn that has a wide community of users from
                                all experience levels. Users can interact with each other, complete coding challenges and review each other's code.
                                Obtained the following certificates:
                            </p>
                            <ul>
                                <li>HTML Fundamentals</li>
                                <li>CSS Fundamentals</li>
                                <li>JavaScript Fundamentals</li>
                                <li>jQuery Fundamentals</li>
                            </ul>
                            <hr />
                            <Row>
                                <Col>
                                    <i><b>HTML Fundamentals</b></i>
                                    <a href='https://bit.ly/2mrprzv' target='_blank' rel='noopener noreferrer'><img className='cert' src={solo_1} alt='solo-01' /></a>
                                </Col>
                                <Col>
                                    <i><b>CSS Fundamentals</b></i>
                                    <a href='https://bit.ly/2kxcQKz' target='_blank' rel='noopener noreferrer'><img className='cert' src={solo_2} alt='solo-02' /></a>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <i><b>JavaScript Fundamentals</b></i>
                                    <a href='https://bit.ly/2kWDOLC' target='_blank' rel='noopener noreferrer'><img className='cert' src={solo_3} alt='solo-03' /></a>
                                </Col>
                                <Col>
                                    <i><b>jQuery Fundamentals</b></i>
                                    <a href='https://bit.ly/2m0BIL8' target='_blank' rel='noopener noreferrer'><img className='cert' src={solo_4} alt='solo-04' /></a>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );

    };

};

export default CollapseSolo;
