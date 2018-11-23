import React from 'react';
import { Switch, Route} from 'react-router-dom';
import About from '../pages/page_about';
import {Work, WorkPage} from '../pages/page_work';

const MainRouter = () => (
    <main>
        <Switch>
            <Route exact path = "/" component={Work} />
            <Route path = "/about" component={About} />
            <Route path = "/work/:id" component={WorkPage} />
        </Switch>
    </main>
    );

export { MainRouter };