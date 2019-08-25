import React from 'react';
import './SideDrawer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';

const DrawerToggleButton = props => {
    return (
        <Button className='toggle-btn' onClick={props.toggleSideDrawer}>
            <FontAwesomeIcon icon='bars' size='2x' />
        </Button>
    );
};

export default DrawerToggleButton;
