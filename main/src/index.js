import React from 'react';
import { render } from 'react-dom';
import App from './App';

const root = document.getElementById('react-root')
console.log('root', root);

render(
    <App />,
    root,
);
