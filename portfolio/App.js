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
{ project_name: "Business Wordpress Site", client_name:"Winter Wish Studio", project_description:"The client requested a identity revamp to be rebuilt on Wordpress. We also designed it mobile-first with a desktop and mobile stylesheet. We added social media customizations and made it easy to add content for most users.", img: require('./img/work01.jpg') },
{ project_name: "Advertising Site", client_name:"Lattice", project_description:"The objective was an attractive advertising website generate clicks for an advertising agency.", img: require('./img/work02.jpg') },
{ project_name: "Identity Redesign", client_name:"Lattice", project_description:"The client asked for a number of options for a identity revamp in terms of a logo, and to design the identity system from the approved design.", img: require('./img/work03.jpg') },
{ project_name: "Banner Ads", client_name:"Lattice", project_description:"The objective was to develop a variety of banner ads to encourage the user to visit the client site in question.", img: require('./img/work04.jpg') },
{ project_name: "Triptych Letter Brochure", client_name:"UC Davis Staff Assembly", project_description:"The university asked for a print handout to be developed to be issued out to show people what the department represented.", img: require('./img/work05.jpg') },
{ project_name: "Internal Salesforce Portal", client_name:"Pure Storage", project_description:"The client presented a design to be developed within a standard Salesforce Portal with full functionality and PureStorage branding look and feel.", img: require('./img/work06.jpg') },
{ project_name: "Internal Salesforce Portal", client_name:"Guavus", project_description:"Follow the client's identity system, a full UI/UX approach was spearheaded and let by me. This was followed by graphic design comps, implementation, and deployment.", img: require('./img/work07.jpg') },
{ project_name: "Internal Salesforce Portal", client_name:"Frontrange", project_description:"Personally led a full development cycle on an internal Salesforce portal, ranging from business requirements to UI/UX to graphic design to development and deployment involving managing an offshore team.", img: require('./img/work08.jpg') },
{ project_name: "Internal Salesforce Portal", client_name:"MobileIron", project_description:"Implemented a client design with the look and feel of their corporate identity, with a mobile-friendly view.", img: require('./img/work09.jpg') }
]

const Home_content = (
  <div className="Home_content">
  <h2>SHAOWEN YAO</h2>
  <h3>SFBAYAREA UI DEVELOPER</h3>
  </div>
  );

const Mobile_header_content = (
  <div className="Mobile_header">
  <h2>SHAOWEN YAO</h2>
  </div>
  );

const About_content = (
  <div className="about_page">

  <h5>EDUCATION + SKILLS</h5>
  <li>Bachelor of Arts, University of California, Davis, 2008</li>
  <li> HTML5 + CSS3 + LESS/SASS + jQuery</li>
  <li>Javascript + ReactJS + Angular + Cordova + NPM + Github | Mobile Development</li>
  <li>UI design + templates + wireframes</li>
  <li>Salesforce VisualForce | Certified Developer Winter 14</li>
  <li>Bootstrap + Wordpress + Drupal + GSI Commerce</li>
  <li>Adobe Creative Suite 6</li>
  <li>Actionscript + Flash Animation</li>
  <li>Media Production: Photography + Videography</li>

  <h5>Freelance consulting | 09.2016-present</h5>

  <li>Identity design with small business clients to fit their own creative identity</li>
  <li>Web design + scalable development for business requirements with emphasis on mobile/responsive-first design</li>
  <li>Interactive design process + UI protoyping with clients on all ranges of projects</li>
  <li>Custom Wordpress implementation for small business clients to 100% user satisfaction</li>
  <li>SEO optimization with new and existing website to improve traffic and conversion rate up to 50%</li>
  <li>Implement custom ReactJS customer facing applications for small businesses</li>

  <h5>CITY & COUNTY OF SAN FRANCISCO | Mobile Developer | 06.2014-09.2016</h5>

  <li>Mobile website development of user-friendly websites for the general public to be 100% responsive and usable</li>
  <li>Emphasis on cross-browser, ARIA, and other disabled user interface features for the general public to make UI accessible for all users</li>
  <li>Mobile application development (Cordova/Angular/NPM/Github) for user-based applications</li>
  <li>Designing UI/UX interactive flows for front-facing mobile and web initiatives to improve usability</li>
  <li>CMS development with Vision + Drupal CMS for internal government departments for website refresh</li>

  <h5>PERFICIENT INC | Technical Consultant | 01.2013 - 03.2014</h5>

  <li>Salesforce VisualForce development for custom client solutions</li>
  <li>UI development (CSS/HTML/JS) for custom client user interface (ex. MobileIron, Frontrange)</li>
  <li>Mobile platform development with emphasis on responsive design for big clients (ex, Kabam)</li>
  <li>Spearheaded wireframes, XHTML code and CSS for custom solution for fortune 500 clients</li>
  <li>Emphasis on interactivity and user-friendly web products for client-facing portals to improve traffic and conversion rates up to 50%</li>
  <li>Media production (photography/videography) for new company branding</li>
  <li>Consultant on multiple projects applying expert knowledge of best design/coding practices from wireframe to full implementation</li>

  <h5>COSTPLUS WORLDMARKET | Web Developer | 02.2011-06.2012</h5>

  <li>Custom script development in Javascript/jQuery module development for seasonal campaign front page modules</li>
  <li>Integration of new technologies (HTML5/CSS3/jQuery) to modernize old templates into responsive and mobile-friendly layouts</li>
  <li>Usability A/B testing effort for eCommerce landing pages. Defined testing parameters, prepared prototypes, analyzed and reported results with conversion heatmap improvements up to 20%</li>
  <li>CMS & eCommerce content maintenance (GSI commerce) and management</li>
  <li>Developing weekly marketing campaign assets such as emails, front page content, and seasonal campaigns in HTML/CSS/JS</li>

  <h5>TELAVA NETWORKS | Web Developer | 06.2008 - 10.2010</h5>

  <li>Implemented wireframes in XHTML, ASP.NET and CSS to improve user-centered design (UCD) efforts for numerous pages</li>
  <li>Implemented UI/UX for dynamic back-end content (eCommerce, sign-up, etc) to be user-friendly and follow company creative identity</li>
  <li>ECommerce site maintenance for multiple sites with rotating seasonal campaigns</li>
  <li>Designed flash, website, and print material for company and affiliate companies</li>
  </div>
  );

