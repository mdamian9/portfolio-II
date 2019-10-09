import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Footer from '../Footer/Footer';
import ProjectCard from '../ProjectCard/ProjectCard';
import code_img from '../../assets/images/projects/code.png';
import rick_morty from '../../assets/images/projects/rick-morty.png';
import journey_on from '../../assets/images/projects/journey-on.png';
import crypto_site from '../../assets/images/projects/crypto-site.png';
import tournament_app from '../../assets/images/projects/tournament-app.png';
import tech_page from '../../assets/images/projects/tech-page.png';
import fcc_portfolio from '../../assets/images/projects/fcc-portfolio.png';
import iniesta_page from '../../assets/images/projects/iniesta-page.png';
import devspace from '../../assets/images/projects/devspace.png';
import dota from '../../assets/images/projects/dota.png';
import crypto_game from '../../assets/images/projects/crypto-game.png';
import train_app from '../../assets/images/projects/train-app.png';
import movie_app from '../../assets/images/projects/movie-app.png';
import gif_app from '../../assets/images/projects/gif-app.png';
import conFusion_1 from '../../assets/images/projects/conFusion-01.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MyProjectsPage extends Component {

    constructor(props) {
        super(props);
        this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
        this.backdropClickHandler = this.backdropClickHandler.bind(this);
        this.state = {
            sideDrawerOpen: false
        };
    };

    drawerToggleClickHandler = () => {
        this.setState(state => ({
            sideDrawerOpen: !state.sideDrawerOpen
        }));
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    render = () => {

        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        };

        return (
            <div style={{ height: "100%" }}>
                <Logo />
                <Navbar show={true} toggleSideDrawer={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <br />
                <Container style={{ maxWidth: '60%' }}>
                    <Row>
                        <Col>
                            <div className='bg-opaque' style={{ padding: '30px' }}>
                                <Card>
                                    <CardBody>
                                        <h3>
                                            <FontAwesomeIcon icon='certificate' />&emsp;About my projects:
                                        </h3>
                                        <hr />
                                        <p>
                                            This portfolio is composed of multiple projects that I have created, most of which
                                            have been deployed to Heroku. A couple of these projects were created as a group
                                            (labeled as "group project") during my time at the UC San Diego Coding Bootcamp, and
                                            the rest have been created by myself. I believe that hard work and practice is the
                                            key to master any skill. These projects have let me practice the skills I have
                                            learned over time and be creative when I code. Some of the technologies that have been
                                            used to create these projects are:
                                        </p>
                                        <div style={{ display: 'flex', overflowX: 'auto' }}>
                                            <ul>
                                                <li>
                                                    <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        HTML
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://developer.mozilla.org/en-US/docs/Web/CSS'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        CSS
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        JavaScript
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://jquery.com/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        jQuery
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://developer.mozilla.org/en-US/docs/Glossary/REST'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        RESTful APIs
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href='https://nodejs.org/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Node.js
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://reactjs.org/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        React.js
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://angularjs.org/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Angular.js
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://expressjs.com/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Express.js
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.mongodb.com/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        MongoDB
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href='https://getbootstrap.com/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Bootstrap
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.mysql.com/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        MySQL
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://reactstrap.github.io/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Reactstrap
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://expo.io/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Expo
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://facebook.github.io/react-native/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        React Native
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href='https://www.w3schools.com/w3css/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        W3Schools CSS
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.getpostman.com/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Postman
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://mongoosejs.com/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Mongoose.js
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://robomongo.org/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Robo 3T
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://firebase.google.com/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Firebase
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a href='https://fontawesome.com/'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Font Awesome
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.npmjs.com/package/@fortawesome/react-fontawesome'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        react-fontawesome
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.npmjs.com/package/morgan'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Morgan
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.npmjs.com/package/body-parser'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Body-Parser
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='https://www.npmjs.com/package/axios'
                                                        target='_blank' rel='noopener noreferrer'>
                                                        Axios
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <hr />
                                        <Row className='text-center'>
                                            <Col>
                                                <ProjectCard img={rick_morty}
                                                    title='Rick and Morty Clicking Game'
                                                    github='https://github.com/mdamian9/React-Clicking-Game'
                                                    web='https://react-clicking-game.herokuapp.com/'
                                                />
                                            </Col>
                                            <Col>
                                                <ProjectCard img={tournament_app}
                                                    title='Round Robin Tournament App'
                                                    github='https://github.com/mdamian9/tournament-app'
                                                    web='https://md-tournament-app.herokuapp.com/round-robin'
                                                />
                                            </Col>
                                            <Col>
                                                <ProjectCard img={journey_on}
                                                    title='Journey On (Group Project)'
                                                    github='https://github.com/mdamian9/Journey_On'
                                                    web='https://journeyonandon.herokuapp.com/'
                                                />
                                            </Col>
                                            <Col>
                                                <ProjectCard img={crypto_site}
                                                    title='Crypto Paper Trading'
                                                    github='https://github.com/mdamian9/cryptopapertrading-site'
                                                    web='https://cryptopapertrading.herokuapp.com/'
                                                />
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row className='text-center'>
                                            <Col>
                                                <ProjectCard img={code_img}
                                                    title='Coding Challenges'
                                                    github='https://github.com/mdamian9/coding-challenges'
                                                />
                                            </Col>
                                            <Col>
                                                <ProjectCard img={code_img}
                                                    title='Node RESTful Shop'
                                                    github='https://github.com/mdamian9/Node-REST-Shop'
                                                />
                                            </Col>
                                            <Col>
                                                <ProjectCard img={code_img}
                                                    title='Kitu Systems Coding Exercise'
                                                    github='https://github.com/mdamian9/KituCodingExercise'
                                                />
                                            </Col>
                                            <Col>
                                                <ProjectCard img={code_img}
                                                    title='Express-Firebase App'
                                                    github='https://github.com/mdamian9/express-firebase'
                                                />
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row className='text-center'>
                                            <Col>
                                                <ProjectCard img={code_img}
                                                    title='Algorithms and Data Structures Exercises'
                                                    github='https://github.com/mdamian9/freeCodeCamp-JS-Algos-DataStructures'
                                                />
                                            </Col>
                                            <Col>
                                                <ProjectCard img={tech_page}
                                                    title='Simple Documentation Page'
                                                    github='https://github.com/mdamian9/Technical-Documentation-Page'
                                                    web='https://mdamian9.github.io/Technical-Documentation-Page/'
                                                />
                                            </Col>
                                            <Col>
                                                <ProjectCard img={fcc_portfolio}
                                                    title='Sample Portfolio'
                                                    github='https://github.com/mdamian9/FCC-Personal-Portfolio'
                                                    web='https://mdamian9.github.io/FCC-Personal-Portfolio/'
                                                />
                                            </Col>
                                            <Col>
                                                <ProjectCard img={code_img}
                                                    title='Node-Mongoose App'
                                                    github='https://github.com/mdamian9/node-mongoose'
                                                />
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row className='text-center'>
                                            <Col>
                                                <ProjectCard img={iniesta_page}
                                                    title='Andres Iniesta Tribute Page'
                                                    github='https://github.com/mdamian9/Iniesta-Tribute-Page'
                                                    web='https://mdamian9.github.io/Iniesta-Tribute-Page/'
                                                />
                                            </Col>
                                            <Col>
                                                <ProjectCard img={devspace}
                                                    title='DevSpace (Group Project)'
                                                    github='https://github.com/mdamian9/DevSpace/'
                                                    web='https://therealdevspace.herokuapp.com/'
                                                />
                                            </Col>
                                            <Col>
                                                <ProjectCard img={dota}
                                                    title='Dota 2 ESPORTS Site (Group Project)'
                                                    github='https://github.com/mdamian9/project-1/'
                                                    web='https://mdamian9.github.io/project-1/'
                                                />
                                            </Col>
                                            <Col>
                                                <ProjectCard img={crypto_game}
                                                    title='Crypto Coin Collector Game'
                                                    github='https://github.com/mdamian9/unit-4-game'
                                                    web='https://mdamian9.github.io/unit-4-game/'
                                                />
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row className='text-center'>
                                            <Col>
                                                <ProjectCard img={code_img}
                                                    title='Node Cryptocurrency Trading App'
                                                    github='https://github.com/mdamian9/Crypto-Finances-Calculator'
                                                />
                                            </Col>
                                            <Col>
                                                <ProjectCard img={code_img}
                                                    title='Liri Node App'
                                                    github='https://github.com/mdamian9/liri-node-app'
                                                />
                                            </Col>
                                            <Col>
                                                <ProjectCard img={code_img}
                                                    title='Bamazon CLI Node App'
                                                    github='https://github.com/mdamian9/Bamazon-CLI-Node-App'
                                                />
                                            </Col>
                                            <Col>
                                                <ProjectCard img={train_app}
                                                    title='Train Schedule App'
                                                    github='https://github.com/mdamian9/Train-Schedule-App'
                                                    web='https://mdamian9.github.io/Train-Schedule-App/'
                                                />
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row className='text-center'>
                                            <Col>
                                                <ProjectCard img={movie_app}
                                                    title='Movie Reviewer App'
                                                    github='https://github.com/mdamian9/Movie-Reviewer-App'
                                                    web='https://mdamian9.github.io/Movie-Reviewer-App/'
                                                />
                                            </Col>
                                            <Col>
                                                <ProjectCard img={gif_app}
                                                    title='GIF Generator App'
                                                    github='https://github.com/mdamian9/GIF-Generator'
                                                    web='https://mdamian9.github.io/Movie-Reviewer-App/'
                                                />
                                            </Col>
                                            <Col>
                                                <ProjectCard img={conFusion_1}
                                                    title='Ristorante conFusion Website'
                                                    github='https://github.com/mdamian9/conFusion'
                                                    web='https://mdamian9.github.io/conFusion/'
                                                />
                                            </Col>
                                            <Col>
                                                <ProjectCard img={code_img}
                                                    title='Ristorante conFusion React Native App'
                                                    github='https://github.com/mdamian9/react-native-confusion'
                                                />
                                            </Col>
                                        </Row>
                                        <hr />
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <br />
                <Footer />
            </div>
        );
    };

};

export default MyProjectsPage;
