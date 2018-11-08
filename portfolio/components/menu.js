import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import About from '../pages/aboutContent';
import {Work, WorkPage} from '../pages/workContent';
import Contact from '../pages/contactContent';


const Main = () => (
    <main>
    <Switch>
    <Route exact path = "/" component={Work} />
    <Route path = "/about" component={About} />
    <Route path = "/contact" component={Contact} />
    </Switch>
    </main>
    );

export { Main};