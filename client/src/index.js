import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle, faFileCode, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import App from './App';
import * as serviceWorker from './serviceWorker';

// Add font awesome icons to library
library.add(fab, faUserCircle, faFileCode, faEnvelopeSquare);

ReactDOM.render(
    <Router>
        <Route exact path='/' component={App} />
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
