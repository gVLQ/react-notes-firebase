import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCT2ByOASWH9R8z23n4SjYf6VYzsdmJiZ4",
    authDomain: "react-notes-a2563.firebaseapp.com",
    databaseURL: "https://react-notes-a2563.firebaseio.com",
    projectId: "react-notes-a2563",
    storageBucket: "react-notes-a2563.appspot.com",
    messagingSenderId: "710535014401",
    appId: "1:710535014401:web:2484cf48cb0963b6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('react-notes'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
