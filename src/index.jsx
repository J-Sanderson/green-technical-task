import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import './styles/app.scss';

const element = <Main />;
ReactDOM.render(
   element,
   document.getElementById('app')
);