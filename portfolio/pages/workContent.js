import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { listItems, Work_Page_Array } from '../data.js';

const Work = ({ match }) => (
    <div className="work_page">
    <div className="work_page_single">
    <Route path={`${match.url}/:Work_Page`} component={Work_Page}/>
    </div>
    <div className="work_page_thumbnails"> <Route exact path={match.url} render={() => (
      <div>{listItems}</div>
      )}/>
    </div>
    </div>
    )

const Work_Page = ({ match }) => (
    <div className="Work_page">
    <div className="half floatleft img">
    <img className="half floatright" src={Work_Page_Array[(match.params.Work_Page-1)].img} />
    <img className="half floatright" src={Work_Page_Array[(match.params.Work_Page-1)].img2} />
    </div>
    <div className="floatleft desc">
    <span className="project_name">{Work_Page_Array[(match.params.Work_Page-1)].project_name}</span>
    <span className="client_name">{Work_Page_Array[(match.params.Work_Page-1)].client_name}</span>
    <span className="project_description">{Work_Page_Array[(match.params.Work_Page-1)].project_description}</span>
    </div>
    </div>
    )

export { Work, Work_Page};