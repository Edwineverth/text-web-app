import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./App";

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);

// Opt-in to Webpack hot module replacement
if (module.hot) {
    module.hot.accept()
}