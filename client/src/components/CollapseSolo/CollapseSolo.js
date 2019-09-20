import React, { Component } from 'react';
import { Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import solo_1 from '../../assets/images/sololearn-html.jpg';

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
                            <Row>
                                <Col>
                                    <i><b>HTML Fundamentals</b></i>
                                    <a href='https://bit.ly/2mrprzv' target='_blank' rel='noopener noreferrer'><img className='cert' src={solo_1} alt='solo-01' /></a>
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                </Col>
                                <Col>
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
