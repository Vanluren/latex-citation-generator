import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainView from './views/main-view/main-view-container';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainView />, document.getElementById('root'));
registerServiceWorker();