const Work_Page = ({ match }) => (
  <div className="Work_page">
  <div className="half floatleft img">
  <img className="half floatright" src={Work_Page_Array[(match.params.Work_Page-1)].img} />
  </div>
  <div className="floatleft desc">
  <span className="project_name">{Work_Page_Array[(match.params.Work_Page-1)].project_name}</span>
  <span className="client_name">{Work_Page_Array[(match.params.Work_Page-1)].client_name}</span>
  <span className="project_description">{Work_Page_Array[(match.params.Work_Page-1)].project_description}</span>
  </div>
  </div>
  )

const Contact_content = (
  <div className="contact_page">
  <p id="email"><a href="mailto:dsydesign@gmail.com">dsydesign@gmail.com</a></p>
  <p id="github"><a href="https://github.com/shaowenyao">github.com/shaowenyao</a></p>
  <p id="linkedin"><a href="https://www.linkedin.com/in/shaowenyao">linkedin.com/in/shaowenyao</a></p>
  </div>
  );

const Mobile_header = () => (
  <div > {Mobile_header_content} </div>
  )

const Header = React.createClass({
  render: function() {
    return (
      <header>
      <nav>
      <div className="navWide">
      <div className="wideDiv">
      <Link to="/" >HOME</Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/work">WORK</Link>
      <Link to="/contact">CONTACT</Link>
      </div>
      </div>
      <div className="navNarrow">
      <span className="fa fa-bars fa-2x navNarrowBtn" onClick={this.burgerToggle}>MENU</span>
      <div className="narrowLinks">
      <Link to="/about"onClick={this.burgerToggle} >ABOUT</Link>
      <Link to="/work" onClick={this.burgerToggle} >WORK</Link>
      <Link to="/contact" onClick={this.burgerToggle} >CONTACT</Link>
      </div>
      </div>
      </nav>
      </header>
      );
  },
  burgerToggle: function() {
    let linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'block';
    }
  }
});


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
  <span><a href="https://github.com/shaowenyao">Github</a> | <a href="https://www.linkedin.com/in/shaowenyao/">LinkedIn</a> | powered by <a href="https://reactjs.org/">ReactJS v4</a></span>
  </footer>
  )

const Home = () => (
  <div > {Home_content} </div>
  )

const About = () => (
  <div> {About_content} </div>
  )

const Work = ({ match }) => (
  <div className="work_page">
  <div className="work_page_single">
  <Route path={`${match.url}/:Work_Page`} component={Work_Page}/>
  </div>
  <div className="work_page_thumbnails">
  <Route exact path={match.url} render={() => (
    <div>{listItems}</div>
    )}/>
  </div>
  </div>
  )

const Contact = () => (
  <div> {Contact_content} </div> 
  )

const App = () => (
  <div>
  <Mobile_header />
  <Header />
  <Main />
  <Footer />
  </div>
  )

export default App;