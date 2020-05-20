import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss'
import App from './App';
import {FirebaseState} from "./store/firebase/firebaseState";

ReactDOM.render(
    <FirebaseState>
        <App />
    </FirebaseState>,
  document.getElementById('root')
);