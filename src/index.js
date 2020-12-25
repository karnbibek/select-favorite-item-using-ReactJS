import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Planets from './components/Planets';
import Favorite from './components/Favorite';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path="/" exact component={Planets} />
      <Route path="/favorites" exact component={Favorite} />
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);