import React from 'react';
import pdf0 from '../assets/img/resume.pdf';
import pdf1 from '../assets/img/RESUME_AI.pdf';
import pdf2 from '../assets/img/RESUME_AI_SKETCH.pdf';

const Contact_content = (
    <div className="contact_page">
    <p id="email"><a href="mailto:dsydesign@gmail.com">Email</a></p>
    <p id="github"><a href="https://github.com/shaowenyao">GitHub</a></p>
    <p id="github"><a href="https://www.hackerrank.com/dsydesign">HackerRank</a></p>
    <p id="linkedin"><a href="https://www.linkedin.com/in/shaowenyao">LinkedIn</a></p>
      <p id="linkedin"><a href={pdf0}>Resume</a></p>
      <p id="linkedin"><a href={pdf1}>UX highlight</a></p>
      <p id="linkedin"><a href={pdf2}>UX studies</a></p>
    </div>
    );
    
    
    const Contact = () => (
      <div> {Contact_content} </div> 
      )

export default Contact;