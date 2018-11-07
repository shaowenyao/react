import React from 'react';

const numbers = [
    { target_str: "/work/1", img: require('./assets/img/work_thumbnail01.jpg') },
    { target_str: "/work/2", img: require('./assets/img/work_thumbnail02.jpg') },
    { target_str: "/work/3", img: require('./assets/img/work_thumbnail03.jpg') },
    { target_str: "/work/4", img: require('./assets/img/work_thumbnail04.jpg') },
    { target_str: "/work/5", img: require('./assets/img/work_thumbnail05.jpg') },
    { target_str: "/work/6", img: require('./assets/img/work_thumbnail06.jpg') },
    { target_str: "/work/7", img: require('./assets/img/work_thumbnail07.jpg') },
    { target_str: "/work/8", img: require('./assets/img/work_thumbnail08.jpg') },
    { target_str: "/work/9", img: require('./assets/img/work_thumbnail09.jpg') }
    ]
    
const design_pdf = [
    { target_str: "/work/1", img: require('./assets/img/work_thumbnail01.jpg') },
    { target_str: "/work/2", img: require('./assets/img/work_thumbnail02.jpg') }
    ]

const listItems = numbers.map((number) =>
      <li key={number.img.toString()}><a href={number.target_str}> <img src={number.img} /> </a></li>
      );
    
const Work_Page_Array = [
        { project_name: "Our Poke Place", client_name:"Our Poke Place", project_description:"Create a business website in Wordpress with the client’s brand identity. We also designed it mobile-first with a desktop and mobile stylesheet. We added social media customizations and made it easy to add content for most users.", img: require('./assets/img/work01.jpg'), img2: require('./assets/img/work01.jpg') },
        { project_name: "Ajna Living", client_name:"Ajna Living", project_description:"Redesigned and rebranded online business site based on BigCommerce platform. Multiple UI customizations, responsive design, and backend eCommerce functionality with HTML/CSS/JS.", img: require('./assets/img/work02.jpg'), img2: require('./assets/img/work01.jpg') },
        { project_name: "Identity Redesign", client_name:"Lattice", project_description:"The client asked for a number of options for a identity revamp in terms of a logo, and to design the identity system from the approved design.", img: require('./assets/img/work03.jpg'), img2: require('./assets/img/work01.jpg') },
        { project_name: "Banner Ads", client_name:"Lattice", project_description:"The objective was to develop a variety of banner ads to encourage the user to visit the client site in question.", img: require('./assets/img/work04.jpg'), img2: require('./assets/img/work01.jpg') },
        { project_name: "UX Moble App Study", client_name:"Quickbooks", project_description:"Rework the App to be more user-friendly, and to incorporate features from competitors like Freshbooks with more modern App redesigns.", img: require('./assets/img/work05.jpg'), img2: require('./assets/img/work01.jpg') },
        { project_name: "Internal Salesforce Portal", client_name:"Pure Storage", project_description:"The client presented a design to be developed within a standard Salesforce Portal with full functionality and PureStorage branding look and feel.", img: require('./assets/img/work06.jpg'), img2: require('./assets/img/work01.jpg') },
        { project_name: "Internal Salesforce Portal", client_name:"Guavus", project_description:"Follow the client's identity system, a full UI/UX approach was spearheaded and let by me. This was followed by graphic design comps, implementation, and deployment.", img: require('./assets/img/work07.jpg'), img2: require('./assets/img/work01.jpg') },
        { project_name: "Internal Salesforce Portal", client_name:"Frontrange", project_description:"Personally led a full development cycle on an internal Salesforce portal, ranging from business requirements to UI/UX to graphic design to development and deployment involving managing an offshore team.", img: require('./assets/img/work08.jpg'), img2: require('./assets/img/work01.jpg') },
        { project_name: "Internal Salesforce Portal", client_name:"MobileIron", project_description:"Implemented a client design with the look and feel of their corporate identity, with a mobile-friendly view.", img: require('./assets/img/work09.jpg'), img2: require('./assets/img/work01.jpg') }
    ]

export { numbers, design_pdf, listItems, Work_Page_Array}