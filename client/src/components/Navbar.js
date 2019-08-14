import React from 'react';
import '../assets/css/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = props => {

    let navbarClasses = 'navbar-component';

    return (
        <div className={navbarClasses}>
            <header className="navbar">
                <nav className=''>
                    <div></div>
                    <div></div>
                    <div>
                        <ul>
                            <li><a href='/about-me'><FontAwesomeIcon icon='user-circle' />&nbsp;About Me</a></li>
                            <li><a href='/code-portfolio'><FontAwesomeIcon icon='file-code' />&nbsp;Code Portfolio</a></li>
                            <li><a href='/contact'><FontAwesomeIcon icon='envelope-square' />&nbsp;Contact</a></li>
                            <li>
                                <a href='https://www.linkedin.com/in/migueldamian/' target='_blank' rel='noopener noreferrer'>
                                    <FontAwesomeIcon icon={['fab', 'linkedin']} />&nbsp;LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/mdamian9" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={['fab', 'github']} />&nbsp;Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );

};

export default Navbar;
