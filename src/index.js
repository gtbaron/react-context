import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import registerServiceWorker from "./registerServiceWorker"
import {Store} from "./root-store";

ReactDOM.render(
    <Store>
        <App/>
    </Store>,
    document.getElementById('root'));
registerServiceWorker();
