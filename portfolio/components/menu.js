import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/aboutContent';
import {Work, WorkPage} from '../pages/workContent';
import Contact from '../pages/contactContent';

const Mobile_header = (
    <div > {Mobile_header_content} </div>
    );

const Mobile_header_content = (
        <div className="Mobile_header">
        <h2>SHAOWEN YAO</h2>
        </div>
      );
const Main = () => (
    <main>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path = "/about" component={About} />
    <Route path = "/work" component={Work} />
    <Route path = "/contact" component={Contact} />
    </Switch>
    </main>
    );

export { Mobile_header, Mobile_header_content, Main};