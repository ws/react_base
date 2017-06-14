import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from '../lib/registerServiceWorker';

import App from './components/App';

import '../css/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
