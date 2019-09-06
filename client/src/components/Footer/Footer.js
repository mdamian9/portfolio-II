import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className='footer'>
            <nav className='footer__navigation'>
                <div className='footer__nav-items'>
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
            </nav>


            {/* <a href='https://github.com/mdamian9'><FontAwesomeIcon icon={['fab', 'github']} /> GitHub</a>
            &ensp;
            <a href='https://github.com/mdamian9'><FontAwesomeIcon icon={['fab', 'github']} /> GitHub</a> */}
        </footer>
    );
};

export default Footer;
