import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectCard = props => {

    let webLink, space;

    if (props.web) {
        webLink =
            <a href={props.web} target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon='globe' />
            </a>;
        space = <div style={{ width: '10px' }} />
    };

    return (
        <Card>
            <CardImg src={props.img} />
            <CardBody>
                <CardTitle>
                    {props.title}
                </CardTitle>
                <CardSubtitle style={{ display: 'flex', justifyContent: 'center' }}>
                    <a href={props.github} target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                    {space}
                    {webLink}
                </CardSubtitle>
            </CardBody>
        </Card>
    );

};

export default ProjectCard;
