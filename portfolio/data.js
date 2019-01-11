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
        project_description: "BACKGROUND | Ajna Living is a small brick-and-mortar store with an online shop which sells mostly furniture. A similar competitor would be Anthropologie or Cost Plus World Market.\nOBJECTIVE | The client was using the existing platform (BigCommerce) with a older theme that was not mobile compatible. They wanted to make the eCommerce platform mobile friendly with a modern look and feel.\nCHALLENGES | The client had a tight deadline for launch. Their look and feel they wanted was to be similar to their competitors (Anthropologie, etc).They also wanted reach for their social media and email userbase for marketing requirements.\nSOLUTION | I chose a default theme for global functionality as a base, and implemented their color palette (dark blue). Per their specific requests for look and feel, thus the font choices and the simplicity of the white space. They also requested other UI components like a floating fixed navbar and being able to change the color of products (like Amazon) - all pretty standard eCommerce interfaces. For their marketing request, I also integrated a social media banner/email campaign click-through.\nIMPLEMENT | In terms of actual tasks, I redesigned and rebranded online business site based on BigCommerce platform. Multiple UI customizations, responsive design, and backend eCommerce functionality with HTML/CSS/JS",
        img1: require('./assets/img/work01/work1.jpg'),
        img2: require('./assets/img/work01/work2.jpg'),
        img3: require('./assets/img/work01/work3.jpg'),
        img4: require('./assets/img/work01/work4.jpg'),
        img5: require('./assets/img/work01/work5.jpg'),
        img6: require('./assets/img/work01/work6.jpg'),
        img7: require('./assets/img/blankimg.png'),
        img8: require('./assets/img/blankimg.png'),
        img9: require('./assets/img/blankimg.png'),
        img10: require('./assets/img/blankimg.png')
        
    },
    {
        project_name: "SalesForce custom CMS portals",
        client_name: "Pure Storage, Guavus, Frontrange, MobileIron",
        project_description: "BACKGROUND | Fortune 500 mid to large companies that are looking for internal and external Salesforce portals that reflect the look and feel of their current brand.\nOBJECTIVE | The client is looking for a rebranded Salesforce portal (header, sidebar, footer, UI elements) so the generic Salesforce process screens do not look blank.\nCHALLENGES | It can vary but clients might have a tight deadline or a lack of resources. There were cases where they were lacking a UI or design resource, which then I stepped in and filled that role alongside frontend development.\nSOLUTION | To make sure I am meeting the standards of the client, I usually sit in on the kickoff call to the final presentation. I make sure to conform to the identity pattern of the company, design all drafts to the spec of the client, and have them approve all mock-ups, which I develop to a 99% accuracy.\nIMPLEMENT | The clients usually present a design to be developed within a standard Salesforce Portal with full functionality and PureStorage branding look and feel. Follow the client's identity system, a full UI/UX approach was spearheaded and let by me. This was followed by graphic design comps, implementation, and deployment. Personally led a full development cycle on an internal Salesforce portal, ranging from business requirements to UI/UX to graphic design to development and deployment involving managing an offshore team. Implemented a client design with the look and feel of their corporate identity, with a mobile-friendly view.                ",
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
        project_description: "BACKGROUND | Our Poke Place is a start up San Francisco based restaurant.\nOBJECTIVE | The client wanted a brand new look and feel (logo already pre-designed) for the website and print collateral. The focus was a bit urban but also clean to reflect the simplicity of the brand.\nCHALLENGES | The challenge was the right use of design and elements to present the information in a visually exciting manner. There was some discussion of using some icon imagery and the teal color to represent the brand.\nSOLUTION | My solution was to use a combination of solid colors, urban imagery, and graphic fonts. The client had some inspiration from SoCal so I tried to integrate of that visual imagery into the design like hip-hop. “You down with OPP” was one of their opening slogans. \nIMPLEMENT | We created a business website in Wordpress with the client’s brand identity. The website was design it mobile-first with a desktop and mobile stylesheet. It also included social media customizations and made it easy to add content for most users. Finally we added React components to Wordpress and also implemented print collateral as well to match the look and feel of the site.        ",
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
        project_description: "BACKGROUND | Lattice Media Group is a company that produces marketing pages for products.\nOBJECTIVE | The user must go through a series of steps to enter personal information until final conversion.\nCHALLENGES | The challenge lies in spreading out the information so the user feels comfortable. Another challenge is to make the site visually interesting so the user feels inclined to move through the steps.\nSOLUTION | My solution was to split up the information so that the user is not overwhelmed on the initial page. I make a welcoming banner page and split up the steps (address/contact for example) and put the final step on its separate page as that is usually secure information.\nIMPLEMENT | I usually make a template with a look and feel for the background, buttons, color scheme. I then make each page consistent with a minimal amount of fields and clear UI navigation.  Regarding the second image, the company asked for a number of options for a identity revamp in terms of a logo, and to design the identity system from the approved design.",
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
        project_description: "OBJECTIVE | To explore how Quickbooks could optimize their mobile app in regards to their competition, and how they could simplify the UI or streamline to reach a larger audience while retaining the current without sacrificing complexity.\nCHALLENGES | One of the challenges was wrestling trying to keep it simple while keeping it with the rich features the user wanted. What we found was the Quickbooks mobile app sacrificed a lot of rich workflow the desktop application had provided.\nRESEARCH | We quickly identified competitiors with better UX flows like Freshbooks. They offered less functionality, but the way they implemented was more user friendly and for the small business user it was an easier point of entry and easier to use. We then downloaded the apps and tried them out to see what we liked or what we wanted to remove from Quickbooks\nINTERVIEWS | We then found small business owners or people who would fit the test case and walked them through the UX flow of Quickbooks and Freshbooks in the sense of the actual product. We asked which one they liked or which one they favored on their use. Many said Quickbooks had many features, but Freshbooks was easy to use and for small scale it made more sense to adopt. From there. we moved onto brainstorming and building out a lo-fi UX flow in Sketch. \nBRAINSTORMING | we first looked at the existing app and tried to generate a lo-fi mockup about how we could improve it while not entirely changing the UX flow. We split up the items and re-designed the flow to be more user-friendly and easy to modify.\nSOLUTION | We went through the UX flow of the current app to see what we could redesign and alter the flow to be more user friendly. We also researched the competing apps to see what exciting features we could draw from them.",
        img1: require('./assets/img/work05/work1.jpg'),
        img2: require('./assets/img/work05/work2.jpg'),
        img3: require('./assets/img/work05/work1.jpg'),
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