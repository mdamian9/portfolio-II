import React from 'react';
import '../assets/css/Navbar.css';

const Navbar = props => {

    let navbarClasses = 'navbar-component';

    return (
        <div className={navbarClasses}>
            <header>
                <nav>
                    <div></div>
                    <div></div>
                    <div></div>
                </nav>
            </header>
        </div>
    );

};

export default Navbar;
