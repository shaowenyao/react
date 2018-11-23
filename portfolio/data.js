import React from 'react';
import { Col } from 'reactstrap';

const numbers = [
    { target_str: "/work/1", img: require('./assets/img/work01/ajna1.JPG'), width: "6" },
    { target_str: "/work/2", img: require('./assets/img/work02/sf1.jpg'), width: "3" },
    { target_str: "/work/3", img: require('./assets/img/work03/OPP_website2.jpeg'), width: "3" },
    { target_str: "/work/4", img: require('./assets/img/work04/auto6a.jpg'), width: "2" },
    { target_str: "/work/5", img: require('./assets/img/work05/HIFI-2a.png'), width: "4" },
    { target_str: "/work/6", img: require('./assets/img/work06/FINAL.png'), width: "2" },
    { target_str: "/work/7", img: require('./assets/img/work07/poster.jpg'), width: "2" }
]

const listItems = numbers.map((number) =>
    <Col xs={number.width} key={number.target_str} className="work_page_thumbnails_container">
        <div className="work_page_thumbnails">
            <li key={number.img.toString()}>
                <a href={number.target_str} className="workThumb">
                    <img src={number.img} alt={number.img} />
                </a>
            </li>
        </div>
    </Col>
);

const Work_Page_Array = [
    {
        project_name: "eCommerce store",
        client_name: "Ajna Living",
        project_description: "Redesigned and rebranded online business site based on BigCommerce platform. Multiple UI customizations, responsive design, and backend eCommerce functionality with HTML/CSS/JS",
        img1: require('./assets/img/work01/ajna1.JPG'),
        img2: require('./assets/img/work01/ajna1a.PNG'),
        img3: require('./assets/img/work01/ajna2.JPG'),
        img4: require('./assets/img/work01/ajna2a.PNG'),
        img5: require('./assets/img/work01/ajna3.JPG'),
        img6: require('./assets/img/work01/ajna3a.PNG'),
        img7: require('./assets/img/work01/ajna4.JPG'),
        img8: require('./assets/img/work01/ajna4a.PNG'),
        img9: require('./assets/img/work01/ajna5a.PNG'),
        img10: require('./assets/img/blankimg.png')
    },
    {
        project_name: "SalesForce custom CMS portals",
        client_name: "Pure Storage, Guavus, Frontrange, MobileIron",
        project_description: "The client presented a design to be developed within a standard Salesforce Portal with full functionality and PureStorage branding look and feel.\nFollow the client's identity system, a full UI/UX approach was spearheaded and let by me. This was followed by graphic design comps, implementation, and deployment.\nPersonally led a full development cycle on an internal Salesforce portal, ranging from business requirements to UI/UX to graphic design to development and deployment involving managing an offshore team.\nImplemented a client design with the look and feel of their corporate identity, with a mobile-friendly view.",

        img1: require('./assets/img/work02/sf1.jpg'),
        img2: require('./assets/img/work02/sf2.jpg'),
        img3: require('./assets/img/work02/sf3.jpg'),
        img4: require('./assets/img/work02/sf4.jpg'),
        img5: require('./assets/img/blankimg.png'),
        img6: require('./assets/img/blankimg.png'),
        img7: require('./assets/img/blankimg.png'),
        img8: require('./assets/img/blankimg.png'),
        img9: require('./assets/img/blankimg.png'),
        img10: require('./assets/img/blankimg.png')
    },
    {
        project_name: "Wordpress site w/React components + print collateral",
        client_name: "Our Poke Place",
        project_description: "Create a business website in Wordpress with the client’s brand identity.\nWe also designed it mobile-first with a desktop and mobile stylesheet.\n We added social media customizations and made it easy to add content for most users.\n We added React components to Wordpress and also implemented print collateral",
        img1: require('./assets/img/work03/OPP_website1.JPG'),
        img2: require('./assets/img/work03/OPP_website2.jpeg'),
        img3: require('./assets/img/work03/opp_menu.jpg'),
        img4: require('./assets/img/blankimg.png'),
        img5: require('./assets/img/blankimg.png'),
        img6: require('./assets/img/blankimg.png'),
        img7: require('./assets/img/blankimg.png'),
        img8: require('./assets/img/blankimg.png'),
        img9: require('./assets/img/blankimg.png'),
        img10: require('./assets/img/blankimg.png')
    },
    {
        project_name: "website & marketing collateral + logo deisn",
        client_name: "Lattice Media Group",
        project_description: "The client asked for a number of options for a identity revamp in terms of a logo, and to design the identity system from the approved design..\n We also design web and marketing collateral",
        img1: require('./assets/img/work04/auto6a.jpg'),
        img2: require('./assets/img/work04/auto6b.jpg'),
        img3: require('./assets/img/work04/banners.jpg'),
        img4: require('./assets/img/work04/lattice_logo_draft1-6.jpg'),
        img5: require('./assets/img/work04/lattice_logo_draft1-8a.jpg'),
        img6: require('./assets/img/work04/lattice_logo_draft1.jpg'),
        img7: require('./assets/img/blankimg.png'),
        img8: require('./assets/img/blankimg.png'),
        img9: require('./assets/img/blankimg.png'),
        img10: require('./assets/img/blankimg.png')
    },
    {
        project_name: "mock UX Moble App Study",
        client_name: "Quickbooks",
        project_description: "Rework the App to be more user-friendly, and to incorporate features from competitors like Freshbooks with more modern App redesigns.",
        img1: require('./assets/img/work05/HIFI-2a.png'),
        img2: require('./assets/img/blankimg.png'),
        img3: require('./assets/img/blankimg.png'),
        img4: require('./assets/img/blankimg.png'),
        img5: require('./assets/img/blankimg.png'),
        img6: require('./assets/img/blankimg.png'),
        img7: require('./assets/img/blankimg.png'),
        img8: require('./assets/img/blankimg.png'),
        img9: require('./assets/img/blankimg.png'),
        img10: require('./assets/img/blankimg.png')
    },
    {
        project_name: "Logo Design (various)",
        client_name: "JTan, YuSangFong, Rachel Reed Vocals",
        project_description: "Logo and Identity redesign for client's individual needs",
        img1: require('./assets/img/work06/FINAL.png'),
        img2: require('./assets/img/work06/logo1_PDF.png'),
        img3: require('./assets/img/work06/logo2_PDF.png'),
        img4: require('./assets/img/work06/rachel.png'),
        img5: require('./assets/img/blankimg.png'),
        img6: require('./assets/img/blankimg.png'),
        img7: require('./assets/img/blankimg.png'),
        img8: require('./assets/img/blankimg.png'),
        img9: require('./assets/img/blankimg.png'),
        img10: require('./assets/img/blankimg.png')
    },
    {
        project_name: " Graphic+Print Design",
        client_name: "UC Davis R4/Staff Assembly",
        project_description: "Logo and Identity redesign for UC Davis for various programs",
        img1: require('./assets/img/work07/catalog_back.jpg'),
        img2: require('./assets/img/work07/catalog_front.jpg'),
        img3: require('./assets/img/work07/poster_1.jpg'),
        img4: require('./assets/img/work07/poster_2.jpg'),
        img5: require('./assets/img/work07/poster.jpg'),
        img6: require('./assets/img/work07/retreat07_A1.jpg'),
        img7: require('./assets/img/work07/retreat07_A4.jpg'),
        img8: require('./assets/img/work07/retreat07_agenda2.jpg'),
        img9: require('./assets/img/work07/retreat07_board.jpg'),
        img10: require('./assets/img/blankimg.png')
    },
]

export { numbers, listItems, Work_Page_Array }