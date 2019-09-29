import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CollapseSWC extends Component {

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
            <div id='collapse-swc' style={{ marginBottom: 'none' }}>
                <Button className='collapse-btn' onClick={this.toggle}>
                    <h5>
                        <FontAwesomeIcon icon='book-reader' />&ensp;
                        <b>
                            Southwestern College
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
                                <FontAwesomeIcon icon='calendar-alt' />&emsp;August 2014 - May 2017
                            </h6>
                            <hr />
                            <ul>
                                <li>
                                    Completed undergraduate general education requirements
                                </li>
                                <li>
                                    Transferred to San Diego State University after the Spring 2017 semester
                                </li>
                            </ul>
                            <hr />
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );

    };

};

export default CollapseSWC;
