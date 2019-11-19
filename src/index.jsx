import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from "./components/app/App";
import store from './store';

const Index = () => (<App/>);

ReactDOM.render(<Provider store={ store }><Index /></Provider>, document.getElementById('app-root'));
