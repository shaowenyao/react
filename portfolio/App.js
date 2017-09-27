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
{ target_str: "#1", img: "./img/work_thumbnail.jpg" },
{ target_str: "#2", img: "./img/work_thumbnail2.jpg" },
{ target_str: "#3", img: "./img/work_thumbnail3.jpg" },
]
const listItems = numbers.map((number) =>
  <li key={number.img.toString()}><a href={number.target_str}> <img src={number.img} /> {number.img} </a></li>
  );

const Contact_content = (
  <div >
  <h1>Contact</h1>
  <p><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> <a href="mailto:dsydesign@gmail.com">dsydesign@gmail.com</a></p>
  <p><span class="glyphicon glyphicon-object-align-left" aria-hidden="true"></span><a href="https://github.com/shaowenyao">github.com/shaowenyao</a></p>
  <p><span class="glyphicon glyphicon-paperclip" aria-hidden="true"></span><a href="https://www.linkedin.com/in/shaowenyao">linkedin.com/in/shaowenyao</a></p>
  <p><span class="glyphicon glyphicon-text-color" aria-hidden="true"></span><a href="resume.docx">Resume [Word]</a></p></div>
  );



const Home = () => (
  <div>Homepage</div>
  )

const About = () => (
  <div>About</div>
  )

const Work = () => (
  <div>Work  {listItems}  <img src={logo} /> </div>
//
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