import React from 'react';
import '../Navbar/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Navbar = props => {

    let navbarClasses = 'toolbar';

    if (props.page === 'homePage') {
        navbarClasses += ' fade-in hide-bg';
    };

    if (!props.show) {
        navbarClasses = 'toolbar hide-content'
    };

    return (
        <header className={navbarClasses}>
            <nav className='toolbar__navigation'>
                <div className='toolbar__logo'>
                    <a href='/' style={{ fontSize: '1.5rem' }}>
                        <FontAwesomeIcon icon='angle-double-right' />
                        &nbsp;HOME
                    </a>
                </div>
                <div className='toolbar-spacer' />
                <div className='toolbar__nav-items'>
                    <ul>
                        <li><a href='/about-me'><FontAwesomeIcon icon='user-circle' />&nbsp;About Me</a></li>
                        <li><a href='/code-portfolio'><FontAwesomeIcon icon='file-code' />&nbsp;Portfolio</a></li>
                        <li><a href='/contact'><FontAwesomeIcon icon='envelope-square' />&nbsp;Contact</a></li>
                        <li>
                            <a href='https://www.linkedin.com/in/migueldamian/' target='_blank' rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />&nbsp;LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/mdamian9' target='_blank' rel='noopener noreferrer'>
                                <FontAwesomeIcon icon={['fab', 'github']} />&nbsp;Github
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='drawer-toggle-btn'>
                    <DrawerToggleButton toggleSideDrawer={props.toggleSideDrawer} />
                </div>
            </nav>
        </header>
    );

};

export default Navbar;
