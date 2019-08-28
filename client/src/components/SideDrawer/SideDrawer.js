import React from 'react';
import './SideDrawer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideDrawer = props => {

    let drawerClasses = "side-drawer";
    if (props.show) {
        drawerClasses = "side-drawer open";
    };

    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/about-me"><FontAwesomeIcon icon='user-circle' />&nbsp;About Me</a></li>
                <li><a href="/code-portfolio"><FontAwesomeIcon icon='file-code' />&nbsp;Portfolio</a></li>
                <li><a href="/contact"><FontAwesomeIcon icon='envelope-square' />&nbsp;Contact</a></li>
                <li>
                    <a href="https://www.linkedin.com/in/migueldamian/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />&nbsp;LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://github.com/mdamian9" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} />&nbsp;Github
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default SideDrawer;
