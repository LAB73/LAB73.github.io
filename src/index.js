import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'sites/home';
import * as serviceWorker from './serviceWorker';
import 'sites/css/base.css';


//document.body.style = 'background: black;';

ReactDOM.render(
    <Home style={{
        margin: 0,
        color: 'black',

    }}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
