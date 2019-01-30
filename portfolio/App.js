import React from 'react';
import {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import { MainRouter } from './components/mainRouter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { render } from 'react-dom'
import store from "./store/index";
import { addArticle } from "./actions/index";

window.store = store;
window.addArticle = addArticle;

class ExampleComponent extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        { title: "React Redux Tutorial for Beginners", id: 1 },
        { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
      ]
    };
  }
  render() {
    const { articles } = this.state;
    return <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>;
  }
}

const App = () => (
  <BrowserRouter>
    <div>
      <ExampleComponent></ExampleComponent>
      <Header />
      <MainRouter />
      { Footer }
    </div>
  </BrowserRouter>
  )

export default App;