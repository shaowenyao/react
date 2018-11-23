import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faBriefcase, faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Footer = (
    <footer className="fixed-bottom text-center">
        <span>&#169;Shaowen Yao</span>
        <span>
            <a href="mailto:dsydesign@gmailcom">
                <FontAwesomeIcon icon={faAddressCard} />dsydesign@gmail.com
            </a>
        </span>
        <span>
            <a href="https://www.linkedin.com/in/shaowenyao/">
                <FontAwesomeIcon icon={faBriefcase} />LinkedIn
            </a>
        </span>
        <span> <a href="#top"><FontAwesomeIcon icon={faArrowUp} />Back to top </a> </span>
    </footer>
    )

export default Footer;