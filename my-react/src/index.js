import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import AppOne from './App.test';
import AppTwo from './AppTwo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppTwo />, document.getElementById('root'));
ReactDOM.render(<AppOne/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
