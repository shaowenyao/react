import React from 'react';
import { Route } from 'react-router-dom';
import { listItems, Work_Page_Array } from '../data.js';
import { Row} from 'reactstrap';
import './pages.css';
import './page_work.css';

const Work = ({ match }) => (
    <div className="work_page">
            <Route exact path={match.url} render={() => ( <Row>{listItems}</Row>)}/>
    </div>
    )

const WorkPage = ({ match }) => (
    <div className="Work_page">
        <img className="projImg" src={Work_Page_Array[(match.params.id-1)].img1} alt={match.params.id} />
        <div className="projdesc">
            <p className="project_name"><span className="boldthis">Project | </span>{Work_Page_Array[(match.params.id-1)].project_name}</p>
            <p className="client_name"><span className="boldthis">Client | </span>{Work_Page_Array[(match.params.id-1)].client_name}</p>
            <p className="project_description">{Work_Page_Array[(match.params.id-1)].project_description}</p>
        </div>
        <img className="projImg" src={Work_Page_Array[(match.params.id-1)].img2} alt={match.params.id} />
        <img className="projImg" src={Work_Page_Array[(match.params.id-1)].img3} alt={match.params.id} />
        <img className="projImg" src={Work_Page_Array[(match.params.id-1)].img4} alt={match.params.id} />
        <img className="projImg" src={Work_Page_Array[(match.params.id-1)].img5} alt={match.params.id} />
        <img className="projImg" src={Work_Page_Array[(match.params.id-1)].img6} alt={match.params.id} />
        <img className="projImg" src={Work_Page_Array[(match.params.id-1)].img7} alt={match.params.id} />
        <img className="projImg" src={Work_Page_Array[(match.params.id-1)].img8} alt={match.params.id} />
        <img className="projImg" src={Work_Page_Array[(match.params.id-1)].img9} alt={match.params.id} />
        <img className="projImg" src={Work_Page_Array[(match.params.id-1)].img10} alt={match.params.id} />
    </div>
    )

export {Work, WorkPage};