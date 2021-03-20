import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {StateProvider} from './StateProvider';
import reducer,{ initialState } from './reducer';

ReactDOM.render(
  <BrowserRouter>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
















// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

