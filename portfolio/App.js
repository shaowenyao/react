import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import {Mobile_header, Main} from './components/menu';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Main />
      { Footer }
    </div>
  </BrowserRouter>
  )

export default App;