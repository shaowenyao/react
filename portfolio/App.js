import React from 'react';
import {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import { MainRouter } from './components/mainRouter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import store from "./store/index";
import { addArticle } from "./actions/index";
import ReduxList from './reduxcomponents/list.jsx';
import ReduxForm from './reduxcomponents/form.jsx';

window.store = store;
window.addArticle = addArticle;

const ReduxListContainer = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Articles</h2>
      <ReduxList />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Add a new article</h2>
      <ReduxForm />
    </div>
  </div>
); 

const App = () => (
  <div>
  <Provider store={store}>
    <ReduxListContainer />
  </Provider>
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