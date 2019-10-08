import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectCard = props => {

    let webLink, space;

    if (props.web) {
        webLink =
            <h4 style={{ marginBottom: '0px' }}>
                <a href={props.web} target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon='globe' size='1x' />
                </a>
            </h4>;
        space = <div style={{ width: '10px' }} />
    };

    return (
        <Card style={{ height: '100%' }}>
            <CardImg src={props.img} style={{ width: '100%', maxHeight: '150px' }} />
            <CardBody style={{ padding: '10px' }}>
                <CardTitle>
                    <b>{props.title}</b>
                </CardTitle>
                <CardSubtitle>
                    <h4 style={{ marginBottom: '0px', display: 'flex', justifyContent: 'center' }}>
                        <a href={props.github} target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={['fab', 'github']} size='1x' />
                        </a>
                        {space}
                        {webLink}
                    </h4>
                </CardSubtitle>
            </CardBody>
        </Card>
    );

};

export default ProjectCard;
