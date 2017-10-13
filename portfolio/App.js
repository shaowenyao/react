import React, { Component } from 'react';
import logo from './img/work_thumbnail.jpg';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const numbers = [
{ target_str: "/work/0", img: require('./img/work_thumbnail.jpg') },
{ target_str: "/work/1", img: require('./img/work_thumbnail2.jpg') },
{ target_str: "/work/2", img: require('./img/work_thumbnail3.jpg') }
]
const listItems = numbers.map((number) =>
  <li key={number.img.toString()}><a href={number.target_str}> <img src={number.img} /> </a></li>
  );
const Work_Page_Array = [
{ project_name: "project 0", img: require('./img/work_thumbnail.jpg') },
{ project_name: "project 1", img: require('./img/work_thumbnail2.jpg') }
]

const Home_content = (
  <div>
  <h2>Home</h2>
  </div>
  );

const About_content = (
  <div class="about_page">
  EDUCATION + SKILLS
  Bachelor of Arts, University of California, Davis, 2008
  HTML5 + CSS3 + LESS/SASS + jQuery
  Javascript + ReactJS + Angular + Cordova + NPM + Github | Mobile Development
  UI design + templates + wireframes
  Salesforce VisualForce | Certified Developer Winter 14
  Bootstrap + Wordpress + Drupal + GSI Commerce
  Adobe Creative Suite 6
  Actionscript + Flash Animation
  Media Production: Photography + Videography

  </div>
  );

const Work_Page = ({ match }) => (
  <div>
  {Work_Page_Array[match.params.Work_Page].project_name}
  <img src={Work_Page_Array[match.params.Work_Page].img} />
  </div>
  )

const Contact_content = (
  <div class="contact_page">
  <h2>Contact</h2>
  <p><a href="mailto:dsydesign@gmail.com">dsydesign@gmail.com</a></p>
  <p><a href="https://github.com/shaowenyao">github.com/shaowenyao</a></p>
  <p><a href="https://www.linkedin.com/in/shaowenyao">linkedin.com/in/shaowenyao</a></p>
  <p><a href="resume.docx">Resume [Word]</a></p>
  </div>
  );

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


const Home = () => (
  <div > {Home_content} </div>
  )

const About = () => (
  <div> {About_content} </div>
  )

const Work = ({ match }) => (
  <div class="work_page">
  <h2>Work</h2>
  <Route path={`${match.url}/:Work_Page`} component={Work_Page}/>
  <Route exact path={match.url} render={() => (
    <div>{listItems}</div>
    )}/>
  </div>
  )

const Contact = () => (
  <div> {Contact_content} </div> 
  )

const App = () => (
  <div>
  <Header />
  <Main />
  </div>
  )

export default App;