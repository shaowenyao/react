import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import { MainRouter } from './components/mainRouter';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <MainRouter />
      { Footer }
    </div>
  </BrowserRouter>
  )

export default App;