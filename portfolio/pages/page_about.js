import React from 'react';
import './pages.css';
import './page_about.css';
import resume from '../assets/RESUME_AI.pdf';

const About = () => (
  <div> {About_content} </div>
  )

const About_content = (
  <div className="about_page">
  <h4>About</h4>
  
  <p>
    Hi I'm Shaowen, a San Francisco Bay Area native. I am an UX designer with experience in frontend development. I have 10 years of experience with graphic design, UX design, user empathy, and strong frontend experience.
    <br />
    Click <a href={resume}>here</a> for my resume.

    Thanks!
    <hr />
    <span>This site is a work in progress.  This site is made from React, Router, Bootstrap, and a local REST API call point.</span>
  </p>
  </div>
  );

export default About;