import React from 'react';
import { Col } from 'reactstrap';

const numbers = [
    { target_str: "/work/1", img: require('./assets/img/work01/thumb.jpg'), width: "3", zoom:"120%" },
    { target_str: "/work/2", img: require('./assets/img/work02/sf1.jpg'), width: "3", zoom:"120%" },
    { target_str: "/work/3", img: require('./assets/img/work03/thumb.jpeg'), width: "4", zoom:"100%" },
    { target_str: "/work/4", img: require('./assets/img/work04/thumb.jpg'), width: "2", zoom:"120%" },
    { target_str: "/work/5", img: require('./assets/img/work05/work1.jpg'), width: "4", zoom:"100%" },
    { target_str: "/work/6", img: require('./assets/img/work06/thumb.png'), width: "2", zoom:"100%" },
    { target_str: "/work/7", img: require('./assets/img/work07/thumb.jpg'), width: "2", zoom:"100%" }
]

const listItems = numbers.map((number) =>
    <Col xs={number.width} key={number.target_str} className="work_page_thumbnails_container">
        <div className="work_page_thumbnails">
            <li key={number.img.toString()}>
                <a href={number.target_str} className="workThumb">
                    <img src={number.img} alt={number.img} width={number.zoom} />
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
        img1: require('./assets/img/work01/work1.jpg'),
        img2: require('./assets/img/work01/work2.jpg'),
        img3: require('./assets/img/work01/work3.jpg'),
        img4: require('./assets/img/work01/work4.jpg'),
        img5: require('./assets/img/work01/work5.jpg'),
        img6: require('./assets/img/blankimg.png'),
        img7: require('./assets/img/blankimg.png'),
        img8: require('./assets/img/blankimg.png'),
        img9: require('./assets/img/blankimg.png'),
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
        img1: require('./assets/img/work03/work1.jpg'),
        img2: require('./assets/img/work03/work2.jpg'),
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
        project_name: "website & marketing collateral + logo deisn",
        client_name: "Lattice Media Group",
        project_description: "The client asked for a number of options for a identity revamp in terms of a logo, and to design the identity system from the approved design..\n We also design web and marketing collateral",
        img1: require('./assets/img/work04/auto6a.jpg'),
        img2: require('./assets/img/work04/auto6b.jpg'),
        img3: require('./assets/img/work04/work2.jpg'),
        img4: require('./assets/img/blankimg.png'),
        img5: require('./assets/img/blankimg.png'),
        img6: require('./assets/img/blankimg.png'),
        img7: require('./assets/img/blankimg.png'),
        img8: require('./assets/img/blankimg.png'),
        img9: require('./assets/img/blankimg.png'),
        img10: require('./assets/img/blankimg.png')
    },
    {
        project_name: "mock UX Moble App Study",
        client_name: "Quickbooks",
        project_description: "SUMMARY\nOBJECTIVE | To explore how Quickbooks could optimize their mobile app in regards to their competition, and how they could simplify the UI or streamline to reach a larger audience while retaining the current without sacrificing complexity.\nSOLUTION | We went through the UX flow of the current app to see what we could redesign and alter the flow to be more user friendly. We also reserached the competiting apps to see what exciting features we could draw from them.\nResearch | We quickly identified competitiors with better UX flows like Freshbooks. They offered less functionality, but the way they implemented was more user friendly and for the small business user it was an easier point of entry and easier to use. We then downloaded the apps and tried them out to see what we liked or what we wanted to remove from Quickbooks\nInterviews | We then found small business owners or people who would fit the test case and walked them through the UX flow of Quickbooks and Freshbooks in the sense of the actual product. We asked which one they liked or which one they favored on their use. Many said Quickbooks had many features, but Freshbooks was easy to use and for small scale it made more sense to adopt. From there. we moved onto brainstorming and building out a lo-fi UX flow in Sketch. \nBrainstorming | we first looked at the existing app and tried to generate a lo-fi mockup about how we could improve it while not entirely changing the UX flow. We split up the items and re-designed the flow to be more user-friendly and easy to modify.",
        img1: require('./assets/img/work05/work1.jpg'),
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
        img1: require('./assets/img/work06/work1.jpg'),
        img2: require('./assets/img/work06/work2.jpg'),
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
        project_name: " Graphic+Print Design",
        client_name: "UC Davis R4/Staff Assembly",
        project_description: "Logo and Identity redesign for UC Davis for various programs",
        img1: require('./assets/img/work07/catalog_back.jpg'),
        img2: require('./assets/img/work07/catalog_front.jpg'),
        img3: require('./assets/img/work07/work01.jpg'),
        img4: require('./assets/img/work07/work02.jpg'),
        img5: require('./assets/img/blankimg.png'),
        img6: require('./assets/img/blankimg.png'),
        img7: require('./assets/img/blankimg.png'),
        img8: require('./assets/img/blankimg.png'),
        img9: require('./assets/img/blankimg.png'),
        img10: require('./assets/img/blankimg.png')
    },
]

export { numbers, listItems, Work_Page_Array }