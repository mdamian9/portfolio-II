import React from 'react';
import '../Logo/Logo.css';
import logo_img from '../../assets/images/logo.jpg';

const Logo = () => (
    <div className="md-logo">
        <img className="md-logo__logo" src={logo_img} alt="md-logo" />
    </div>
);

export default Logo;
