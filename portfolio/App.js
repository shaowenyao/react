import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

const Header = () => (
  <header>
  <nav>
  <ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/work">Work</Link></li>
  <li><Link to="/contact">Contact</Link></li>
  </ul>
  </nav>
  </header>
  )

const Main = () => (
  <main>
  <Switch>
  <Route exact path="/" component={Home} />
  <Route path = "/about" component={About} />
  <Route path = "/work" component={Work} />
  <Route path = "/contact" component={Contact} />
  </Switch>
  </main>
  )

const Home = () => (
  <div>Homepage</div>
  )

const About = () => (
  <div>About</div>
  )

const Work = () => (
  <div>Work</div>
  )

const Contact = () => (
  <div>Contact</div>
  )
const App = () => (
  <div>
  <Header />
  <Main />
  </div>
  )

export default App;