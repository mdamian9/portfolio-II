import React, { Component } from 'react';
import { Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CollapseIRCV extends Component {

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
            <div className='collapse-div' id='collapse-ircv'>
                <Button className='collapse-btn' onClick={this.toggle}>
                    <h5>
                        <FontAwesomeIcon icon='tools' />&ensp;
                        <b>
                            iDevice Repair Chula Vista
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
                                <FontAwesomeIcon icon='calendar-alt' />&emsp;January 2013 - Present
                            </h6>
                            <Row>
                                <Col>
                                    <i><b>Co-Founder / CEO / Technician / Customer Service Specialist</b></i>
                                    <hr />
                                    <p>
                                        Started an electronic device repair business with my brother. We work with mostly Apple iPhone products, but have repaired
                                        others on occasion. We perform a plethora of hardware and iPhone software repairs such as repairing
                                        cracked screens, blown speakers, bad batteries, etc. All repairs are done at home, and we have
                                        many repeat clients that know we are reliable and professional to work with. I created and have
                                        maintained an Instagram account for our small business to date, in which we showcase our work
                                        and communicate with clients.<br /><br /> Link to Instagram page: <a href="https://instagram.com/idevicerepaircv" target="_blank" rel="noopener noreferrer">https://instagram.com/idevicerepaircv</a>
                                    </p>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );

    };

};

export default CollapseIRCV;
