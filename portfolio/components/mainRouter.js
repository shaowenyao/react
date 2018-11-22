import React from 'react';
import { Switch, Route} from 'react-router-dom';
import About from '../pages/page_about';
import {Work, WorkPage} from '../pages/page_work';
import Contact from '../pages/page_contact';

const MainRouter = () => (
    <main>
        <Switch>
            <Route exact path = "/" component={Work} />
            <Route path = "/about" component={About} />
            <Route path = "/contact" component={Contact} />
            <Route path = "/work/:id" component={WorkPage} />
        </Switch>
    </main>
    );

export { MainRouter };