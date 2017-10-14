import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const numbers = [
{ target_str: "/work/1", img: require('./img/work_thumbnail01.jpg') },
{ target_str: "/work/2", img: require('./img/work_thumbnail02.jpg') },
{ target_str: "/work/3", img: require('./img/work_thumbnail03.jpg') },
{ target_str: "/work/4", img: require('./img/work_thumbnail04.jpg') },
{ target_str: "/work/5", img: require('./img/work_thumbnail05.jpg') },
{ target_str: "/work/6", img: require('./img/work_thumbnail06.jpg') },
{ target_str: "/work/7", img: require('./img/work_thumbnail07.jpg') },
{ target_str: "/work/8", img: require('./img/work_thumbnail08.jpg') },
{ target_str: "/work/9", img: require('./img/work_thumbnail09.jpg') }
]
const listItems = numbers.map((number) =>
  <li key={number.img.toString()}><a href={number.target_str}> <img src={number.img} /> </a></li>
  );
const Work_Page_Array = [
{ project_name: "project 1", img: require('./img/work01.jpg') },
{ project_name: "project 2", img: require('./img/work02.jpg') },
{ project_name: "project 3", img: require('./img/work03.jpg') },
{ project_name: "project 4", img: require('./img/work04.jpg') },
{ project_name: "project 5", img: require('./img/work05.jpg') },
{ project_name: "project 6", img: require('./img/work06.jpg') },
{ project_name: "project 7", img: require('./img/work07.jpg') },
{ project_name: "project 8", img: require('./img/work08.jpg') },
{ project_name: "project 9", img: require('./img/work09.jpg') }
]

const Home_content = (
  <div>
  <h2>Home</h2>
  </div>
  );

const About_content = (
  <div class="about_page">

  <h4>EDUCATION + SKILLS</h4>
  <li>Bachelor of Arts, University of California, Davis, 2008</li>
  <li> HTML5 + CSS3 + LESS/SASS + jQuery</li>
  <li>Javascript + ReactJS + Angular + Cordova + NPM + Github | Mobile Development</li>
  <li>UI design + templates + wireframes</li>
  <li>Salesforce VisualForce | Certified Developer Winter 14</li>
  <li>Bootstrap + Wordpress + Drupal + GSI Commerce</li>
  <li>Adobe Creative Suite 6</li>
  <li>Actionscript + Flash Animation</li>
  <li>Media Production: Photography + Videography</li>

  <h4>Freelance consulting | 09.2016-present</h4>

  <li>Identity design with small business clients to fit their own creative identity</li>
  <li>Web design + scalable development for business requirements with emphasis on mobile/responsive-first design</li>
  <li>Interactive design process + UI protoyping with clients on all ranges of projects</li>
  <li>Custom Wordpress implementation for small business clients to 100% user satisfaction</li>
  <li>SEO optimization with new and existing website to improve traffic and conversion rate up to 50%</li>
  <li>Implement custom ReactJS customer facing applications for small businesses</li>

  <h4>CITY & COUNTY OF SAN FRANCISCO | Mobile Developer | 06.2014-09.2016</h4>

  <li>Mobile website development of user-friendly websites for the general public to be 100% responsive and usable</li>
  <li>Emphasis on cross-browser, ARIA, and other disabled user interface features for the general public to make UI accessible for all users</li>
  <li>Mobile application development (Cordova/Angular/NPM/Github) for user-based applications</li>
  <li>Designing UI/UX interactive flows for front-facing mobile and web initiatives to improve usability</li>
  <li>CMS development with Vision + Drupal CMS for internal government departments for website refresh</li>

  <h4>PERFICIENT INC | Technical Consultant | 01.2013 - 03.2014</h4>

  Salesforce VisualForce development for custom client solutions
  <li>UI development (CSS/HTML/JS) for custom client user interface (ex. MobileIron, Frontrange)</li>
  <li>Mobile platform development with emphasis on responsive design for big clients (ex, Kabam)</li>
  <li>Spearheaded wireframes, XHTML code and CSS for custom solution for fortune 500 clients</li>
  <li>Emphasis on interactivity and user-friendly web products for client-facing portals to improve traffic and conversion rates up to 50%</li>
  <li>Media production (photography/videography) for new company branding</li>
  <li>Consultant on multiple projects applying expert knowledge of best design/coding practices from wireframe to full implementation</li>

  <h4>Freelance consulting | 07.2012-12.2012</h4>

  <li>Identity/Web design + scalable development with business logic integration/brand identity for clients of all business sizes</li>
  <li>Interactive design process + UI protoyping with clients on all ranges of projects</li>
  <li>Fully customized Wordpress implementation for small business clients to custom design</li>
  <li>SEO optimization with new and existing websites to improve traffic and conversion rate up to 50%</li>

  <h4>COSTPLUS WORLDMARKET | Web Developer | 02.2011-06.2012</h4>

  <li>Custom script development in Javascript/jQuery module development for seasonal campaign front page modules</li>
  <li>Integration of new technologies (HTML5/CSS3/jQuery) to modernize old templates into responsive and mobile-friendly layouts</li>
  <li>Usability A/B testing effort for eCommerce landing pages. Defined testing parameters, prepared prototypes, analyzed and reported results with conversion heatmap improvements up to 20%</li>
  <li>CMS & eCommerce content maintenance (GSI commerce) and management</li>
  <li>Developing weekly marketing campaign assets such as emails, front page content, and seasonal campaigns in HTML/CSS/JS</li>

  <h4>TELAVA NETWORKS | Web Developer | 06.2008 - 10.2010</h4>

  <li>Implemented wireframes in XHTML, ASP.NET and CSS to improve user-centered design (UCD) efforts for numerous pages</li>
  <li>Implemented UI/UX for dynamic back-end content (eCommerce, sign-up, etc) to be user-friendly and follow company creative identity</li>
  <li>ECommerce site maintenance for multiple sites with rotating seasonal campaigns</li>
  <li>Designed flash, website, and print material for company and affiliate companies</li>
  </div>
  );

const Work_Page = ({ match }) => (
  <div>
  {Work_Page_Array[(match.params.Work_Page-1)].project_name}
  <img src={Work_Page_Array[(match.params.Work_Page-1)].img} />
  </div>
  )

const Contact_content = (
  <div class="contact_page">
  <h2>Contact</h2>
  <p id="email"><a href="mailto:dsydesign@gmail.com">dsydesign@gmail.com</a></p>
  <p id="github"><a href="https://github.com/shaowenyao">github.com/shaowenyao</a></p>
  <p id="linkedin"><a href="https://www.linkedin.com/in/shaowenyao">linkedin.com/in/shaowenyao</a></p>
  <p id="resume"><a href="resume.docx">Resume [Word]</a></p>
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

const Footer = () => (
  <footer>
  powered by ReactJS v4
  </footer>
  )

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
  <Footer />
  </div>
  )

export default App;