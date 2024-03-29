import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CollapseSDSU extends Component {

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
            <div className='collapse-div' id='collapse-sdsu'>
                <Button className='collapse-btn' onClick={this.toggle}>
                    <h5>
                        <FontAwesomeIcon icon='book-reader' />&ensp;
                        <b>
                            San Diego State University
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
                                <FontAwesomeIcon icon='calendar-alt' />&emsp;August 2017 - December 2017
                            </h6>
                            <hr />
                            <ul>
                                <li>
                                    Completed major prep courses towards the Computer Science degree during the Fall 2017 semester
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

export default CollapseSDSU;
