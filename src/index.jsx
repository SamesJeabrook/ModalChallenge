import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import store from './store';
import {Provider} from 'react-redux';

const Index = () => {
  return(<App/>)
}

ReactDOM.render(<Provider store={store()}><Index /></Provider>, document.getElementById("app-root"));
