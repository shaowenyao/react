import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import { MainRouter } from './components/mainRouter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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