import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import serviceWorker from './serviceWorker';

ReactDOM.render(<App appTitle="Person Manager"/>, document.getElementById('root'));
serviceWorker();
