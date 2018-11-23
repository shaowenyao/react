import React from 'react';
import './pages.css';
import './page_about.css';

const About = () => (
  <div> {About_content} </div>
  )

const About_content = (
  <div className="about_page">
  <h4>About</h4>
  
  <p>
    Hi I'm Shaowen, a San Francisco Bay Area native. I am an UX designer with experience in frontend development. 
    <hr />
    <span>This site is a work in progress.  This site is made from React, Router, Bootstrap, and a local REST API call point.</span>
  </p>
  </div>
  );

export default About;