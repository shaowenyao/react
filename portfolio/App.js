import React from 'react';
import {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import { MainRouter } from './components/mainRouter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./store/index";
import { addArticle } from "./actions/index";

window.store = store;
window.addArticle = addArticle;

const App = () => (
  <div>
  
  <BrowserRouter>
    <div>
      <Header />
      <MainRouter />
      { Footer }
    </div>
  </BrowserRouter>
  </div>
  )

export default App;