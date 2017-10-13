import React, { Component } from 'react';
import logo from './img/work_thumbnail.jpg';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


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
  );


const numbers = [
{ target_str: "/work/:a1", img: require('./img/work_thumbnail.jpg') },
{ target_str: "/work/:a2", img: require('./img/work_thumbnail2.jpg') },
{ target_str: "/work/:a3", img: require('./img/work_thumbnail3.jpg') },
]
const teststr="test";
const listItems = numbers.map((number) =>
  <li key={number.img.toString()}><a href={number.target_str}> <img src={number.img} /> </a></li>
  );

const Contact_content = (
  <div >
  <h1>Contact</h1>
  <p><a href="mailto:dsydesign@gmail.com">dsydesign@gmail.com</a></p>
  <p><a href="https://github.com/shaowenyao">github.com/shaowenyao</a></p>
  <p><a href="https://www.linkedin.com/in/shaowenyao">linkedin.com/in/shaowenyao</a></p>
  <p><a href="resume.docx">Resume [Word]</a></p>
  </div>
  );



const Home = () => (
  <div>Homepage</div>
  )

const About = () => (
  <div>About</div>
  )

const Work = ({ match }) => (
  <div>
  Work
  <Route exact path={match.url} render={() => (
    <div>{listItems}</div>
    )}/>
  </div>
  )

const Contact = () => (
  <div> {Contact_content}</div> 
  )
const App = () => (
  <div>
  <Header />
  <Main />
  </div>
  )

export default App;